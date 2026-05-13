import { useEffect, useState } from 'react'
import { business } from '../../data'

function formatClock(d: Date) {
  return d.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

function formatDay(d: Date) {
  return d.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()
}

export default function LiveStatus() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(id)
  }, [])

  const hour = now.getHours()
  const onCall = hour >= business.openHour && hour < business.closeHour

  return (
    <div className="glass-hud rounded-sm p-6 sm:p-7 font-mono text-[11px] sm:text-xs text-bone/70">
      <div className="flex items-center gap-3">
        <span
          className={`live-dot inline-block h-2 w-2 rounded-full ${
            onCall ? 'bg-live' : 'bg-bone/30'
          }`}
          style={onCall ? undefined : { animation: 'none' }}
        />
        <span className="tracking-[0.2em] text-bone/90">
          {onCall ? 'ON CALL NOW' : 'CLOSED — BACK AT 8 AM'}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2.5">
        <span className="text-bone/40">DAY</span>
        <span className="text-bone/90">{formatDay(now)}</span>

        <span className="text-bone/40">LOCAL</span>
        <span className="text-bone/90">{formatClock(now)}</span>

        <span className="text-bone/40">HOURS</span>
        <span className="text-bone/90">8 AM → 8 PM · daily</span>

        <span className="text-bone/40">COVERS</span>
        <span className="text-bone/90">McLennan · Hill · Ellis</span>

        <span className="text-bone/40">RATING</span>
        <span className="text-bone/90">
          {business.rating} <span className="text-bone/40">/ 5 · {business.reviewCount} Google reviews</span>
        </span>
      </div>

      <div className="mt-7 pt-5 border-t border-bone/10">
        <div className="text-bone/40 mb-2">DIRECT LINE</div>
        <a
          href={`tel:${business.phoneRaw}`}
          className="block font-display text-2xl sm:text-3xl tracking-tightest text-bone hover:text-live transition-colors"
        >
          {business.phone}
        </a>
      </div>
    </div>
  )
}
