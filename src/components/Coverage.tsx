import { business } from '../data'

type Marker = {
  id: string
  name: string
  county: string
  // Position in the SVG viewBox (1000x720)
  x: number
  y: number
  base?: boolean
}

const markers: Marker[] = [
  { id: 'waco', name: 'Waco', county: 'McLennan', x: 320, y: 580 },
  { id: 'hewitt', name: 'Hewitt', county: 'McLennan', x: 380, y: 615 },
  { id: 'lorena', name: 'Lorena · HQ', county: 'McLennan', x: 420, y: 660, base: true },
  { id: 'mcgregor', name: 'McGregor', county: 'McLennan', x: 230, y: 605 },
  { id: 'hillsboro', name: 'Hillsboro', county: 'Hill', x: 530, y: 420 },
  { id: 'whitney', name: 'Whitney', county: 'Hill', x: 410, y: 380 },
  { id: 'italy', name: 'Italy', county: 'Ellis', x: 650, y: 250 },
  { id: 'waxahachie', name: 'Waxahachie', county: 'Ellis', x: 760, y: 170 },
  { id: 'midlothian', name: 'Midlothian', county: 'Ellis', x: 700, y: 130 },
]

export default function Coverage() {
  const hq = markers.find((m) => m.base)!

  return (
    <section id="coverage" className="relative py-28 sm:py-40 px-5 sm:px-8 md:px-12">
      <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-12">
        {/* Left copy */}
        <div className="col-span-12 lg:col-span-5">
          <div className="font-mono text-[11px] tracking-[0.25em] text-bone/30 mb-6">
            ※ 03 — COVERAGE
          </div>
          <h2 className="font-display text-bone text-5xl sm:text-6xl tracking-crush leading-[0.95]">
            From Hewitt
            <br />
            to Waxahachie.
          </h2>
          <p className="mt-8 max-w-md text-bone/65 leading-relaxed">
            Three counties, six interstate exits, one truck. If you&rsquo;re
            inside the corridor we&rsquo;ll quote it the same day.
          </p>

          <ul className="mt-10 space-y-4">
            {business.counties.map((c, i) => (
              <li
                key={c}
                className="flex items-baseline gap-4 font-mono text-sm border-b border-bone/10 pb-3"
              >
                <span className="text-bone/30 tabular-nums">
                  0{i + 1}
                </span>
                <span className="text-bone tracking-wide">{c} County</span>
                <span className="ml-auto text-bone/40 text-[11px]">
                  TX-{['09', '11', '13'][i]}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 text-sm text-bone/70 hover:text-live transition-colors border-b border-bone/20 hover:border-live pb-1"
          >
            Open shop location in Google Maps
            <span aria-hidden>↗</span>
          </a>
        </div>

        {/* Right map */}
        <div className="col-span-12 lg:col-span-7">
          <div className="relative aspect-[1000/720] w-full">
            <svg
              viewBox="0 0 1000 720"
              className="absolute inset-0 w-full h-full"
              aria-label="Service area map of Central Texas"
            >
              {/* Subtle grid background */}
              <defs>
                <pattern
                  id="grid"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke="#1a1f28"
                    strokeWidth="0.5"
                  />
                </pattern>
                <radialGradient id="halo" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0044ff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#0044ff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="1000" height="720" fill="url(#grid)" />

              {/* County boundary suggestion — abstract polygons */}
              <path
                d="M120 720 L120 480 L320 360 L470 320 L470 510 L380 720 Z"
                fill="#0a0d12"
                stroke="#262d3a"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
              <path
                d="M380 510 L380 360 L580 290 L640 380 L580 510 Z"
                fill="#0a0d12"
                stroke="#262d3a"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
              <path
                d="M580 290 L580 80 L840 60 L880 240 L760 320 Z"
                fill="#0a0d12"
                stroke="#262d3a"
                strokeWidth="1"
                strokeDasharray="3 4"
              />

              {/* County labels */}
              <text x="250" y="500" fill="#3a4250" fontSize="12" fontFamily="JetBrains Mono">
                MCLENNAN
              </text>
              <text x="470" y="420" fill="#3a4250" fontSize="12" fontFamily="JetBrains Mono">
                HILL
              </text>
              <text x="710" y="120" fill="#3a4250" fontSize="12" fontFamily="JetBrains Mono">
                ELLIS
              </text>

              {/* Service routes — from HQ to each marker */}
              {markers
                .filter((m) => !m.base)
                .map((m) => (
                  <line
                    key={m.id}
                    x1={hq.x}
                    y1={hq.y}
                    x2={m.x}
                    y2={m.y}
                    stroke="#0044ff"
                    strokeOpacity="0.18"
                    strokeWidth="0.8"
                    strokeDasharray="2 3"
                  />
                ))}

              {/* HQ halo */}
              <circle cx={hq.x} cy={hq.y} r="60" fill="url(#halo)" />

              {/* Markers */}
              {markers.map((m) => (
                <g key={m.id}>
                  {m.base ? (
                    <>
                      <circle
                        cx={m.x}
                        cy={m.y}
                        r="9"
                        fill="#19fa05"
                        opacity="0.25"
                      >
                        <animate
                          attributeName="r"
                          values="9;16;9"
                          dur="2.4s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.4;0;0.4"
                          dur="2.4s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={m.x} cy={m.y} r="5" fill="#19fa05" />
                    </>
                  ) : (
                    <circle
                      cx={m.x}
                      cy={m.y}
                      r="3"
                      fill="#e8e6df"
                      opacity="0.9"
                    />
                  )}
                  <text
                    x={m.x + 12}
                    y={m.y + 4}
                    fill={m.base ? '#19fa05' : '#e8e6df'}
                    fontSize="11"
                    fontFamily="IBM Plex Sans"
                    fontWeight={m.base ? 600 : 400}
                  >
                    {m.name}
                  </text>
                </g>
              ))}

              {/* Compass / scale */}
              <g
                transform="translate(40, 40)"
                fill="#3a4250"
                fontSize="10"
                fontFamily="JetBrains Mono"
              >
                <line x1="0" y1="0" x2="0" y2="20" stroke="#3a4250" />
                <text x="4" y="15">N</text>
              </g>
              <g
                transform="translate(40, 680)"
                fill="#3a4250"
                fontSize="10"
                fontFamily="JetBrains Mono"
              >
                <line x1="0" y1="0" x2="40" y2="0" stroke="#3a4250" />
                <text x="0" y="-4">~30 MI</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
