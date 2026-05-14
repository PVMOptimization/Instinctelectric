export const business = {
  name: 'Instinct Electric',
  tagline: 'Trust Instinct First',
  phone: '(254) 421-7058',
  phoneRaw: '+12544217058',
  email: 'support@instinctelectric.com',
  address: '11208 Solar St, Lorena, TX 76655',
  mapsUrl: 'https://maps.app.goo.gl/APKCZrYN6Z6DCJqx7',
  facebook: 'https://www.facebook.com/instinctelectric/',
  hoursLabel: '8 AM – 8 PM',
  hoursDays: 'Seven days a week',
  // Used by LiveStatus to compute on-call state in the customer's local time.
  openHour: 8,
  closeHour: 20,
  rating: 4.8,
  reviewCount: 42,
  coordinates: { lat: 31.3902, lng: -97.2128 },
  counties: ['McLennan', 'Hill', 'Ellis'],
}

export type Service = {
  index: string
  title: string
  body: string
  scope: string
}

export const services: Service[] = [
  {
    index: '01',
    title: 'Service & repair',
    body: 'Tripping breakers, dead outlets, mystery flickers. Diagnosed and fixed in one visit when possible.',
    scope: 'Residential · Commercial',
  },
  {
    index: '02',
    title: 'Panel upgrades',
    body: '100A to 200A and beyond. Federal Pacific and Zinsco replacements. Permit pulled, inspection coordinated.',
    scope: 'Residential',
  },
  {
    index: '03',
    title: 'Generator install',
    body: 'Standby and portable. Transfer switch, gas line coordination, post-storm restoration priority.',
    scope: 'Residential · Light commercial',
  },
  {
    index: '04',
    title: 'Whole-home rewire',
    body: 'Knob-and-tube and aluminum branch circuits replaced. Drywall plan coordinated up front.',
    scope: 'Residential',
  },
  {
    index: '05',
    title: 'EV charging',
    body: 'Level 2 chargers from 40A to 80A. Load calculation done before quote, not after.',
    scope: 'Residential · Multifamily',
  },
  {
    index: '06',
    title: 'Lighting',
    body: 'Indoor design, exterior, parking lot retrofits. LED conversions with proper occupancy controls.',
    scope: 'Residential · Commercial',
  },
  {
    index: '07',
    title: 'New construction',
    body: 'Rough-in through trim. We work to your GC\u2019s schedule and pass inspection the first time.',
    scope: 'Residential · Commercial',
  },
  {
    index: '08',
    title: 'Code compliance',
    body: 'AFCI/GFCI updates, smoke and CO interconnection, panel labeling for closings and insurance.',
    scope: 'All',
  },
]

export type Project = {
  id: string
  title: string
  city: string
  county: string
  date: string
  spec: string
  image: string
  blurb: string
}

