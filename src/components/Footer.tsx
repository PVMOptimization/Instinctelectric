import { business } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-bone/10 px-5 sm:px-8 md:px-12 pt-16 pb-10 overflow-hidden">
      {/* Massive wordmark across the bottom — visible only on larger screens */}
      <div
        className="hidden md:block absolute inset-x-0 bottom-0 pointer-events-none select-none font-display text-bone/[0.04] leading-none tracking-crush"
        style={{ fontSize: 'clamp(8rem, 22vw, 22rem)' }}
        aria-hidden
      >
        instinct
      </div>

      <div className="relative grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 md:col-span-6">
          <img
            src="/instinct-logo.webp"
            alt="Instinct Electric"
            className="h-9 sm:h-10 w-auto"
            draggable={false}
          />
          <p className="mt-5 max-w-sm text-bone/50 text-sm leading-relaxed">
            Licensed electrical contractor based in Lorena, Texas. Serving
            McLennan, Hill, Ellis and surrounding counties since the day we
            got the license.
          </p>
        </div>

        <div className="col-span-6 md:col-span-3 text-sm">
          <div className="font-mono text-[10px] tracking-[0.25em] text-bone/30 mb-3">
            REACH
          </div>
          <ul className="space-y-2 text-bone/70">
            <li>
              <a href={`tel:${business.phoneRaw}`} className="hover:text-live transition-colors">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-live transition-colors break-all">
                {business.email}
              </a>
            </li>
            <li>
              <a
                href={business.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-live transition-colors"
              >
                Facebook ↗
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-3 text-sm">
          <div className="font-mono text-[10px] tracking-[0.25em] text-bone/30 mb-3">
            HOURS
          </div>
          <ul className="space-y-2 text-bone/70">
            <li>Mon – Sun</li>
            <li className="font-mono">8 AM → 8 PM</li>
            <li className="text-bone/40 text-[12px] pt-2">
              Emergency calls answered after hours when possible.
            </li>
          </ul>
        </div>

        <div className="col-span-12 pt-10 border-t border-bone/10 flex flex-wrap items-baseline justify-between gap-y-3 font-mono text-[11px] text-bone/30">
          <span>© {year} Instinct Electric · Lorena, TX</span>
          <span>&ldquo;Trust Instinct First&rdquo;</span>
        </div>
      </div>
    </footer>
  )
}
