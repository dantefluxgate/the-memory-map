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

    // Clean up existing route layers
    if (map.getLayer('preview-route-glow')) map.removeLayer('preview-route-glow')
    if (map.getLayer('preview-route-line')) map.removeLayer('preview-route-line')
    if (map.getSource('preview-route')) map.removeSource('preview-route')

    if (locations.length === 0) return

    const importMapbox = async () => {
      const mapboxgl = (await import('mapbox-gl')).default

      const bounds = new mapboxgl.LngLatBounds()
      const coords = []

      locations.forEach((memory, i) => {
        const [lat, lng] = memory.location.coordinates
        const coord = [lng, lat]
        bounds.extend(coord)
        coords.push(coord)

        const markerEl = document.createElement('div')
        markerEl.className = 'memory-marker'
        markerEl.style.cssText = `
          width: 14px;
          height: 14px;
          background: radial-gradient(circle, #E8C9A0 0%, #D4A574 60%, rgba(212,165,116,0.6) 100%);
          border-radius: 50%;
          box-shadow: 0 0 16px rgba(212,165,116,0.5), 0 0 40px rgba(212,165,116,0.15);
          animation: marker-drop 0.5s ease-out forwards;
          animation-delay: ${i * 0.3}s;
          opacity: 0;
          position: relative;
        `

        // Label
        const labelEl = document.createElement('div')
        labelEl.style.cssText = `
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          font-family: Satoshi, sans-serif;
          font-size: 9px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: rgba(232,201,160,0.6);
          white-space: nowrap;
          text-shadow: 0 1px 4px rgba(0,0,0,0.8);
        `
        labelEl.textContent = memory.location.place_name
        markerEl.appendChild(labelEl)

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

      // Draw route line connecting markers
      if (coords.length >= 2) {
        map.addSource('preview-route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: coords,
            },
          },
        })

        // Glow layer
        map.addLayer({
          id: 'preview-route-glow',
          type: 'line',
          source: 'preview-route',
          layout: { 'line-join': 'round', 'line-cap': 'round' },
          paint: {
            'line-color': 'rgba(212, 165, 116, 0.1)',
            'line-width': 5,
            'line-blur': 4,
          },
        })

        // Dashed line
        map.addLayer({
          id: 'preview-route-line',
          type: 'line',
          source: 'preview-route',
          layout: { 'line-join': 'round', 'line-cap': 'round' },
          paint: {
            'line-color': 'rgba(212, 165, 116, 0.3)',
            'line-width': 1.5,
            'line-dasharray': [3, 4],
          },
        })
      }

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
    <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden">
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
