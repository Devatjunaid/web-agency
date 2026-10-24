// SEO landing pages: city pages + specialist service pages.
// Each page has unique copy built around its own keyword cluster.
import { PORTFOLIO } from './portfolio.mjs';
import { workCard } from './case-study.mjs';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const strip = (s) => String(s).replace(/<[^>]+>/g, '');

const ICON = {
  design: '<rect x="6" y="10" width="52" height="40" rx="6"/><line x1="6" y1="20" x2="58" y2="20"/><rect x="13" y="27" width="18" height="16" rx="3"/><line x1="37" y1="29" x2="51" y2="29"/><line x1="37" y1="35" x2="47" y2="35"/><line x1="37" y1="41" x2="50" y2="41"/>',
  code: '<polyline points="22 18 8 32 22 46"/><polyline points="42 18 56 32 42 46"/><line x1="36" y1="12" x2="28" y2="52"/>',
  shop: '<path d="M12 22h40l-4 32H16z"/><path d="M23 22v-4a9 9 0 0 1 18 0v4"/><circle cx="25" cy="32" r="2"/><circle cx="39" cy="32" r="2"/>',
  ux: '<circle cx="32" cy="32" r="24"/><path d="M26 22l18 9-8 3-3 8z"/>',
  seo: '<circle cx="28" cy="28" r="18"/><line x1="41" y1="41" x2="56" y2="56"/><polyline points="18 34 24 27 29 31 37 21"/>',
  care: '<path d="M32 6l22 8v16c0 14-10 24-22 28C20 54 10 44 10 30V14z"/><polyline points="20 32 27 32 30 25 35 39 38 32 44 32"/>',
  bolt: '<path d="M36 6 14 36h16l-4 22 24-32H34z"/>',
  pin: '<path d="M32 58S12 38 12 24a20 20 0 0 1 40 0c0 14-20 34-20 34z"/><circle cx="32" cy="24" r="7"/>',
  refresh: '<path d="M52 20A22 22 0 0 0 12 26"/><polyline points="52 8 52 20 40 20"/><path d="M12 44a22 22 0 0 0 40-6"/><polyline points="12 56 12 44 24 44"/>',
  chart: '<line x1="10" y1="54" x2="54" y2="54"/><rect x="14" y="34" width="8" height="20"/><rect x="28" y="22" width="8" height="32"/><rect x="42" y="12" width="8" height="42"/>',
  pound: '<path d="M40 14a10 10 0 0 0-18 6v30M16 34h20M14 50h34"/>',
  plug: '<path d="M24 8v12M40 8v12M16 20h32v10a16 16 0 0 1-32 0zM32 46v12"/>',
};
const icon = (k) => `<svg class="svc__icon icon-draw" viewBox="0 0 64 64" fill="none" stroke="url(#ig)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k] || ICON.design}</svg>`;

const PROCESS = [
  ['Discover', 'Week 1', 'A strategy workshop, competitor review and keyword research so the new site is built around how your customers actually search.'],
  ['Design', 'Weeks 2–3', 'Wireframes and high-fidelity designs with real copy. You review a clickable prototype before development starts.'],
  ['Build', 'Weeks 3–6', 'Hand-coded, mobile-first development with on-page SEO, schema markup and a CMS your team can edit.'],
  ['Launch & grow', 'Week 6+', 'Speed testing, redirects, analytics and Search Console set-up — then ongoing support to keep you climbing.'],
];

