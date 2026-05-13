import { reviews, business } from '../data'

// Layout intent: an irregular wall — varied spans so the eye moves diagonally.
// Order intentionally puts the strongest verified quote in the wide top slot.
const layoutClasses = [
  'md:col-span-7 md:row-span-2', // 0 — large
  'md:col-span-5',                // 1
  'md:col-span-5',                // 2
  'md:col-span-4',                // 3
  'md:col-span-4',                // 4
  'md:col-span-4',                // 5
]

export default function Reviews() {
  return (
    <section className="relative py-28 sm:py-40 px-5 sm:px-8 md:px-12 bg-ink-900/60 border-y border-bone/10">
      <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mb-14 sm:mb-20">
        <div className="col-span-12 md:col-span-7">
          <div className="font-mono text-[11px] tracking-[0.25em] text-bone/30 mb-6">
            ※ 04 — IN THEIR WORDS
          </div>
          <h2 className="font-display text-bone text-5xl sm:text-7xl tracking-crush leading-[0.95]">
            What the
            <br />
            <span className="text-bone/40">customers said.</span>
          </h2>
        </div>

        <div className="col-span-12 md:col-span-5 md:text-right md:pt-4">
          <div className="inline-flex items-baseline gap-3">
            <span className="font-display text-7xl text-live tracking-crush leading-none">
              {business.rating}
            </span>
            <span className="font-mono text-bone/40 text-sm">
              / 5
            </span>
          </div>
          <div className="mt-3 font-mono text-[11px] tracking-[0.2em] text-bone/50">
            {business.reviewCount} GOOGLE REVIEWS · 4.7 ON FACEBOOK
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto gap-4 md:gap-5">
        {reviews.map((r, i) => {
          const isLarge = i === 0
          return (
            <article
              key={i}
              className={`group relative border border-bone/10 bg-ink-950/40 p-6 sm:p-7 hover:border-live/40 hover:bg-ink-850 transition-colors duration-300 flex flex-col ${
                layoutClasses[i] ?? 'md:col-span-4'
              }`}
            >
              {/* Tag — top right */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] tracking-[0.2em] text-bone/30 group-hover:text-live transition-colors">
                  {r.tag.toUpperCase()}
                </span>
                <span className="font-mono text-[10px] text-bone/20 tabular-nums">
                  {String(i + 1).padStart(2, '0')} / {reviews.length}
                </span>
              </div>

              {/* Quote */}
              <p
                className={`font-display text-bone tracking-tight leading-[1.15] ${
                  isLarge
                    ? 'text-3xl sm:text-4xl md:text-5xl'
                    : 'text-xl sm:text-2xl'
                }`}
              >
                <span className="text-live/60 mr-1">&ldquo;</span>
                {r.quote}
                <span className="text-live/60 ml-0.5">&rdquo;</span>
              </p>

              {/* Footer attribution */}
              <div className="mt-auto pt-6 flex items-baseline justify-between">
                <span className="text-bone/50 text-[13px]">{r.name}</span>
                <span className="font-mono text-[10px] text-bone/30">
                  via {r.source}
                </span>
              </div>

              {/* Hover edge — single thin line on bottom */}
              <span
                aria-hidden
                className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-live to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </article>
          )
        })}
      </div>

      <div className="mt-12 font-mono text-[11px] text-bone/30 max-w-2xl">
        First three quotes are excerpted directly from public Google reviews.
        Names are withheld out of respect for the reviewers.
      </div>
    </section>
  )
}
