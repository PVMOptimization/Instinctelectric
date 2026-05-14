import { business } from '../data'

export default function TopBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink-950/70 border-b border-bone/5">
      <div className="px-5 sm:px-8 md:px-12 h-14 sm:h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center group" aria-label="Instinct Electric — home">
          <img
            src="/instinct-logo.webp"
            alt="Instinct Electric"
            className="h-7 sm:h-9 w-auto select-none transition-opacity group-hover:opacity-90"
            draggable={false}
          />
        </a>

        <nav className="flex items-center gap-6 sm:gap-9 text-xs sm:text-sm">
          <a href="#work" className="hidden sm:inline text-bone/60 hover:text-bone transition-colors">
            Work
          </a>
          <a href="#coverage" className="hidden sm:inline text-bone/60 hover:text-bone transition-colors">
            Coverage
          </a>
          <a href="#services" className="hidden md:inline text-bone/60 hover:text-bone transition-colors">
            Services
          </a>
          <a
            href={`tel:${business.phoneRaw}`}
            className="font-mono text-bone hover:text-live transition-colors tabular-nums"
          >
            {business.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}
