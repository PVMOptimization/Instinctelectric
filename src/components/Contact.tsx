import { business } from '../data'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 sm:py-40 px-5 sm:px-8 md:px-12"
    >
      <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-12">
        {/* Left — final word */}
        <div className="col-span-12 lg:col-span-7">
          <div className="font-mono text-[11px] tracking-[0.25em] text-bone/30 mb-6">
            ※ 05 — REACH US
          </div>
          <h2 className="font-display text-bone text-5xl sm:text-7xl lg:text-[6rem] tracking-crush leading-[0.92]">
            Phone first.
            <br />
            <span className="text-bone/40 italic font-normal">Text works too.</span>
          </h2>
          <p className="mt-10 max-w-md text-bone/65 leading-relaxed">
            Email gets read in the evening. Texts and calls go straight to the
            owner during work hours. If it&rsquo;s urgent — outage, sparks,
            burning smell — call, don&rsquo;t email.
          </p>
        </div>

        {/* Right — contact card */}
        <div className="col-span-12 lg:col-span-5">
          <div className="border border-bone/15 bg-ink-900/40 divide-y divide-bone/10">
            {/* Phone */}
            <a
              href={`tel:${business.phoneRaw}`}
              className="block p-6 sm:p-8 group hover:bg-ink-850 transition-colors"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] text-bone/30 mb-3 flex justify-between items-baseline">
                <span>CALL / TEXT</span>
                <span className="text-live/0 group-hover:text-live transition-colors">↗</span>
              </div>
              <div className="font-display text-3xl sm:text-4xl text-bone tracking-tightest tabular-nums group-hover:text-live transition-colors">
                {business.phone}
              </div>
              <div className="mt-2 text-bone/40 text-[13px]">
                {business.hoursLabel} · {business.hoursDays}
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${business.email}`}
              className="block p-6 sm:p-8 group hover:bg-ink-850 transition-colors"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] text-bone/30 mb-3 flex justify-between items-baseline">
                <span>EMAIL</span>
                <span className="text-live/0 group-hover:text-live transition-colors">↗</span>
              </div>
              <div className="font-display text-xl sm:text-2xl text-bone tracking-tightest break-all group-hover:text-live transition-colors">
                {business.email}
              </div>
              <div className="mt-2 text-bone/40 text-[13px]">
                Best for non-urgent quotes and follow-ups
              </div>
            </a>

            {/* Address */}
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="block p-6 sm:p-8 group hover:bg-ink-850 transition-colors"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] text-bone/30 mb-3 flex justify-between items-baseline">
                <span>SHOP</span>
                <span className="text-live/0 group-hover:text-live transition-colors">↗</span>
              </div>
              <div className="font-display text-xl sm:text-2xl text-bone tracking-tightest leading-tight group-hover:text-live transition-colors">
                {business.address}
              </div>
              <div className="mt-2 text-bone/40 text-[13px]">
                Open in Google Maps
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
