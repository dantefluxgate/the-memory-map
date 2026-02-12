import { useEffect, useRef, useState } from 'react'

export default function RelationshipMap({ memories }) {
  const mapContainer = useRef(null)
  const mapRef = useRef(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  const locations = memories.filter(
    (m) => m.location?.coordinates && !m.loading
  )

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return

    const initMap = async () => {
      const mapboxgl = (await import('mapbox-gl')).default
      await import('mapbox-gl/dist/mapbox-gl.css')

      // Fetch token at runtime to avoid baking secrets into the build
      try {
        const configRes = await fetch('/api/config')
        const config = await configRes.json()
        mapboxgl.accessToken = config.mapboxToken || ''
      } catch {
        mapboxgl.accessToken = ''
      }

      if (!mapboxgl.accessToken) {
        console.warn('Mapbox token not set. Map will not render.')
        return
      }

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-98.5, 39.8],
        zoom: 3,
        attributionControl: false,
        logoPosition: 'bottom-left',
      })

      map.on('load', () => {
        setMapLoaded(true)
      })

      mapRef.current = map
    }

    initMap()

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return

    const map = mapRef.current
    const existingMarkers = document.querySelectorAll('.memory-marker')
    existingMarkers.forEach((el) => el.remove())

    if (locations.length === 0) return

    const importMapbox = async () => {
      const mapboxgl = (await import('mapbox-gl')).default

      const bounds = new mapboxgl.LngLatBounds()

      locations.forEach((memory, i) => {
        const [lat, lng] = memory.location.coordinates
        const coord = [lng, lat]
        bounds.extend(coord)

        const markerEl = document.createElement('div')
        markerEl.className = 'memory-marker'
        markerEl.style.cssText = `
          width: 12px;
          height: 12px;
          background: #D4A574;
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(212,165,116,0.5);
          animation: marker-drop 0.5s ease-out forwards;
          animation-delay: ${i * 0.3}s;
          opacity: 0;
        `

        const popup = new mapboxgl.Popup({
          offset: 15,
          closeButton: false,
          className: 'memory-popup',
        }).setHTML(
          `<div style="font-family: Satoshi, sans-serif; font-size: 11px; color: #E8C9A0; background: #111; padding: 6px 10px; border-radius: 4px;">
            ${memory.location.place_name}
          </div>`
        )

        new mapboxgl.Marker({ element: markerEl })
          .setLngLat(coord)
          .setPopup(popup)
          .addTo(map)
      })

      if (locations.length > 1) {
        map.fitBounds(bounds, { padding: 60, maxZoom: 12 })
      } else {
        const [lat, lng] = locations[0].location.coordinates
        map.flyTo({ center: [lng, lat], zoom: 10 })
      }
    }

    importMapbox()
  }, [locations, mapLoaded])

  return (
    <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden border border-border-subtle">
      <div ref={mapContainer} className="w-full h-full" />

      {locations.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-secondary/80 pointer-events-none">
          <p className="font-body text-sm text-text-tertiary text-center px-6">
            Memories with places will appear here
          </p>
        </div>
      )}
    </div>
  )
}
