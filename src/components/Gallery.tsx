import { useState } from 'react'
import { projects } from '../data'

export default function Gallery() {
  const [activeId, setActiveId] = useState(projects[0].id)
  const active = projects.find((p) => p.id === activeId) ?? projects[0]

  return (
    <section
      id="work"
      className="relative py-28 sm:py-40 px-5 sm:px-8 md:px-12 bg-ink-900/60 border-y border-bone/10"
    >
      {/* Section header — broken across columns */}
      <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-14 sm:mb-20">
        <div className="col-span-12 lg:col-span-8">
          <div className="font-mono text-[11px] tracking-[0.25em] text-bone/30 mb-6">
            ※ 02 — RECENT FILES
          </div>
          <h2 className="font-display text-bone text-5xl sm:text-7xl lg:text-[6.5rem] tracking-crush leading-[0.92]">
            Recent jobs,
            <br />
            <span className="italic font-normal text-bone/70">on paper.</span>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:pt-4 mt-6 lg:mt-0">
          <p className="text-bone/55 leading-relaxed max-w-sm">
            Each file lists what was on site, what we did, and how long it
            took. Photos are from the job — not stock.
          </p>
          <p className="mt-4 font-mono text-[11px] text-bone/30">
            {projects.length} of {projects.length} shown · 2024 archive
          </p>
        </div>
      </div>

      {/* Main viewer */}
      <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-10">
        {/* Featured */}
        <div className="col-span-12 lg:col-span-8">
          <article
            // Re-mount on change so the css transition replays
            key={active.id}
            className="group"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-ink-800 border border-bone/10">
              <img
                src={active.image}
                alt={`${active.title} in ${active.city}`}
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-700"
                loading="lazy"
              />
              {/* Vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(5,6,8,0.85) 0%, rgba(5,6,8,0) 50%), radial-gradient(120% 80% at 50% 0%, transparent 60%, rgba(5,6,8,0.6) 100%)',
                }}
              />
              {/* Top-left ID badge */}
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] text-bone/80 bg-ink-950/60 backdrop-blur-sm px-2.5 py-1.5 border border-bone/10">
                FILE {active.id}
              </div>
              {/* Bottom overlay */}
              <div className="absolute left-0 right-0 bottom-0 p-5 sm:p-7">
                <div className="font-mono text-[10px] tracking-[0.2em] text-live/90 mb-2">
                  {active.city.toUpperCase()} · {active.county.toUpperCase()} CO.
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-bone tracking-tightest">
                  {active.title}
                </h3>
              </div>
            </div>

            {/* Case data */}
            <dl className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-4 font-mono text-[11px]">
              <div>
                <dt className="text-bone/30 tracking-widest mb-1.5">FILE</dt>
                <dd className="text-bone/90">{active.id}</dd>
              </div>
              <div>
                <dt className="text-bone/30 tracking-widest mb-1.5">DATE</dt>
                <dd className="text-bone/90">{active.date}</dd>
              </div>
              <div>
                <dt className="text-bone/30 tracking-widest mb-1.5">LOCATION</dt>
                <dd className="text-bone/90">
                  {active.city}, TX
                </dd>
              </div>
              <div>
                <dt className="text-bone/30 tracking-widest mb-1.5">COUNTY</dt>
                <dd className="text-bone/90">{active.county}</dd>
              </div>
              <div className="col-span-2 sm:col-span-4 mt-2 pt-4 border-t border-bone/10">
                <dt className="text-bone/30 tracking-widest mb-2">SCOPE</dt>
                <dd className="text-bone/90 leading-relaxed">{active.spec}</dd>
              </div>
              <div className="col-span-2 sm:col-span-4">
                <dt className="text-bone/30 tracking-widest mb-2">NOTES</dt>
                <dd className="text-bone/70 leading-relaxed font-sans text-[14px] max-w-2xl">
                  {active.blurb}
                </dd>
              </div>
            </dl>
          </article>
        </div>

        {/* Index */}
        <aside className="col-span-12 lg:col-span-4">
          <div className="font-mono text-[10px] tracking-[0.25em] text-bone/30 mb-4">
            ARCHIVE INDEX
          </div>
          <ul className="border-t border-bone/10">
            {projects.map((p) => {
              const isActive = p.id === activeId
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(p.id)}
                    onMouseEnter={() => setActiveId(p.id)}
                    className={`w-full text-left grid grid-cols-[auto_1fr_auto] gap-x-4 items-baseline py-4 border-b border-bone/10 transition-colors ${
                      isActive
                        ? 'text-bone'
                        : 'text-bone/55 hover:text-bone/90'
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] tabular-nums ${
                        isActive ? 'text-live' : 'text-bone/30'
                      }`}
                    >
                      {p.id.slice(-3)}
                    </span>
                    <span className="text-[14px] leading-snug">
                      {p.title}
                      <span className="block text-[11px] text-bone/40 mt-0.5">
                        {p.city}, {p.county}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={`font-mono text-xs transition-transform ${
                        isActive ? 'text-live translate-x-1' : 'text-bone/20'
                      }`}
                    >
                      →
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
          <p className="mt-5 text-[11px] text-bone/30 font-mono">
            Click or hover a file to open.
          </p>
        </aside>
      </div>
    </section>
  )
}
