import { useEffect, useRef, useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal.js'

export default function SharedMapReveal({ memories }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 })
  const mapContainer = useRef(null)
  const mapRef = useRef(null)
  const [mapReady, setMapReady] = useState(false)

  const locations = memories.filter((m) => m.location?.coordinates)

  useEffect(() => {
    if (!isVisible || !mapContainer.current || mapRef.current) return

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
      if (!mapboxgl.accessToken) return

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-98.5, 39.8],
        zoom: 3,
        attributionControl: false,
        interactive: true,
      })

      map.on('load', () => {
        setMapReady(true)

        if (locations.length === 0) return

        const bounds = new mapboxgl.LngLatBounds()

        locations.forEach((memory, i) => {
          const [lat, lng] = memory.location.coordinates
          const coord = [lng, lat]
          bounds.extend(coord)

          setTimeout(() => {
            const markerEl = document.createElement('div')
            markerEl.style.cssText = `
              width: 12px;
              height: 12px;
              background: #D4A574;
              border-radius: 50%;
              box-shadow: 0 0 12px rgba(212,165,116,0.5);
              animation: marker-drop 0.5s ease-out forwards;
            `

            new mapboxgl.Marker({ element: markerEl })
              .setLngLat(coord)
              .addTo(map)
          }, i * 300)
        })

        if (locations.length > 1) {
          map.fitBounds(bounds, { padding: 80, maxZoom: 12 })
        } else {
          const [lat, lng] = locations[0].location.coordinates
          map.flyTo({ center: [lng, lat], zoom: 10 })
        }
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
  }, [isVisible, locations])

  if (locations.length === 0) return null

  return (
    <section ref={ref} className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div
        className={`w-full max-w-[900px] h-[500px] rounded-lg overflow-hidden border border-border-subtle transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div ref={mapContainer} className="w-full h-full" />
      </div>
    </section>
  )
}