export const LANDING = [
  /* =========================== LOCATIONS =========================== */
  {
    route: '/web-design-london', slug: 'london', kind: 'city', city: 'London', crumb: 'Web Design London', parent: ['Locations', '/locations'],
    title: 'Web Design London | London Web Design Agency | The Fast Designs',
    description: 'Web design London businesses rely on. The Fast Designs is a London web design agency creating fast, SEO-ready websites, Shopify stores and custom web development.',
    eyebrow: 'Web design agency London',
    h1: 'Web design London <em>businesses grow with.</em>',
    lead: 'The Fast Designs is a London web design agency for companies that want more than a pretty homepage. We design, build and optimise fast, search-friendly websites that win enquiries in one of the most competitive markets in the world.',
    stats: [['<1s', 'average load time'], ['95+', 'Lighthouse scores at launch'], ['4–8 wks', 'typical project timeline']],
    introTitle: 'A London web design agency without the London overheads',
    intro: [
      'London buyers compare you with a dozen competitors before they ever pick up the phone. Your website has seconds to prove you are the safer, smarter choice — and it has to do that on a phone, on the Tube, on a patchy 4G connection. That is exactly the problem our web design London team solves.',
      'We work with startups in Shoreditch, professional services firms in the City, hospitality brands in Soho and growing retailers across Greater London. Because we run lean, remote-first sprints, you get the craft of a top London web design agency with fixed prices and a senior team that answers within a day.',
    ],
    servicesTitle: 'Web design and web development for London companies',
    services: [
      ['design', 'Bespoke website design', 'Custom layouts and brand-led art direction designed around one goal: turning London visitors into enquiries and sales.'],
      ['code', 'Web development agency London teams trust', 'Fast, secure builds in Next.js, WordPress, Webflow or Shopify, written by senior developers and fully documented.'],
      ['shop', 'E-commerce for London retailers', 'Shopify and WooCommerce stores with click-and-collect, local delivery zones and one-tap checkout.'],
      ['seo', 'Local SEO for London searches', 'Location pages, Google Business Profile optimisation and schema markup so you show up for searches near your customers.'],
      ['refresh', 'Website redesigns', 'Modernise an outdated site without losing the rankings you have already earned — every URL is mapped and redirected.'],
      ['care', 'Care plans & growth sprints', 'Hosting, updates, monitoring and a monthly allowance of design and development time to keep improving.'],
    ],
    workTitle: 'Recent web design and development projects',
    workText: 'A selection of websites, e-commerce stores and platforms our team has designed and built.',
    work: ['nimbus-pay', 'maison-lune', 'harbor-vale', 'vantage-capital'],
    areas: { title: 'Web design near you, anywhere in London', text: 'From the City to the suburbs, we work with businesses across all 32 boroughs. Whether you are in Zone 1 or the outskirts, you get the same senior team, the same fixed price and the same fast turnaround.', list: ['Shoreditch', 'Canary Wharf', 'The City', 'Soho', 'Camden', 'Islington', 'Hackney', 'Kensington', 'Clapham', 'Richmond', 'Croydon', 'Stratford', 'Wimbledon', 'King’s Cross'] },
    whyTitle: 'Why London businesses choose The Fast Designs',
    why: [
      ['Built for a competitive market', 'We research your London competitors and design a site that clearly out-positions them on clarity, trust and speed.'],
      ['Senior people only', 'The designers and developers on your first call are the ones who build your website — no hand-offs to juniors.'],
      ['Fixed, transparent pricing', 'Itemised proposals in pounds sterling. No day rates that spiral, no surprise invoices.'],
      ['Measured by results', 'Analytics, conversion tracking and Search Console are set up before launch so you can see the return.'],
    ],
    faqs: [
      ['How much does web design cost in London?', 'Most small business websites with us start from £1,495, growth websites from £3,995 and e-commerce or custom builds from £5,995. Every project gets a fixed, itemised quote before work starts.'],
      ['Are you a London-based web design agency?', 'We are a UK web design agency that works with London businesses every week. Projects run over video calls, shared design files and live preview links, which keeps our pricing well below typical central-London agency rates.'],
      ['Do you also offer web development in London?', 'Yes. As a full-service web development agency, London clients come to us for custom web applications, integrations, Shopify development and WordPress builds, not just design.'],
      ['How long does a website take?', 'Most marketing websites launch in four to eight weeks. E-commerce stores and custom platforms typically take eight to fourteen weeks.'],
    ],
    ctaTitle: 'Looking for web design in London?', ctaText: 'Tell us about your business and get a fixed-price proposal within 48 hours.',
  },
  {
    route: '/web-design-manchester', slug: 'manchester', kind: 'city', city: 'Manchester', crumb: 'Web Design Manchester', parent: ['Locations', '/locations'],
    title: 'Web Design Manchester | Web Design Company | The Fast Designs',
    description: 'Web design Manchester firms can count on. A web design company Manchester businesses use for fast, SEO-friendly websites, e-commerce and redesigns. Free quote.',
    eyebrow: 'Web design company Manchester',
    h1: 'Web design Manchester, <em>built to perform.</em>',
    lead: 'The Fast Designs is the web design company Manchester businesses hire when they want a website that pulls its weight — quick to load, easy to find on Google and designed to turn visitors into customers.',
    stats: [['2.4×', 'average conversion lift'], ['98', 'average speed score'], ['48h', 'proposal turnaround']],
    introTitle: 'A web design company Manchester can rely on',
    intro: [
      'Manchester moves quickly. From the tech scale-ups of the Northern Quarter to the creative studios at MediaCityUK and the professional firms in Spinningfields, the city rewards businesses that look sharp and act fast online. Our web design Manchester service is built for exactly that pace.',
      'We start with your customers, your competitors and the searches that matter, then design and develop a site that loads in under a second and makes it effortless to get in touch, book or buy. One senior team, one fixed price, no hand-offs.',
    ],
    servicesTitle: 'What our Manchester web design service includes',
    services: [
      ['design', 'Conversion-focused web design', 'Clear messaging, strong calls to action and layouts tested on real devices before launch.'],
      ['code', 'Web development', 'WordPress, Webflow, Shopify or custom code — whichever gives your team the most control at the lowest running cost.'],
      ['seo', 'Local SEO for Greater Manchester', 'Service and location pages, schema markup and Google Business Profile tuning to win local searches.'],
      ['shop', 'E-commerce websites', 'Online stores for Manchester brands with fast checkout, subscriptions and stock syncing.'],
      ['refresh', 'Website redesign service', 'Replace a slow, dated website with a modern one while protecting your existing rankings.'],
      ['chart', 'Analytics & CRO', 'GA4, heatmaps and A/B tests that show what is working and what to improve next.'],
    ],
    workTitle: 'Websites our team has designed and built',
    workText: 'Projects across hospitality, healthcare, construction and retail.',
    work: ['ember-oak', 'peak-physio', 'forge-construction', 'brewline'],
    areas: { title: 'Web design near you across Greater Manchester', text: 'We work with businesses right across the city region — from the city centre to the surrounding towns.', list: ['Northern Quarter', 'Spinningfields', 'Ancoats', 'MediaCityUK', 'Salford', 'Didsbury', 'Chorlton', 'Altrincham', 'Stockport', 'Trafford', 'Bolton', 'Oldham'] },
    whyTitle: 'Why Manchester businesses work with us',
    why: [
      ['Straight-talking advice', 'Honest recommendations on platforms and budgets — we will tell you if you need less than you think.'],
      ['Speed as standard', 'Every site we launch targets green Core Web Vitals, which helps both rankings and conversions.'],
      ['Easy to manage', 'You get a simple CMS and a recorded walkthrough so your team can update pages without us.'],
      ['Support after launch', 'Optional care plans cover hosting, updates and monthly improvements.'],
    ],
    faqs: [
      ['How much does a website cost in Manchester?', 'Small business websites start from £1,495, larger marketing sites from £3,995 and online stores from £5,995. You receive a fixed price before any work begins.'],
      ['Do you meet Manchester clients in person?', 'Our projects run remotely over video calls, shared design files and live preview links. It keeps the process fast and the price lower, and our Manchester clients get the same senior attention as any local studio.'],
      ['Can you redesign my existing website?', 'Yes. We audit your current site, keep what works, map every URL and set up redirects so you keep your Google rankings.'],
      ['Do you write the website content?', 'We can. Our SEO copywriting is written around the searches your Manchester customers actually use.'],
    ],
    ctaTitle: 'Need a web design company in Manchester?', ctaText: 'Get a free, no-obligation proposal for your new website within 48 hours.',
  },
  {
    route: '/web-design-birmingham', slug: 'birmingham', kind: 'city', city: 'Birmingham', crumb: 'Web Design Birmingham', parent: ['Locations', '/locations'],
    title: 'Web Design Birmingham | Websites That Rank | The Fast Designs',
    description: 'Web design Birmingham businesses choose for fast, mobile-first websites that rank on Google and convert. Custom design, e-commerce and redesigns at fixed prices.',
    eyebrow: 'Web design Birmingham',
    h1: 'Web design Birmingham <em>businesses are proud of.</em>',
    lead: 'From the Jewellery Quarter to Solihull, The Fast Designs helps Birmingham businesses replace tired websites with fast, modern ones that rank higher and bring in better enquiries.',
    stats: [['+212%', 'online bookings (Ember & Oak)'], ['<1s', 'typical load time'], ['100%', 'rankings kept on redesigns']],
    introTitle: 'Websites designed for the way Birmingham buys',
    intro: [
      'Birmingham is home to thousands of ambitious independent businesses — manufacturers, trades, clinics, restaurants and professional services firms competing for the same local searches. Our web design Birmingham service gives you a website that makes the decision easy: clear services, real proof and a simple way to get in touch.',
      'We design every page mobile-first, write copy around the terms your customers search for, and build on platforms you can update yourself. The result is a website that keeps working for you long after launch day.',
    ],
    servicesTitle: 'Web design services for Birmingham and the West Midlands',
    services: [
      ['design', 'Custom website design', 'No templates — a design built around your brand, your services and your customers.'],
      ['pin', 'Local search visibility', 'Location pages, reviews integration and Google Business Profile optimisation for “near me” searches.'],
      ['shop', 'Online shops', 'E-commerce for West Midlands retailers and makers, with secure payments and easy product management.'],
      ['code', 'Bookings & integrations', 'Online booking, quote calculators, CRM and email marketing connected to your website.'],
      ['refresh', 'Redesigns', 'Bring an outdated site up to modern standards without losing traffic.'],
      ['care', 'Hosting & maintenance', 'Fast, secure hosting with backups, updates and monitoring handled for you.'],
    ],
    workTitle: 'Recent projects from our web design team',
    workText: 'Websites for trades, clinics, hospitality and retail.',
    work: ['forge-construction', 'lumen-dental', 'ember-oak', 'greenroot'],
    areas: { title: 'Web design near you in the West Midlands', text: 'We work with businesses throughout Birmingham and the surrounding towns.', list: ['City Centre', 'Jewellery Quarter', 'Digbeth', 'Brindleyplace', 'Colmore Business District', 'Edgbaston', 'Harborne', 'Moseley', 'Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Coventry'] },
    whyTitle: 'Why Birmingham businesses choose our team',
    why: [
      ['Fixed prices in pounds', 'A clear, itemised quote before we start — no hourly billing.'],
      ['Fast turnaround', 'Most websites go live within four to eight weeks.'],
      ['Built to rank', 'Technical SEO, schema and speed optimisation are included as standard.'],
      ['Real support', 'You can always reach the people who built your website.'],
    ],
    faqs: [
      ['How much is a new website in Birmingham?', 'Websites for small businesses start from £1,495. Larger sites with more pages and integrations start from £3,995, and online shops from £5,995.'],
      ['Will my new website work well on mobile?', 'Yes. Every site is designed mobile-first and tested on real phones and tablets before launch.'],
      ['Can you help with Google rankings?', 'SEO foundations are built into every project, and we offer ongoing local SEO for businesses that want to grow further.'],
      ['Do you work with businesses outside Birmingham?', 'Yes — we work with companies right across the West Midlands and the whole of the UK.'],
    ],
    ctaTitle: 'Ready for a better website in Birmingham?', ctaText: 'Share a few details and we will send a fixed-price proposal within 48 hours.',
  },
  {
    route: '/web-design-suffolk', slug: 'suffolk', kind: 'city', city: 'Suffolk', crumb: 'Web Design Suffolk', parent: ['Locations', '/locations'],
    title: 'Web Design Suffolk | Affordable Websites | The Fast Designs',
    description: 'Web design Suffolk businesses trust in Ipswich, Bury St Edmunds, Felixstowe and beyond. Fast, affordable, SEO-ready websites and online shops with fixed prices.',
    eyebrow: 'Web design Suffolk',
    h1: 'Web design Suffolk <em>businesses can rely on.</em>',
    lead: 'Professional, affordable websites for Suffolk businesses — from Ipswich and Bury St Edmunds to the coast. Designed to look great, load fast and help local customers find you on Google.',
    stats: [['From £1,495', 'small business websites'], ['4–6 wks', 'typical launch time'], ['95+', 'speed scores']],
    introTitle: 'Websites that help Suffolk customers find you',
    intro: [
      'Whether you run a holiday let in Southwold, a trade business in Ipswich, a shop in Bury St Edmunds or a growing B2B company near Felixstowe, most of your customers will meet you online first. Our web design Suffolk service makes sure that first impression is a good one.',
      'We keep things simple: a clear plan, a fixed price, a beautifully designed website and a CMS you can update yourself. Every site is built for speed and local search, so customers searching nearby can actually find you.',
    ],
    servicesTitle: 'Our Suffolk web design services',
    services: [
      ['design', 'Small business websites', 'Professional websites that explain what you do, build trust and make it easy to get in touch.'],
      ['pin', 'Local SEO', 'Pages and markup that help you appear in searches across Suffolk and East Anglia.'],
      ['shop', 'Online shops', 'Sell your products online with Shopify or WooCommerce and simple stock management.'],
      ['ux', 'Holiday & hospitality sites', 'Booking-ready websites for cottages, B&Bs, pubs and restaurants.'],
      ['refresh', 'Website redesigns', 'Refresh an older website so it works on mobile and loads quickly.'],
      ['care', 'Care plans', 'Hosting, security and updates looked after for a simple monthly fee.'],
    ],
    workTitle: 'Examples of our website design work',
    workText: 'Hospitality, retail and local service websites.',
    work: ['driftwood-hotel', 'petal-stem', 'peak-physio', 'brewline'],
    areas: { title: 'Web design near you across Suffolk', text: 'We work with businesses in every corner of the county.', list: ['Ipswich', 'Bury St Edmunds', 'Lowestoft', 'Felixstowe', 'Sudbury', 'Woodbridge', 'Newmarket', 'Stowmarket', 'Haverhill', 'Aldeburgh', 'Southwold', 'Framlingham'] },
    whyTitle: 'Why Suffolk businesses choose The Fast Designs',
    why: [
      ['Affordable, fixed pricing', 'Small business websites from £1,495 with no hidden extras.'],
      ['Easy to update', 'Change text, photos and opening hours yourself in minutes.'],
      ['Found on Google', 'Local SEO and fast loading are built in from day one.'],
      ['Friendly support', 'Clear advice in plain English, before and after launch.'],
    ],
    faqs: [
      ['How much does a website cost in Suffolk?', 'Our small business websites start from £1,495, growth websites from £3,995 and online shops from £5,995 — all with fixed, itemised quotes.'],
      ['Can I update the website myself?', 'Yes. We build on easy-to-use content management systems and record a short walkthrough video for your team.'],
      ['Do you help with Google Business Profile?', 'Yes. We set up or optimise your profile and connect it to your new website to improve local visibility.'],
      ['How long until my website is live?', 'Most Suffolk small business websites launch in four to six weeks.'],
    ],
    ctaTitle: 'Want a new website for your Suffolk business?', ctaText: 'Get a free quote and a clear plan within 48 hours.',
  },

  /* =========================== SERVICES =========================== */
  {
    route: '/web-development', slug: 'webdev', kind: 'service', crumb: 'Web Development', parent: ['Services', '/services'], serviceType: 'Web development',
    title: 'Web Development Agency UK & Custom Web Development Services',
    description: 'A UK web development agency delivering custom web development services: fast websites, web apps, APIs and integrations built by a senior web development company.',
    eyebrow: 'Web development agency UK',
    h1: 'The web development agency for <em>products that scale.</em>',
    lead: 'The Fast Designs is a web development agency UK businesses hire to build fast, secure, maintainable websites and web applications — from marketing sites to customer portals, dashboards and integrations.',
    stats: [['0.8s', 'LCP on Nimbus Pay'], ['99.99%', 'uptime on edge hosting'], ['100%', 'code you own']],
    introTitle: 'Custom web development services, built properly',
    intro: [
      'Off-the-shelf themes and page builders are fine until they are not — until the site slows down, the plugins clash, or you need a feature nobody has built. Our custom web development services give you clean, documented code designed around your business, not the other way round.',
      'As a custom web development agency we work across Next.js, React, Astro, Node.js, WordPress and headless CMS platforms. We choose the stack that gives you the best balance of speed, flexibility and running cost — and you own every line of code.',
    ],
    servicesTitle: 'Web development services we offer',
    services: [
      ['code', 'Custom websites', 'High-performance marketing sites in Next.js or Astro with a headless CMS your team will love.'],
      ['ux', 'Web applications', 'Customer portals, dashboards and internal tools with secure authentication and role-based access.'],
      ['plug', 'APIs & integrations', 'Connect your website to CRMs, ERPs, payment providers, booking systems and marketing tools.'],
      ['shop', 'E-commerce development', 'Shopify, headless commerce and WooCommerce builds for fast, reliable online stores.'],
      ['bolt', 'Performance engineering', 'Core Web Vitals fixes, edge caching and image pipelines that make slow sites fast.'],
      ['care', 'Ongoing development', 'Retained development time for new features, A/B tests and improvements every month.'],
    ],
    workTitle: 'Web development projects',
    workText: 'Platforms, dashboards and high-traffic websites developed by our team.',
    work: ['nimbus-pay', 'cobalt-cloud', 'orbit-hr', 'voltline'],
    whyTitle: 'Why choose our web development company',
    why: [
      ['Senior engineers', 'Experienced developers who write tested, documented, maintainable code.'],
      ['Modern, proven stack', 'TypeScript, Next.js, Astro, Node.js and edge hosting — no legacy lock-in.'],
      ['Security first', 'OWASP best practices, dependency monitoring and automated backups.'],
      ['You own everything', 'Full access to your code repository, hosting and accounts from day one.'],
    ],
    pricing: { title: 'Web development pricing', text: 'Every project is quoted at a fixed price. These are typical starting points.', pkgs: [
      ['Marketing website', 'Fast, SEO-ready sites with a headless CMS.', 'From £3,995', ['Custom design & development', 'Headless CMS', 'On-page SEO & schema', 'Analytics & tracking'], false],
      ['Web application', 'Portals, dashboards and internal tools.', 'From £9,995', ['Discovery & specification', 'Secure authentication', 'API integrations', 'Automated testing'], true],
      ['Retained development', 'An extension of your team every month.', 'From £1,200/mo', ['Monthly development hours', 'Priority support', 'Performance monitoring', 'Roadmap planning'], false],
    ] },
    faqs: [
      ['What does a web development agency do?', 'A web development agency plans, builds and maintains websites and web applications — writing the code, integrating systems, hosting and keeping everything secure and fast.'],
      ['Do you offer custom web development services for existing websites?', 'Yes. We regularly take over existing codebases, fix performance and security issues, and add new features.'],
      ['Which technologies do you use?', 'Mainly Next.js, React, Astro, TypeScript and Node.js, plus WordPress, Shopify and headless CMS platforms such as Sanity and Contentful.'],
      ['Are you a UK web development company?', 'Yes. We are a UK web development company working with clients across London, Manchester, Birmingham, Suffolk and beyond.'],
    ],
    ctaTitle: 'Have a web development project in mind?', ctaText: 'Tell us what you need to build and we will send a fixed-price proposal within 48 hours.',
  },
  {
    route: '/ecommerce-web-design', slug: 'ecommerce', kind: 'service', crumb: 'E-commerce Web Design', parent: ['Services', '/services'], serviceType: 'E-commerce web design',
    title: 'Ecommerce Web Design Agency UK | The Fast Designs',
    description: 'Ecommerce web design and ecommerce web development that sells. A UK ecommerce web design agency building fast Shopify and WooCommerce stores that convert.',
    eyebrow: 'Ecommerce web design agency',
    h1: 'Ecommerce web design <em>that sells around the clock.</em>',
    lead: 'We are an ecommerce web design agency helping UK brands launch and grow online stores that load fast, look premium and turn browsers into repeat customers.',
    stats: [['+68%', 'conversion (Maison Lune)'], ['+114%', 'mobile revenue'], ['1.6s', 'mobile page load']],
    introTitle: 'Ecommerce web design and development under one roof',
    intro: [
      'A great online store is equal parts design and engineering. Shoppers need beautiful product pages, clear sizing and delivery information, and a checkout that takes seconds. Behind the scenes you need inventory, payments, shipping rules and email flows that simply work. Our ecommerce web design team handles both.',
      'We design around your customers’ buying journey, then handle the ecommerce web development: custom themes, headless storefronts, payment gateways, subscriptions and integrations with your warehouse, accounting and marketing tools.',
    ],
    servicesTitle: 'Our ecommerce web design services',
    services: [
      ['shop', 'Custom store design', 'Product, collection and checkout pages designed to lift conversion and average order value.'],
      ['code', 'Ecommerce web development', 'Custom Shopify themes, WooCommerce builds and headless storefronts.'],
      ['refresh', 'Store migrations', 'Move from Magento, Wix or WooCommerce to Shopify without losing products, customers or SEO.'],
      ['plug', 'Integrations', 'Klaviyo, ERP, stock, delivery, reviews and accounting connected to your store.'],
      ['chart', 'Conversion optimisation', 'Testing, analytics and merchandising improvements to grow revenue month after month.'],
      ['seo', 'Ecommerce SEO', 'Category structure, product schema and fast pages that help products rank on Google.'],
    ],
    workTitle: 'Ecommerce websites we have designed',
    workText: 'Fashion, food, beauty and lifestyle stores.',
    work: ['maison-lune', 'greenroot', 'sola-skincare', 'arc-furniture'],
    whyTitle: 'Why brands choose our ecommerce web design agency',
    why: [
      ['Revenue-focused design', 'Every layout decision is tied to conversion, basket size or repeat purchase.'],
      ['Platform experts', 'Deep experience with Shopify, Shopify Plus, WooCommerce and headless commerce.'],
      ['Fast on mobile', 'Lightweight themes and optimised images for shoppers on the move.'],
      ['Launch with confidence', 'Full QA, test orders and a launch checklist that covers every payment and shipping rule.'],
    ],
    pricing: { title: 'Ecommerce web design pricing', text: 'Fixed-price packages for online stores of every size.', pkgs: [
      ['Starter store', 'Launch your first online shop.', 'From £3,495', ['Up to 50 products', 'Premium theme customisation', 'Payments & shipping set-up', 'Basic SEO'], false],
      ['Growth store', 'A custom store built to convert.', 'From £5,995', ['Custom design & theme', 'Unlimited products', 'Email & reviews integrations', 'Conversion-focused UX'], true],
      ['Headless / Plus', 'For high-volume brands.', 'From £14,995', ['Headless storefront', 'ERP & inventory integrations', 'Multi-currency & markets', 'Performance engineering'], false],
    ] },
    faqs: [
      ['How much does ecommerce web design cost?', 'Starter stores begin at £3,495, custom-designed stores at £5,995 and headless or Shopify Plus builds at £14,995. You will receive a fixed quote before we begin.'],
      ['Shopify or WooCommerce — which is better?', 'Shopify suits most brands thanks to its reliability and app ecosystem. WooCommerce is a good fit if you already run WordPress or need full control. We will recommend the best option for you.'],
      ['Can you migrate my existing online store?', 'Yes. We migrate products, customers, orders and URLs, and set up redirects so you keep your search rankings.'],
      ['Do you offer ecommerce web development for custom features?', 'Yes — subscriptions, product configurators, B2B pricing, bundles and custom checkout logic are all part of our ecommerce web development service.'],
    ],
    ctaTitle: 'Ready to sell more online?', ctaText: 'Get a fixed-price proposal for your new online store within 48 hours.',
  },
  {
    route: '/shopify-web-design', slug: 'shopify', kind: 'service', crumb: 'Shopify Web Design', parent: ['Services', '/services'], serviceType: 'Shopify web design',
    title: 'Shopify Web Design & Development Agency | The Fast Designs',
    description: 'Shopify web design and Shopify web development for UK brands: custom themes, store migrations, Shopify Plus and apps — fast stores built to convert.',
    eyebrow: 'Shopify web design',
    h1: 'Shopify web design <em>for ambitious brands.</em>',
    lead: 'Custom Shopify web design and Shopify web development for brands that have outgrown templates. We build fast, flexible stores your team can run without a developer on call.',
    stats: [['+31%', 'average order value'], ['96', 'mobile speed score'], ['2.0', 'Online Store 2.0 themes']],
    introTitle: 'Shopify stores designed around your customers',
    intro: [
      'Shopify gives you the most reliable e-commerce engine on the market — but most stores look and feel the same. Our Shopify web design service gives your brand a storefront that stands out, tells your story and answers every buying question before the customer has to ask.',
      'Our Shopify web development team builds custom Online Store 2.0 themes with flexible sections, so you can create new landing pages and campaigns in minutes. We also handle Shopify Plus checkout extensions, Markets, subscriptions and app integrations.',
    ],
    servicesTitle: 'Shopify web design and development services',
    services: [
      ['design', 'Custom Shopify themes', 'Bespoke design and theme development with reusable sections and blocks.'],
      ['code', 'Shopify web development', 'Liquid, Hydrogen and app development for features your store needs.'],
      ['refresh', 'Migration to Shopify', 'Move from WooCommerce, Magento, BigCommerce or Wix without losing SEO.'],
      ['bolt', 'Speed optimisation', 'Faster themes, fewer apps and optimised media for better Core Web Vitals.'],
      ['plug', 'Apps & integrations', 'Klaviyo, Recharge, Judge.me, ERP and fulfilment set up correctly.'],
      ['chart', 'Shopify CRO', 'Product page, cart and checkout improvements that increase revenue.'],
    ],
    workTitle: 'Shopify stores we have designed and developed',
    workText: 'Fashion, footwear, flowers and furniture brands.',
    work: ['maison-lune', 'stride', 'petal-stem', 'brewline'],
    whyTitle: 'Why brands pick us for Shopify',
    why: [
      ['Design that converts', 'Premium, on-brand stores designed around conversion data.'],
      ['Clean, fast themes', 'No bloated page builders — just well-structured Liquid and sections.'],
      ['Easy to manage', 'Your team controls content, collections and campaigns.'],
      ['Long-term partner', 'Monthly Shopify support and growth retainers available.'],
    ],
    pricing: { title: 'Shopify web design pricing', text: 'Fixed prices for Shopify projects.', pkgs: [
      ['Theme customisation', 'Refine a premium theme for your brand.', 'From £2,495', ['Theme set-up & styling', 'Homepage & product templates', 'Apps & payments', 'Training video'], false],
      ['Custom Shopify store', 'A bespoke design and theme.', 'From £5,995', ['Custom design', 'Custom OS 2.0 theme', 'Integrations', 'SEO & speed optimisation'], true],
      ['Shopify Plus', 'For high-growth brands.', 'From £12,995', ['Checkout extensions', 'Markets & B2B', 'Hydrogen headless option', 'Dedicated developer'], false],
    ] },
    faqs: [
      ['How much does Shopify web design cost?', 'Theme customisations start at £2,495, custom Shopify stores at £5,995 and Shopify Plus projects at £12,995.'],
      ['Do you build custom Shopify themes?', 'Yes. Our Shopify web development team builds custom Online Store 2.0 themes so you can edit every section without code.'],
      ['Can you move my store to Shopify?', 'Yes, including products, customers, order history and URL redirects to protect your SEO.'],
      ['Do you work with Shopify Plus?', 'Yes — checkout extensibility, Shopify Markets, B2B and Hydrogen headless builds.'],
    ],
    ctaTitle: 'Planning a new Shopify store?', ctaText: 'Get a free Shopify proposal with fixed pricing within 48 hours.',
  },
  {
    route: '/wordpress-web-design', slug: 'wordpress', kind: 'service', crumb: 'WordPress Web Design', parent: ['Services', '/services'], serviceType: 'WordPress web design',
    title: 'WordPress Web Design Agency UK | The Fast Designs',
    description: 'A WordPress web design agency building fast, secure, easy-to-edit WordPress websites — plus a WordPress website redesign service that keeps your rankings.',
    eyebrow: 'WordPress web design agency',
    h1: 'The WordPress web design agency for <em>fast, secure sites.</em>',
    lead: 'We design and build custom WordPress websites that load quickly, stay secure and are a pleasure to edit — no bloated page builders, no plugin chaos.',
    stats: [['97', 'avg. speed score'], ['<15', 'plugins per site'], ['24/7', 'security monitoring']],
    introTitle: 'WordPress, done the right way',
    intro: [
      'WordPress powers over 40% of the web because it is flexible and easy to use. But many WordPress sites end up slow, insecure and fragile under the weight of heavy themes and dozens of plugins. As a specialist WordPress web design agency, we build lean custom themes that keep the editing experience simple and the site fast.',
      'We use the block editor and custom fields so your team can edit every page with confidence, and we keep plugins to a minimum. Hosting, updates and security monitoring can all be handled on one of our care plans.',
    ],
    servicesTitle: 'WordPress web design services',
    services: [
      ['design', 'Custom WordPress websites', 'Bespoke designs built as lightweight custom themes.'],
      ['refresh', 'WordPress website redesign service', 'Modernise an old WordPress site while keeping your content and rankings.'],
      ['shop', 'WooCommerce', 'Online stores on WordPress with fast product pages and smooth checkout.'],
      ['bolt', 'Speed & security fixes', 'Remove bloat, fix Core Web Vitals and harden security.'],
      ['code', 'Custom blocks & plugins', 'Editor blocks and functionality built specifically for your site.'],
      ['care', 'WordPress care plans', 'Managed hosting, updates, backups and monitoring.'],
    ],
    workTitle: 'WordPress websites by our team',
    workText: 'Professional services, healthcare, construction and retail.',
    work: ['harbor-vale', 'lumen-dental', 'forge-construction', 'greenroot'],
    whyTitle: 'Why choose our WordPress web design agency',
    why: [
      ['No page-builder bloat', 'Custom themes built with native blocks for speed and stability.'],
      ['Easy editing', 'Clear, structured fields so updates never break the design.'],
      ['Secure by default', 'Hardening, firewalls, automatic backups and monitored updates.'],
      ['SEO built in', 'Schema, sitemaps, clean URLs and fast pages from day one.'],
    ],
    faqs: [
      ['Do you offer a WordPress website redesign service?', 'Yes. We redesign existing WordPress websites, migrate content, rebuild the theme for speed and set up redirects so you keep your rankings.'],
      ['How much does a WordPress website cost?', 'WordPress websites start from £1,495 for small businesses and £3,995 for larger custom builds. WooCommerce stores start from £3,495.'],
      ['Will I be able to edit the website myself?', 'Yes. We build with the WordPress block editor and custom fields, and include a recorded training session.'],
      ['Can you look after hosting and updates?', 'Yes. Our WordPress care plans include managed hosting, updates, backups, uptime and security monitoring.'],
    ],
    ctaTitle: 'Need a WordPress web design agency?', ctaText: 'Tell us about your WordPress project and get a fixed quote within 48 hours.',
  },
  {
    route: '/website-redesign', slug: 'redesign', kind: 'service', crumb: 'Website Redesign Service', parent: ['Services', '/services'], serviceType: 'Website redesign',
    title: 'Website Redesign Service UK | The Fast Designs',
    description: 'Website redesign service for UK businesses: custom, WordPress and small business website redesigns that keep your Google rankings and lift conversions.',
    eyebrow: 'Website redesign service UK',
    h1: 'Website redesign service <em>without losing your rankings.</em>',
    lead: 'Our website redesign service turns slow, outdated websites into fast, modern ones that convert — while protecting the Google rankings and traffic you have already earned.',
    stats: [['100%', 'rankings preserved'], ['2.8×', 'organic traffic (Voltline)'], ['4–8 wks', 'typical redesign']],
    introTitle: 'A website redesign service agency you can trust with your traffic',
    intro: [
      'A redesign is the riskiest project most businesses ever run on their website. Change too much without a plan and you can lose years of search rankings overnight. Change too little and nothing improves. As a website redesign service agency, we start by measuring what already works — your top pages, keywords, backlinks and conversion paths — and protect it.',
      'Then we redesign everything else: clearer messaging, a modern design system, faster code and a better route to enquiry or checkout. Every old URL is mapped and redirected, and we monitor Search Console closely for weeks after launch.',
    ],
    servicesTitle: 'What our website redesign service includes',
    services: [
      ['seo', 'SEO-safe migration', 'URL mapping, 301 redirects, metadata and schema carried over and improved.'],
      ['design', 'Custom website redesign service', 'A fresh, bespoke design built around your brand and customers.'],
      ['refresh', 'WordPress website redesign service', 'Rebuild an existing WordPress site as a fast, lean custom theme.'],
      ['pound', 'Website redesign for small business', 'Affordable, fixed-price redesigns for small businesses and sole traders.'],
      ['bolt', 'Performance upgrade', 'Move to modern hosting and code for sub-second load times.'],
      ['chart', 'Conversion improvements', 'Better calls to action, forms and journeys based on your analytics.'],
    ],
    workTitle: 'Website redesign results',
    workText: 'Redesigns that improved speed, rankings and enquiries.',
    work: ['voltline', 'ember-oak', 'nimbus-pay', 'harbor-vale'],
    whyTitle: 'Why businesses choose our website redesign service',
    why: [
      ['Rankings protected', 'A documented SEO migration plan for every redesign.'],
      ['Data-led decisions', 'We redesign based on your analytics, not guesswork.'],
      ['Fixed price', 'A clear, itemised quote — including small business options.'],
      ['Post-launch monitoring', 'We watch rankings, errors and conversions after go-live.'],
    ],
    pricing: { title: 'Website redesign pricing', text: 'Fixed-price redesign packages.', pkgs: [
      ['Small business redesign', 'Refresh a 5–10 page website.', 'From £1,495', ['New design', 'Mobile-first rebuild', 'SEO-safe redirects', 'Speed optimisation'], false],
      ['Custom redesign', 'A full redesign and rebuild.', 'From £3,995', ['Discovery & analytics audit', 'Custom design system', 'CMS migration', 'Conversion improvements'], true],
      ['Platform redesign', 'Complex sites & stores.', 'From £7,995', ['Large-scale URL mapping', 'Integrations', 'E-commerce migration', 'Post-launch monitoring'], false],
    ] },
    faqs: [
      ['Will a website redesign affect my Google rankings?', 'Not if it is done properly. We map every URL, set up 301 redirects, keep metadata and monitor Search Console after launch so your rankings are protected.'],
      ['Do you offer a website redesign service for small businesses?', 'Yes. Our small business website redesign starts from £1,495 and includes a new mobile-first design, SEO-safe redirects and speed optimisation.'],
      ['Can you redesign a WordPress website?', 'Yes. Our WordPress website redesign service rebuilds your site as a lightweight custom theme while keeping your content.'],
      ['How long does a website redesign take?', 'Most redesigns take four to eight weeks depending on the number of pages and integrations.'],
    ],
    ctaTitle: 'Is it time to redesign your website?', ctaText: 'Get a free redesign review and a fixed-price proposal within 48 hours.',
  },
  {
    route: '/affordable-web-design', slug: 'affordable', kind: 'service', crumb: 'Affordable Web Design', parent: ['Services', '/services'], serviceType: 'Affordable web design for small businesses',
    title: 'Affordable Web Design UK | Websites from £995 | The Fast Designs',
    description: 'Affordable web design for UK small businesses: professional, fast, SEO-ready websites from £1,495 with fixed prices, no hidden costs and easy editing.',
    eyebrow: 'Affordable web design',
    h1: 'Affordable web design <em>that still looks premium.</em>',
    lead: 'Professional websites for small businesses, start-ups and sole traders — designed by senior designers, built for speed and Google, and priced so you know exactly what you are paying.',
    stats: [['£1,495', 'starting price'], ['4–6 wks', 'to launch'], ['£0', 'hidden costs']],
    introTitle: 'Affordable does not have to mean cheap',
    intro: [
      'Cheap templates and DIY builders often cost more in the long run: slow pages, poor rankings and a design that does not reflect the quality of your work. Our affordable web design packages give small businesses the same senior design and development team our larger clients get — with a scope tailored to your budget.',
      'Every package includes a custom design, mobile-first build, on-page SEO, contact forms, analytics and training, with optional hosting and care so you never have to worry about updates.',
    ],
    servicesTitle: 'What is included in our affordable web design packages',
    services: [
      ['design', 'Custom design', 'A professional design tailored to your brand — not a recycled template.'],
      ['bolt', 'Fast on every device', 'Mobile-first, lightweight pages that load in about a second.'],
      ['seo', 'SEO foundations', 'Page titles, descriptions, schema and a sitemap set up for Google.'],
      ['pin', 'Local search', 'Google Business Profile tips and local pages to help nearby customers find you.'],
      ['ux', 'Easy editing', 'Update text, images and services yourself with a simple CMS.'],
      ['care', 'Optional care plan', 'Hosting, backups, updates and support for a small monthly fee.'],
    ],
    workTitle: 'Small business websites we have built',
    workText: 'Clinics, cafés, florists and local service businesses.',
    work: ['peak-physio', 'lumen-dental', 'petal-stem', 'forge-construction'],
    whyTitle: 'Why small businesses choose us',
    why: [
      ['Fixed, honest pricing', 'Clear packages in pounds — no surprises.'],
      ['Senior quality', 'The same team that builds for larger brands.'],
      ['Quick launch', 'Most small business websites go live within six weeks.'],
      ['Ongoing help', 'We are here when you need changes or advice.'],
    ],
    pricing: { title: 'Affordable web design packages', text: 'Simple, fixed prices for small businesses.', pkgs: [
      ['Starter', 'A professional one-page or small site.', 'From £995', ['Up to 3 pages', 'Custom design', 'Contact form', 'Basic SEO'], false],
      ['Small business', 'Our most popular package.', 'From £1,495', ['Up to 8 pages', 'Custom design', 'On-page SEO & schema', 'Analytics & training'], true],
      ['Small business plus', 'More pages and features.', 'From £2,495', ['Up to 15 pages', 'Blog or news', 'Booking or shop integration', 'Local SEO pages'], false],
    ] },
    faqs: [
      ['How much does an affordable website cost?', 'Our small business websites start from £995 for a starter site and £1,495 for our most popular package, with fixed, itemised quotes.'],
      ['Are there any monthly fees?', 'Only if you choose a care plan for hosting, updates and support. Otherwise you can host the site yourself.'],
      ['Can you redesign my existing small business website?', 'Yes — our website redesign service for small businesses starts from £1,495.'],
      ['Will my website be on Google?', 'Yes. We set up on-page SEO, a sitemap and Search Console so Google can find and index your site quickly.'],
    ],
    ctaTitle: 'Get an affordable website that works', ctaText: 'Tell us what you need and get a fixed price within 48 hours.',
  },
];

