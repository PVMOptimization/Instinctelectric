import { useState, useRef, useEffect } from 'react'
import { projects } from '../data'

export default function Gallery() {
  // Desktop state — which project is featured in the big panel
  const [activeId, setActiveId] = useState(projects[0].id)
  const active = projects.find((p) => p.id === activeId) ?? projects[0]

  // Mobile state — which card is currently snapped into view
  const [mobileIdx, setMobileIdx] = useState(0)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])

  // Track the snapped-in card via IntersectionObserver so dots + counter update
  // as the user swipes — no scroll-position math, no jitter.
  useEffect(() => {
    const root = scrollerRef.current
    if (!root) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most-visible card on every tick
        let best: IntersectionObserverEntry | null = null
        for (const entry of entries) {
          if (entry.isIntersecting && (!best || entry.intersectionRatio > best.intersectionRatio)) {
            best = entry
          }
        }
        if (best) {
          const idx = Number(best.target.getAttribute('data-idx'))
          if (!Number.isNaN(idx)) setMobileIdx(idx)
        }
      },
      {
        root,
        // Slim viewport down so only the most-centered card "wins"
        rootMargin: '0px -20% 0px -20%',
        threshold: [0.4, 0.6, 0.8, 1.0],
      },
    )

    cardRefs.current.forEach((c) => c && observer.observe(c))
    return () => observer.disconnect()
  }, [])

  // Jump to a card by index (tapping the dots)
  const scrollToCard = (i: number) => {
    cardRefs.current[i]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    })
  }

  return (
    <section
      id="work"
      className="relative py-28 sm:py-40 px-5 sm:px-8 md:px-12 bg-ink-900/60 border-y border-bone/10"
    >
      {/* ──────────── Section header ──────────── */}
      <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-12 sm:mb-20">
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

      {/* ════════════════════════════════════════════════ */}
      {/*  MOBILE — horizontal swipe carousel              */}
      {/*  Each card is self-contained: image + metadata. */}
      {/*  Edge-to-edge scroll. Peek of next card visible. */}
      {/* ════════════════════════════════════════════════ */}
      <div className="lg:hidden">
        {/* Counter row */}
        <div className="flex items-baseline justify-between mb-5 font-mono text-[11px]">
          <span>
            <span className="text-live tabular-nums">
              {String(mobileIdx + 1).padStart(2, '0')}
            </span>
            <span className="text-bone/30 tabular-nums"> / {String(projects.length).padStart(2, '0')}</span>
          </span>
          <span className="text-bone/40 flex items-center gap-2">
            swipe
            <span className="text-live animate-pulse">→</span>
          </span>
        </div>

        {/* The scroller bleeds to the edges of the section padding so cards
            align flush with the viewport, then we re-pad with inline padding. */}
        <div
          ref={scrollerRef}
          className="snap-scroller hide-scrollbar -mx-5 sm:-mx-8 flex overflow-x-auto"
          style={{ scrollPaddingLeft: '1.25rem' }}
        >
          {/* Leading spacer keeps the first card aligned with the section's gutter */}
          <div className="shrink-0 w-5 sm:w-8" aria-hidden />

          {projects.map((p, i) => (
            <article
              key={p.id}
              ref={(el) => {
                cardRefs.current[i] = el
              }}
              data-idx={i}
              className="snap-start shrink-0 w-[86%] sm:w-[72%] mr-4 sm:mr-5 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden border border-bone/10 bg-ink-800">
                <img
                  src={p.image}
                  alt={`${p.title} in ${p.city}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={i < 3 ? 'eager' : 'lazy'}
                  draggable={false}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(5,6,8,0.78) 0%, rgba(5,6,8,0) 55%)',
                  }}
                />
                {/* Top-left ID badge */}
                <div className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.2em] text-bone/80 bg-ink-950/60 backdrop-blur-sm px-2 py-1 border border-bone/10">
                  FILE {p.id}
                </div>
                {/* Bottom location overlay */}
                <div className="absolute left-0 right-0 bottom-0 p-4">
                  <div className="font-mono text-[10px] tracking-[0.2em] text-live/90">
                    {p.city.toUpperCase()} · {p.county.toUpperCase()} CO. · {p.date}
                  </div>
                </div>
              </div>

              {/* Card body — all metadata travels with the image */}
              <div className="mt-4">
                <h3 className="font-display text-2xl text-bone tracking-tightest leading-tight">
                  {p.title}
                </h3>

                <div className="mt-3 font-mono text-[11px] text-bone/55 leading-relaxed border-t border-bone/10 pt-3">
                  <span className="text-bone/30">SCOPE — </span>
                  {p.spec}
                </div>

                <p className="mt-3 text-bone/70 text-[14px] leading-relaxed">
                  {p.blurb}
                </p>
              </div>
            </article>
          ))}

          {/* Trailing spacer so last card can snap fully */}
          <div className="shrink-0 w-5 sm:w-8" aria-hidden />
        </div>

        {/* Position indicator dots — tappable for direct nav */}
        <div className="mt-7 flex items-center gap-1.5 justify-center flex-wrap">
          {projects.map((p, i) => {
            const isActive = i === mobileIdx
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => scrollToCard(i)}
                className={`h-[3px] transition-all duration-300 rounded-full ${
                  isActive ? 'w-8 bg-live' : 'w-2 bg-bone/20 hover:bg-bone/40'
                }`}
                aria-label={`Go to project ${i + 1}: ${p.title}`}
              />
            )
          })}
        </div>
      </div>

      {/* ════════════════════════════════════════════════ */}
      {/*  DESKTOP — featured panel + scrollable archive   */}
      {/* ════════════════════════════════════════════════ */}
      <div className="hidden lg:grid grid-cols-12 gap-x-10 gap-y-10">
        {/* Featured */}
        <div className="col-span-12 lg:col-span-8">
          <article key={active.id} className="group">
            <div className="relative aspect-[16/10] overflow-hidden bg-ink-800 border border-bone/10">
              <img
                src={active.image}
                alt={`${active.title} in ${active.city}`}
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-700"
                loading="lazy"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(5,6,8,0.85) 0%, rgba(5,6,8,0) 50%), radial-gradient(120% 80% at 50% 0%, transparent 60%, rgba(5,6,8,0.6) 100%)',
                }}
              />
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] text-bone/80 bg-ink-950/60 backdrop-blur-sm px-2.5 py-1.5 border border-bone/10">
                FILE {active.id}
              </div>
              <div className="absolute left-0 right-0 bottom-0 p-5 sm:p-7">
                <div className="font-mono text-[10px] tracking-[0.2em] text-live/90 mb-2">
                  {active.city.toUpperCase()} · {active.county.toUpperCase()} CO.
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-bone tracking-tightest">
                  {active.title}
                </h3>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-4 gap-x-4 gap-y-4 font-mono text-[11px]">
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
                <dd className="text-bone/90">{active.city}, TX</dd>
              </div>
              <div>
                <dt className="text-bone/30 tracking-widest mb-1.5">COUNTY</dt>
                <dd className="text-bone/90">{active.county}</dd>
              </div>
              <div className="col-span-4 mt-2 pt-4 border-t border-bone/10">
                <dt className="text-bone/30 tracking-widest mb-2">SCOPE</dt>
                <dd className="text-bone/90 leading-relaxed">{active.spec}</dd>
              </div>
              <div className="col-span-4">
                <dt className="text-bone/30 tracking-widest mb-2">NOTES</dt>
                <dd className="text-bone/70 leading-relaxed font-sans text-[14px] max-w-2xl">
                  {active.blurb}
                </dd>
              </div>
            </dl>
          </article>
        </div>

        {/* Archive index — scrollable for 15 entries */}
        <aside className="col-span-12 lg:col-span-4">
          <div className="font-mono text-[10px] tracking-[0.25em] text-bone/30 mb-4 flex justify-between">
            <span>ARCHIVE INDEX</span>
            <span className="text-bone/20">{projects.length} FILES</span>
          </div>
          <ul className="border-t border-bone/10 max-h-[640px] overflow-y-auto pr-2">
            {projects.map((p) => {
              const isActive = p.id === activeId
              return (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(p.id)}
                    onMouseEnter={() => setActiveId(p.id)}
                    className={`w-full text-left grid grid-cols-[auto_1fr_auto] gap-x-4 items-baseline py-4 border-b border-bone/10 transition-colors ${
                      isActive ? 'text-bone' : 'text-bone/55 hover:text-bone/90'
                    }`}
                  >
                    <span className={`font-mono text-[10px] tabular-nums ${isActive ? 'text-live' : 'text-bone/30'}`}>
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
            Hover or click a file to open. Scroll for more.
          </p>
        </aside>
      </div>
    </section>
  )
}
