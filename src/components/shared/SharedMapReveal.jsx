import { useEffect, useRef, useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal.js'

export default function SharedMapReveal({ memories }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 })
  const mapContainer = useRef(null)
  const mapRef = useRef(null)
  const [mapReady, setMapReady] = useState(false)
  const [markersDropped, setMarkersDropped] = useState(false)

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
        pitch: 0,
      })

      map.on('load', () => {
        setMapReady(true)

        if (locations.length === 0) return

        const bounds = new mapboxgl.LngLatBounds()
        const coords = []

        // Drop markers with staggered animation
        locations.forEach((memory, i) => {
          const [lat, lng] = memory.location.coordinates
          const coord = [lng, lat]
          bounds.extend(coord)
          coords.push(coord)

          setTimeout(() => {
            // Outer pulse ring
            const pulseEl = document.createElement('div')
            pulseEl.style.cssText = `
              position: absolute;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              border: 1px solid rgba(212,165,116,0.3);
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              animation: pulse-ring 2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
              animation-delay: ${i * 0.5}s;
            `

            // Main marker
            const markerEl = document.createElement('div')
            markerEl.style.cssText = `
              width: 14px;
              height: 14px;
              background: radial-gradient(circle, #E8C9A0 0%, #D4A574 60%, rgba(212,165,116,0.6) 100%);
              border-radius: 50%;
              box-shadow: 0 0 16px rgba(212,165,116,0.6), 0 0 40px rgba(212,165,116,0.2);
              animation: marker-drop 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
              position: relative;
            `
            markerEl.appendChild(pulseEl)

            // Label beneath marker
            const labelEl = document.createElement('div')
            labelEl.style.cssText = `
              position: absolute;
              top: 22px;
              left: 50%;
              transform: translateX(-50%);
              font-family: Satoshi, sans-serif;
              font-size: 9px;
              letter-spacing: 0.05em;
              text-transform: uppercase;
              color: rgba(232,201,160,0.7);
              white-space: nowrap;
              text-shadow: 0 1px 4px rgba(0,0,0,0.8);
              opacity: 0;
              animation: fade-up 0.5s ease-out forwards;
              animation-delay: 0.3s;
            `
            labelEl.textContent = memory.location.place_name
            markerEl.appendChild(labelEl)

            new mapboxgl.Marker({ element: markerEl, anchor: 'center' })
              .setLngLat(coord)
              .addTo(map)

            // After last marker, draw route line
            if (i === locations.length - 1) {
              setTimeout(() => {
                setMarkersDropped(true)
                if (coords.length >= 2) {
                  drawRouteLine(map, coords)
                }
              }, 400)
            }
          }, i * 400)
        })

        if (locations.length > 1) {
          map.fitBounds(bounds, { padding: 100, maxZoom: 11 })
        } else {
          const [lat, lng] = locations[0].location.coordinates
          map.flyTo({ center: [lng, lat], zoom: 10, duration: 2000 })
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
    <section ref={ref} className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Section header */}
      <div
        className={`text-center mb-10 transition-all duration-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="font-body text-[10px] uppercase tracking-[0.2em] text-text-tertiary/40 mb-3">
          Where your love has been
        </p>
        <div
          className={`w-12 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent mx-auto ${
            isVisible ? 'animate-line-grow' : 'opacity-0'
          }`}
        />
      </div>

      {/* Map container with cinematic edges */}
      <div
        className={`w-full max-w-[950px] map-cinematic transition-all duration-[1500ms] ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.97]'
        }`}
        style={{ transitionDelay: '0.3s' }}
      >
        <div
          className="h-[500px] md:h-[550px]"
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          <div ref={mapContainer} className="w-full h-full" />
        </div>
      </div>

      {/* Journey label */}
      {markersDropped && locations.length >= 2 && (
        <p
          className="mt-6 font-body text-[10px] uppercase tracking-[0.15em] text-text-tertiary/30 animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {locations.length} places that hold your story
        </p>
      )}
    </section>
  )
}

/**
 * Draw an animated dashed route line connecting all memory locations
 */
function drawRouteLine(map, coordinates) {
  const sourceId = 'memory-route'
  const layerId = 'memory-route-line'
  const glowLayerId = 'memory-route-glow'

  if (map.getSource(sourceId)) return

  map.addSource(sourceId, {
    type: 'geojson',
    data: {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates,
      },
    },
  })

  // Glow layer (wider, semi-transparent)
  map.addLayer({
    id: glowLayerId,
    type: 'line',
    source: sourceId,
    layout: {
      'line-join': 'round',
      'line-cap': 'round',
    },
    paint: {
      'line-color': 'rgba(212, 165, 116, 0.12)',
      'line-width': 6,
      'line-blur': 4,
    },
  })

  // Main dashed line
  map.addLayer({
    id: layerId,
    type: 'line',
    source: sourceId,
    layout: {
      'line-join': 'round',
      'line-cap': 'round',
    },
    paint: {
      'line-color': 'rgba(212, 165, 116, 0.35)',
      'line-width': 1.5,
      'line-dasharray': [3, 4],
    },
  })
}