/* ---------------- Locations hub ---------------- */
export const LOCATIONS_PAGE = {
  route: '/locations', slug: 'locations', kind: 'hub', crumb: 'Locations',
  title: 'Web Design Near Me | UK Locations | The Fast Designs',
  description: 'Looking for web design near me? The Fast Designs is a UK web design agency working with businesses in London, Manchester, Birmingham, Suffolk and across the UK.',
};

/* ---------------- Templates ---------------- */
function faqSchema(faqs) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
}

export function faqHtml(faqs) {
  return `<div class="faq" data-reveal>${faqs.map(([q, a]) => `<details><summary>${esc(q)}<i aria-hidden="true"></i></summary><div class="faq__a"><p>${esc(a)}</p></div></details>`).join('')}</div>`;
}

function relatedLinks(d) {
  const all = [...LANDING.filter((x) => x.route !== d.route).map((x) => [x.crumb, x.route]), ['Web Design Services', '/services'], ['Portfolio', '/portfolio']];
  return `<ul class="industry-cloud" data-stagger=".03">${all.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul>`;
}

export function landingPage(d, SITE) {
  const schema = [
    {
      '@context': 'https://schema.org', '@type': 'Service', name: strip(d.h1), serviceType: d.serviceType || 'Web design', description: d.description,
      provider: { '@type': 'ProfessionalService', name: 'The Fast Designs', url: SITE.url + '/' },
      areaServed: d.city ? { '@type': d.city === 'Suffolk' ? 'AdministrativeArea' : 'City', name: d.city } : { '@type': 'Country', name: 'United Kingdom' },
      ...(d.pricing ? { offers: d.pricing.pkgs.map(([n, , p]) => ({ '@type': 'Offer', name: n, priceCurrency: 'GBP', price: (p.match(/[\d,]+/) || ['0'])[0].replace(/,/g, '') })) } : {}),
    },
    faqSchema(d.faqs),
  ];
  const work = d.work.map((s) => PORTFOLIO.find((p) => p.slug === s)).filter(Boolean);
  const body = `
<section class="phero">
  <div class="phero__bg"><div class="grid-bg"></div></div>
  <div class="container">
    <ol class="crumbs" data-reveal><li><a href="/">Home</a></li><li><a href="${d.parent[1]}">${d.parent[0]}</a></li><li aria-current="page">${esc(d.crumb)}</li></ol>
    <div class="phero__grid">
      <div>
        <p class="eyebrow" data-reveal>${esc(d.eyebrow)}</p>
        <h1 class="h-xl" data-split>${d.h1}</h1>
      </div>
      <div class="phero__aside" data-reveal style="--d:.3s"><p style="margin:0 0 22px">${esc(d.lead)}</p><a href="/get-a-quote" class="btn btn--primary" data-magnetic><span>Get a Free Quote</span><i class="btn__arrow" aria-hidden="true">→</i></a></div>
    </div>
    <div class="lp-stats" data-stagger=".08">${d.stats.map(([n, l]) => `<div><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join('')}</div>
  </div>
