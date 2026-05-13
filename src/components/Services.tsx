import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-40 px-5 sm:px-8 md:px-12">
      <div className="grid grid-cols-12 gap-x-6 md:gap-x-10">
        {/* Heading column */}
        <div className="col-span-12 md:col-span-4 md:sticky md:top-28 md:self-start mb-12 md:mb-0">
          <div className="font-mono text-[11px] tracking-[0.25em] text-bone/30 mb-6">
            ※ 01 — SERVICES
          </div>
          <h2 className="font-display text-bone text-5xl sm:text-6xl tracking-tightest leading-[0.95]">
            What we do,
            <br />
            <span className="text-bone/40">in eight lines.</span>
          </h2>
          <p className="mt-8 max-w-xs text-bone/60 leading-relaxed text-[15px]">
            No flat-rate &ldquo;packages.&rdquo; Every job is quoted from the
            actual scope, with the licensed electrician on site.
          </p>
        </div>

        {/* Services list */}
        <ol className="col-span-12 md:col-span-8 border-t border-bone/10">
          {services.map((s, i) => (
            <li
              key={s.index}
              className="group relative grid grid-cols-12 gap-x-4 sm:gap-x-6 items-baseline py-7 sm:py-9 border-b border-bone/10 hover:border-bone/30 transition-colors"
              style={{
                // Subtle staggered reveal — each row inherits a tiny different feel
                transitionDelay: `${i * 20}ms`,
              }}
            >
              {/* Index */}
              <div className="col-span-2 sm:col-span-1 font-mono text-xs text-bone/30 group-hover:text-live transition-colors">
                {s.index}
              </div>

              {/* Title + body */}
              <div className="col-span-10 sm:col-span-8">
                <h3 className="font-display text-2xl sm:text-3xl text-bone tracking-tightest leading-tight transition-transform duration-500 group-hover:translate-x-2">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-prose text-bone/55 text-[15px] leading-relaxed">
                  {s.body}
                </p>
              </div>

              {/* Scope tag */}
              <div className="hidden sm:flex col-span-3 justify-end items-baseline">
                <span className="font-mono text-[10px] tracking-[0.2em] text-bone/30 group-hover:text-bone/70 transition-colors text-right">
                  {s.scope.toUpperCase()}
                </span>
              </div>

              {/* Hover indicator — a thin volt-blue line that draws in from the left */}
              <span
                aria-hidden
                className="absolute left-0 bottom-0 h-px bg-volt origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out w-full"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