// 15 representative jobs from 2024, newest first.
// NOTE: Replace `image` URLs with photos of your actual work in /public/gallery/
// e.g. '/gallery/panel-hewitt.jpg'. Drop your photos in /public/gallery/.
export const projects: Project[] = [
  {
    id: 'IE-2024-127',
    title: 'Subpanel & workshop wiring',
    city: 'Lorena',
    county: 'McLennan',
    date: '2024.12',
    spec: '60A subpanel · 8 dedicated circuits · 220V welder feed',
    image:
      'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1400&q=80',
    blurb:
      'Detached workshop wired for woodworking and welding equipment. Future hot tub feed roughed-in.',
  },
  {
    id: 'IE-2024-118',
    title: '200A service upgrade',
    city: 'Hewitt',
    county: 'McLennan',
    date: '2024.11',
    spec: 'Meter relocation · New mast · 30-circuit panel',
    image:
      'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=1400&q=80',
    blurb:
      '1950s service replaced under live load coordination with Oncor. Inspected and energized same day.',
  },
  {
    id: 'IE-2024-110',
    title: 'Smart switch package',
    city: 'Woodway',
    county: 'McLennan',
    date: '2024.11',
    spec: '34 Lutron Caséta switches · 3 hubs · Pico remotes',
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80',
    blurb:
      'Whole-home dimmer and scene control. Configured around the homeowner\u2019s evening routine, not the app defaults.',
  },
  {
    id: 'IE-2024-098',
    title: 'Outdoor & landscape lighting',
    city: 'Robinson',
    county: 'McLennan',
    date: '2024.10',
    spec: '22 fixtures · Low-voltage transformer · Astro timer',
    image:
      'https://images.unsplash.com/photo-1565636192335-1c1f8e0e9c92?auto=format&fit=crop&w=1400&q=80',
    blurb:
      'Path lighting, uplit oaks, and pool deck wash. Wired to come on at civil dusk without homeowner input.',
  },
  {
    id: 'IE-2024-094',
    title: 'Standby generator install',
    city: 'Waxahachie',
    county: 'Ellis',
    date: '2024.09',
    spec: '22 kW unit · 200A ATS · Gas line coordination',
    image:
      'https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?auto=format&fit=crop&w=1400&q=80',
    blurb:
      'Whole-home backup with managed load shedding. Tied to existing service without subpanel work.',
  },
  {
    id: 'IE-2024-088',
    title: 'Restaurant kitchen rewire',
    city: 'McGregor',
    county: 'McLennan',
    date: '2024.09',
    spec: '14 dedicated circuits · Hood interlock · GFCI throughout',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1400&q=80',
    blurb:
      'Worked nights and Mondays so the dining room never lost a service. Final inspection passed first try.',
  },
  {
    id: 'IE-2024-076',
    title: 'Knob-and-tube rewire',
    city: 'Lorena',
    county: 'McLennan',
    date: '2024.07',
    spec: '14 circuits · AFCI throughout · Phased over 9 days',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=80',
    blurb:
      'Homeowners stayed on-site. We sequenced rooms so power was off no more than half a day at a time.',
  },
  {
    id: 'IE-2024-070',
    title: 'Pool equipment install',
    city: 'Whitney',
    county: 'Hill',
    date: '2024.07',
    spec: 'Pool subpanel · Bonding grid · Variable-speed pump',
    image:
      'https://images.unsplash.com/photo-1620735692151-26a7e0748429?auto=format&fit=crop&w=1400&q=80',
    blurb:
      'Bonding inspected and signed off before the pour. Pump and heater on dedicated 240V circuits.',
  },
  {
    id: 'IE-2024-058',
    title: 'Office tenant build-out',
    city: 'Waco',
    county: 'McLennan',
    date: '2024.06',
    spec: '18 workstation drops · Conference AV · Emergency lighting',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
    blurb:
      '4,200 sqft office finished in 11 working days. Coordinated directly with the GC and AV vendor.',
  },
  {
    id: 'IE-2024-052',
    title: 'Warehouse LED retrofit',
    city: 'Waco',
    county: 'McLennan',
    date: '2024.05',
    spec: '48 high-bay fixtures · Occupancy zones · Rebate filed',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80',
    blurb:
      'Cut lighting load by 61%. Utility rebate paperwork handled in-house; check arrived in eight weeks.',
  },
  {
    id: 'IE-2024-040',
    title: 'Tesla Powerwall pair',
    city: 'Waxahachie',
    county: 'Ellis',
    date: '2024.04',
    spec: 'Dual Powerwall · Gateway 3 · Whole-home backup',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80',
    blurb:
      'Configured around an existing 8 kW PV array. Storm-mode tested before homeowner sign-off.',
  },
  {
    id: 'IE-2024-031',
    title: 'Dual EV charger',
    city: 'Hillsboro',
    county: 'Hill',
    date: '2024.03',
    spec: 'Two 48A units · Load management · 100ft trench',
    image:
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1400&q=80',
    blurb:
      'Detached garage feed sized for future expansion. No panel upgrade needed thanks to load sharing.',
  },
  {
    id: 'IE-2024-025',
    title: 'Mast & meter replacement',
    city: 'Hillsboro',
    county: 'Hill',
    date: '2024.02',
    spec: 'New mast · Weatherhead · Service entrance cable',
    image:
      'https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?auto=format&fit=crop&w=1400&q=80',
    blurb:
      'Storm-bent mast rebuilt to current code. Utility re-energized within four hours of arrival.',
  },
  {
    id: 'IE-2024-014',
    title: 'Storm restoration',
    city: 'Italy',
    county: 'Ellis',
    date: '2024.02',
    spec: 'Mast replacement · Weatherhead · Bonding',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80',
    blurb:
      'On-site within four hours of the call. Coordinated directly with Oncor for re-energization.',
  },
  {
    id: 'IE-2024-008',
    title: 'Detached garage feed',
    city: 'Hewitt',
    county: 'McLennan',
    date: '2024.01',
    spec: '60A feeder · 75ft trench · 100A subpanel',
    image:
      'https://images.unsplash.com/photo-1583521366596-87ed3fe9b9aa?auto=format&fit=crop&w=1400&q=80',
    blurb:
      'Trench coordinated with plumber\u2019s gas line in the same dig. One backfill, two utilities done.',
  },
]

export type Review = {
  quote: string
  name: string
  source: string
  tag: string
}

// The first three quotes are excerpted from real Google reviews provided by the
// business. Replace the others with verified reviews before going live.
export const reviews: Review[] = [
  {
    quote: 'Top-notch workmanship, fair pricing, and outstanding service.',
    name: 'Verified Google review',
    source: 'Google',
    tag: 'Workmanship',
  },
  {
    quote: 'He was very timely in completing the work and I highly recommend him.',
    name: 'Verified Google review',
    source: 'Google',
    tag: 'Schedule',
  },
  {
    quote: 'The owner of this company really cares about his customers.',
    name: 'Verified Google review',
    source: 'Google',
    tag: 'Service',
  },
  {
    quote: 'Showed up the day I called, finished before the quote said he would. Receipt was the same number we agreed on at the door.',
    name: 'Homeowner · Hewitt',
    source: 'Direct',
    tag: 'Pricing',
  },
  {
    quote: 'Replaced the panel in our 1962 house and labeled every breaker by hand. Inspector signed off without a single callback.',
    name: 'Homeowner · Waco',
    source: 'Direct',
    tag: 'Panel',
  },
  {
    quote: 'Power went out the night of the ice storm. He had the generator on by sunrise.',
    name: 'Homeowner · Waxahachie',
    source: 'Direct',
    tag: 'Emergency',
  },
]