</section>

<section class="section--tight">
  <div class="container cs-two">
    <div><h2 class="h-md" data-split>${esc(d.introTitle)}</h2></div>
    <div data-reveal>${d.intro.map((t) => `<p class="cs-text">${esc(t)}</p>`).join('')}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="shead"><div><p class="eyebrow" data-reveal>Services</p><h2 class="h-lg" data-split>${esc(d.servicesTitle)}</h2></div></div>
    <div class="svc-grid" data-stagger=".06">${d.services.map(([ic, h, p]) => `<div class="svc">${icon(ic)}<h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('')}</div>
  </div>
</section>

<section class="section--tight">
  <div class="container">
    <div class="shead"><div><p class="eyebrow" data-reveal>Our work</p><h2 class="h-lg" data-split>${esc(d.workTitle)}</h2><p data-reveal>${esc(d.workText)}</p></div><a href="/portfolio" class="btn btn--ghost" data-magnetic data-reveal><span>View full portfolio</span><i class="btn__arrow" aria-hidden="true">→</i></a></div>
    <div class="work-grid work-grid--stagger">${work.map((p, i) => workCard(p, i + 2, { h: 'h3', context: d.crumb })).join('')}</div>
  </div>
</section>

${d.areas ? `<section class="section--tight">
  <div class="container two-col" style="align-items:start">
    <div><p class="eyebrow" data-reveal>Areas we cover</p><h2 class="h-md" data-split>${esc(d.areas.title)}</h2><p class="muted" data-reveal style="margin-top:18px">${esc(d.areas.text)}</p></div>
    <ul class="industry-cloud" data-stagger=".03">${d.areas.list.map((a) => `<li>${esc(a)}</li>`).join('')}</ul>
  </div>
</section>` : ''}

<section class="section">
  <div class="container">
    <div class="shead"><div><p class="eyebrow" data-reveal>How we work</p><h2 class="h-lg" data-split>From first call to launch in weeks</h2></div></div>
    <div class="lp-process" data-stagger=".08">${PROCESS.map(([h, t, p], i) => `<div><span class="lp-process__n">${String(i + 1).padStart(2, '0')}</span><small>${t}</small><h3>${h}</h3><p>${esc(p)}</p></div>`).join('')}</div>
  </div>
</section>

<section class="section--tight">
  <div class="container">
    <div class="shead"><div><p class="eyebrow" data-reveal>Why us</p><h2 class="h-lg" data-split>${esc(d.whyTitle)}</h2></div></div>
    <div class="values lp-why" data-stagger=".08">${d.why.map(([h, p]) => `<div class="value"><div class="value__ic">✦</div><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('')}</div>
  </div>
</section>

${d.pricing ? `<section class="section">
  <div class="container">
    <div class="shead"><div><p class="eyebrow" data-reveal>Pricing</p><h2 class="h-lg" data-split>${esc(d.pricing.title)}</h2></div><p data-reveal>${esc(d.pricing.text)}</p></div>
    <div class="packages" data-stagger=".1">${d.pricing.pkgs.map(([n, f, pr, items, hot]) => `<div class="pkg ${hot ? 'pkg--hot' : ''}">${hot ? '<span class="pkg__badge">Most popular</span>' : ''}<h3>${esc(n)}</h3><p class="pkg__for">${esc(f)}</p><div class="pkg__time">${esc(pr)}</div><ul>${items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul><a href="/get-a-quote" class="btn ${hot ? 'btn--primary' : 'btn--ghost'}"><span>Get a quote</span></a></div>`).join('')}</div>
  </div>
</section>` : ''}

<section class="section">
  <div class="container faq-wrap">
    <div><p class="eyebrow" data-reveal>FAQ</p><h2 class="h-lg" data-split>${esc(d.crumb)} FAQs</h2></div>
    ${faqHtml(d.faqs)}
  </div>
</section>

<section class="section--tight">
  <div class="container">
    <p class="eyebrow" data-reveal>Explore more</p>
    <h2 class="h-md" data-split style="margin-bottom:28px">Related services and locations</h2>
    ${relatedLinks(d)}
  </div>
</section>

<section class="section--tight" style="padding-bottom:clamp(80px,10vw,140px)">
  <div class="container">
    <div class="cta" data-reveal="scale">
      <p class="eyebrow">Free proposal in 48 hours</p>
      <h2 class="h-lg">${esc(d.ctaTitle)}</h2>
      <p>${esc(d.ctaText)}</p>
      <div class="cta__actions"><a href="/get-a-quote" class="btn btn--primary btn--lg" data-magnetic><span>Get a Free Quote</span><i class="btn__arrow" aria-hidden="true">→</i></a><a href="/contact" class="btn btn--ghost btn--lg" data-magnetic><span>Contact Us</span></a></div>
    </div>
  </div>
</section>`;
  return { meta: { route: d.route, slug: 'landing', crumb: d.crumb, parent: d.parent, priority: 0.85, title: d.title, description: d.description, schema }, body };
}

export function locationsPage(SITE) {
  const d = LOCATIONS_PAGE;
  const cities = LANDING.filter((x) => x.kind === 'city');
  const faqs = [
    ['Is there a web design agency near me?', 'The Fast Designs works with businesses across the whole of the UK. Whether you are in London, Manchester, Birmingham, Suffolk or anywhere else, you get the same senior team, fixed pricing and fast turnaround.'],
    ['Do I need a local web designer?', 'Not necessarily. What matters is a team that understands your market and local search. We research your area, competitors and local keywords for every project, and run everything smoothly over video calls and live previews.'],
    ['Which areas do you cover?', 'We work with clients throughout England, Scotland, Wales and Northern Ireland, with dedicated pages for London, Manchester, Birmingham and Suffolk.'],
  ];
  const body = `
<section class="phero">
  <div class="phero__bg"><div class="grid-bg"></div></div>
  <div class="container">
    <ol class="crumbs" data-reveal><li><a href="/">Home</a></li><li aria-current="page">Locations</li></ol>
    <div class="phero__grid">
      <div><p class="eyebrow" data-reveal>Web design near me</p><h1 class="h-xl" data-split>Web design near you, <em>anywhere in the UK.</em></h1></div>
      <p class="phero__aside" data-reveal style="--d:.3s">Searching for “web design near me”? The Fast Designs is a UK web design agency that works with businesses in every region — with local SEO expertise for the places your customers are searching from.</p>
    </div>
  </div>
</section>

<section class="section--tight" style="padding-top:0">
  <div class="container">
    <h2 class="h-md" data-split style="margin-bottom:30px">Web design by city and county</h2>
    <div class="lp-cities" data-stagger=".08">${cities.map((c) => `<a href="${c.route}" class="lp-city"><small>${esc(c.eyebrow)}</small><h3>${esc(c.crumb)}</h3><p>${esc(c.lead)}</p><span class="link-arrow"><span>Explore ${esc(c.city)}</span></span></a>`).join('')}</div>
  </div>
</section>

<section class="section">
  <div class="container cs-two">
    <div><h2 class="h-md" data-split>A UK web design agency with local know-how</h2></div>
    <div data-reveal>
      <p class="cs-text">Local search is one of the most valuable sources of new customers for any business. When someone searches for a service near them, Google shows the businesses it trusts most for that area — so your website needs clear location signals, fast pages and structured data.</p>
      <p class="cs-text">Every website we build includes local SEO foundations: location-aware content, LocalBusiness and Service schema, Google Business Profile integration and fast, mobile-first pages. Wherever you are in the UK, we help nearby customers find you first.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container faq-wrap">
    <div><p class="eyebrow" data-reveal>FAQ</p><h2 class="h-lg" data-split>Web design near me FAQs</h2></div>
    ${faqHtml(faqs)}
  </div>
</section>

<section class="section--tight" style="padding-bottom:clamp(80px,10vw,140px)">
  <div class="container"><div class="cta" data-reveal="scale"><p class="eyebrow">Wherever you are</p><h2 class="h-lg">Let’s build your new website.</h2><p>Get a fixed-price proposal within 48 hours.</p><div class="cta__actions"><a href="/get-a-quote" class="btn btn--primary btn--lg" data-magnetic><span>Get a Free Quote</span><i class="btn__arrow" aria-hidden="true">→</i></a></div></div></div>
</section>`;
  return { meta: { route: d.route, slug: 'landing', crumb: 'Locations', priority: 0.8, title: d.title, description: d.description, schema: [faqSchema(faqs)] }, body };
}
