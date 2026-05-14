import LiveStatus from './ui/LiveStatus'
import MagneticButton from './ui/MagneticButton'
import { business } from '../data'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Background atmosphere — radial wash + animated wire traces (subtle) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 70% at 12% 30%, #0044ff14, transparent 70%), radial-gradient(50% 60% at 90% 80%, #19fa050a, transparent 70%)',
          }}
        />
        <svg
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full opacity-70"
        >
          <defs>
            <linearGradient id="trace-a" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#0044ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#0044ff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0044ff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="trace-b" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#19fa05" stopOpacity="0" />
              <stop offset="50%" stopColor="#19fa05" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#19fa05" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="wire-trace"
            d="M0 220 H520 L560 260 H1100 L1140 220 H1600"
            stroke="url(#trace-a)"
            strokeWidth="1"
            fill="none"
            style={{ animationDelay: '0.4s' }}
          />
          <path
            className="wire-trace"
            d="M0 720 H320 L360 680 H960 L1000 720 H1600"
            stroke="url(#trace-b)"
            strokeWidth="1"
            fill="none"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      <div className="relative px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-x-10">
          {/* ───────── LEFT COLUMN ───────── */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7 flex flex-col">
            {/* Sidewriting label, only on large screens */}
            <div className="hidden lg:block absolute left-3 top-32 sidewrite font-mono text-[10px] tracking-[0.3em] text-bone/30">
              EST. CENTRAL TEXAS · LIC. ELECTRICAL CONTRACTOR
            </div>

            <p
              className="rise font-mono text-[11px] sm:text-xs text-bone/50 mb-7 sm:mb-10"
              style={{ animationDelay: '0.1s' }}
            >
              Licensed electrical contractor &nbsp;·&nbsp; Lorena, TX
            </p>

            <h1 className="font-display font-medium text-bone leading-[0.92] tracking-crush text-[15vw] sm:text-[12vw] lg:text-[8.5vw] xl:text-[7.6vw] crush-mobile">
              <span className="rise block" style={{ animationDelay: '0.15s' }}>
                Power doesn&rsquo;t
              </span>
              <span
                className="rise block italic font-normal text-bone/85"
                style={{
                  animationDelay: '0.35s',
                  fontFamily: '"Bricolage Grotesque", serif',
                }}
              >
                wait.
              </span>
              <span
                className="rise block text-bone/40"
                style={{ animationDelay: '0.55s' }}
              >
                Neither do we.
              </span>
            </h1>

            <div
              className="rise mt-10 sm:mt-14 max-w-xl text-base sm:text-lg text-bone/70 leading-relaxed"
              style={{ animationDelay: '0.85s' }}
            >
              Wiring, panels, generators, lighting. Done by a small, licensed
              crew that picks up the phone — twelve hours a day, every day of
              the week.
            </div>

            <div
              className="rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: '1s' }}
            >
              <MagneticButton
                href={`tel:${business.phoneRaw}`}
                strength={10}
                className="trace-edge rounded-sm bg-live text-ink-950 font-medium px-7 py-4 text-sm tracking-wide hover:bg-live"
              >
                <span className="font-mono tabular-nums">{business.phone}</span>
                <span aria-hidden className="ml-3">→</span>
              </MagneticButton>

              <MagneticButton
                href="#work"
                strength={6}
                className="rounded-sm border border-bone/20 text-bone px-6 py-4 text-sm hover:border-bone/60 transition-colors"
              >
                See recent work
              </MagneticButton>
            </div>
          </div>

          {/* ───────── RIGHT COLUMN ───────── */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 lg:pl-4 flex flex-col gap-6 sm:gap-8">
            {/* Brand mark / backdrop artwork — framed */}
            <figure
              className="rise relative overflow-hidden border border-bone/10 bg-ink-950"
              style={{ animationDelay: '0.5s' }}
            >
              <img
                src="/instinct-backdrop.jpg"
                alt="Instinct Electric brand mark"
                className="block w-full h-auto select-none"
                draggable={false}
                loading="eager"
              />
              {/* Inner glow on hover via parent group */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow:
                    'inset 0 0 80px rgba(25,250,5,0.06), inset 0 0 1px rgba(25,250,5,0.15)',
                }}
                aria-hidden
              />
              {/* Small corner caption */}
              <figcaption className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.2em] text-bone/60 bg-ink-950/60 backdrop-blur-sm px-2 py-1 border border-bone/10">
                MARK · INSTINCT
              </figcaption>
            </figure>

            {/* HUD — sits below the brand mark */}
            <div className="rise" style={{ animationDelay: '0.7s' }}>
              <LiveStatus />
            </div>
          </div>
        </div>

        {/* Bottom rail — geo strip */}
        <div
          className="rise mt-16 sm:mt-24 lg:mt-28 flex flex-wrap items-baseline gap-x-10 gap-y-3 font-mono text-[10px] sm:text-xs text-bone/40"
          style={{ animationDelay: '1.2s' }}
        >
          <span>31.39°N · 97.21°W</span>
          <span className="hidden sm:inline">Hewitt → Waxahachie</span>
          <span>{business.address}</span>
          <span className="hidden lg:inline ml-auto">↓ scroll</span>
        </div>
      </div>
    </section>
  )
}
