// Blog articles. Facts and figures are sourced — see each article's `sources` list.
// Prices for third-party platforms change often; each article states when figures were checked.

const A = '/affordable-web-design';
const link = (text) => `<a href="${A}">${text}</a>`;

export const POSTS = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'how-much-does-a-website-cost-uk',
    title: 'How Much Does a Website Cost in the UK? Real Prices Compared',
    metaTitle: 'How Much Does a Website Cost in the UK? | The Fast Designs',
    description: 'What a small business website really costs in the UK: website builders, freelancers, agencies and cheap web design packages compared, with 3-year totals.',
    date: '2026-11-04', category: 'Pricing', readMins: 8,
    excerpt: 'DIY builders, freelancers, agencies or a fixed-price package? We compare real UK prices and three-year totals so you can budget with confidence.',
    body: `
<p>“How much does a website cost?” is the first question almost every small business owner asks — and the answers online range from “free” to “£20,000”. Both can be true, which is exactly why the question is so frustrating. In this guide we break down what a small business website actually costs in the UK, using published prices and real market data, so you can compare the main options side by side and work out which one makes sense for you.</p>
<p>We will look at four routes: building it yourself on a website builder, hiring a freelancer, hiring a traditional agency, and choosing a fixed-price package from an ${link('affordable web design service')}. For each one we will look at the upfront cost, the ongoing cost and the three-year total, because the cheapest option on day one is not always the cheapest option over the life of your website.</p>

<h2>Why website prices vary so much</h2>
<p>A website is not a single product. A one-page site for a mobile hairdresser and a 500-product online shop are both “websites”, but they involve completely different amounts of work. The price is driven by a handful of factors:</p>
<ul>
<li><strong>Number of pages.</strong> Each page needs to be designed, written, built and tested.</li>
<li><strong>Features.</strong> Online booking, payments, product catalogues and member areas all add development time.</li>
<li><strong>Design approach.</strong> A lightly customised template is quicker than a fully bespoke design.</li>
<li><strong>Content.</strong> If you supply your own text and photos, the job is faster than if copywriting and photography are needed.</li>
<li><strong>Who builds it.</strong> Your own time, a freelancer’s day rate or an agency’s team rate.</li>
</ul>
<p>Keep those factors in mind as you read the comparisons below — they explain almost every difference in price you will come across.</p>

<h2>Option 1: Build it yourself on a website builder</h2>
<p>Website builders such as Wix, Squarespace and Shopify let you create a site from a template with no coding. You pay a monthly subscription that includes hosting and security updates. Here are the published UK prices for the entry-level plans most small businesses consider, based on annual billing at the time of writing (November 2026):</p>
<div class="table-wrap"><table>
<thead><tr><th>Platform &amp; plan</th><th>Monthly (billed annually)</th><th>Cost per year</th><th>3-year total</th></tr></thead>
<tbody>
<tr><td>Wix Light (no online selling)</td><td>£9</td><td>£108</td><td>£324</td></tr>
<tr><td>Wix Core (can sell online)</td><td>£16</td><td>£192</td><td>£576</td></tr>
<tr><td>Squarespace Basic</td><td>around £12</td><td>around £144</td><td>around £432</td></tr>
<tr><td>Shopify Basic (online shop)</td><td>£19</td><td>£228</td><td>£684</td></tr>
</tbody></table></div>
<p>Paying month-to-month costs more: Shopify Basic, for example, is listed at £25 a month on monthly billing rather than £19. Online shops also pay card processing fees on every sale, and many businesses add paid apps, premium templates or a custom domain on top.</p>
<p><strong>The hidden cost is your time.</strong> Building a good site yourself means choosing a template, writing every page, sourcing images, setting up SEO and testing on mobile. For most first-timers that is several full days of work. If your time is worth even £15 an hour, two to three days of building quickly adds £240–£360 of “invisible” cost to the subscription.</p>
<p><strong>Best for:</strong> people who enjoy DIY, have time to spare and are happy with a template look.</p>

<h2>Option 2: Hire a freelance web designer</h2>
<p>Freelancers range from students to highly experienced designers, and so do their prices. Advertised UK contract rates give a useful benchmark: according to ITJobsWatch, the median day rate for web designer contract roles in the UK was £363 in the six months to August 2025, rising to £436 for remote and hybrid roles. Money-transfer company Wise’s pricing guide gives a broader range of roughly £180 to £550 a day.</p>
<p>A simple five-page brochure site typically takes a professional three to five days once you include design, build, revisions and testing. At the £363 median, that works out at roughly:</p>
<ul>
<li>3 days × £363 = <strong>£1,089</strong></li>
<li>5 days × £363 = <strong>£1,815</strong></li>
</ul>
<p>Some freelancers charge fixed project fees instead, but the totals usually land in a similar range. On top of that you will normally pay for hosting and your domain name, plus any changes after launch.</p>
<p><strong>Best for:</strong> businesses that want a custom design and have a budget of £1,000 or more.</p>

<h2>Option 3: Hire a traditional web design agency</h2>
<p>Agencies bring a team — designers, developers, copywriters and project managers — which is why their prices are higher. Because agencies charge for the time of several people, even a modest small business website from a traditional agency regularly runs into several thousand pounds, and larger bespoke sites or online shops can reach five figures. In return you usually get strategy, a bespoke design, copywriting and ongoing support.</p>
<p><strong>Best for:</strong> established businesses with complex needs, multiple stakeholders or large product catalogues.</p>

<h2>Option 4: A fixed-price package from an affordable web design company</h2>
<p>There is a middle ground between doing it all yourself and paying agency rates: ${link('cheap web design packages')} from a studio that has streamlined the process. Because the work is scoped tightly around what small businesses actually need — clear pages, mobile-friendly design, a contact route and the SEO basics — the price can come down dramatically without the result looking cheap.</p>
<p>As an example, our own packages at The Fast Designs are:</p>
<div class="table-wrap"><table>
<thead><tr><th>Package</th><th>Price</th><th>What you get</th></tr></thead>
<tbody>
<tr><td>Starter</td><td>£100</td><td>One-page responsive website, contact form or click-to-email, basic SEO set-up</td></tr>
<tr><td>Standard</td><td>£250</td><td>Up to 5 pages, contact form and Google Map, on-page SEO for every page</td></tr>
<tr><td>Premium</td><td>£500</td><td>Up to 10 pages, blog, news or gallery, Google Analytics and Search Console, easy editing</td></tr>
</tbody></table></div>
<p>A website is a one-off cost, so the three-year picture looks very different from a monthly subscription. Add a .co.uk domain name — typically somewhere around £5–£15 a year depending on the registrar — and modest hosting, and the three-year total for a five-page site can sit well below the cost of most builder subscriptions over the same period.</p>

<h2>Side-by-side: three-year cost of a five-page business website</h2>
<div class="table-wrap"><table>
<thead><tr><th>Route</th><th>Upfront</th><th>Ongoing</th><th>Approx. 3-year total</th><th>Your time</th></tr></thead>
<tbody>
<tr><td>Website builder (Wix Core)</td><td>£0</td><td>£192/year</td><td>£576 + extras</td><td>2–3 days</td></tr>
<tr><td>Freelancer (3–5 days)</td><td>£1,089–£1,815</td><td>Hosting &amp; domain</td><td>£1,150–£1,950</td><td>A few hours</td></tr>
<tr><td>Traditional agency</td><td>Several thousand pounds</td><td>Often a care plan</td><td>Usually £3,000+</td><td>A few hours</td></tr>
<tr><td>Fixed-price Standard package</td><td>£250</td><td>Domain &amp; hosting</td><td>Roughly £300–£400</td><td>A few hours</td></tr>
</tbody></table></div>
<p>Figures are illustrative and based on the published prices above. Your exact costs will depend on extras such as apps, copywriting and hosting choices.</p>

<h2>What should always be included — whatever you pay</h2>
<p>Cheap should never mean cutting the things that make a website work. Whichever route you choose, check that these are included:</p>
<ul>
<li><strong>Mobile-first design.</strong> Google completed its move to mobile-first indexing in October 2023, meaning it primarily uses the mobile version of your site for indexing and ranking.</li>
<li><strong>Secure HTTPS.</strong> Browsers flag non-HTTPS pages as “Not secure”, and Google has used HTTPS as a ranking signal since 2014.</li>
<li><strong>Page titles and meta descriptions</strong> for every page, so you appear properly in search results.</li>
<li><strong>A clear way to contact you</strong> on every page — phone, email or a form.</li>
<li><strong>Ownership.</strong> Make sure the domain name is registered in your name and that you can move the site if you ever want to.</li>
</ul>

<h2>Which option is right for you?</h2>
<p>If you love DIY and have the time, a website builder is a sensible starting point — just budget for the subscription every year. If you want something bespoke and have £1,000+ to spend, a good freelancer is a great choice. If you have complex requirements, an agency is worth the investment.</p>
<p>But if you are a sole trader, start-up or local business that simply wants a professional website without a large bill, a fixed-price package is usually the best value. Low cost web design in the UK has come a long way: with a streamlined process, you can get a clean, fast, mobile-friendly site for a few hundred pounds instead of a few thousand. If that sounds like you, take a look at our ${link('affordable web design services UK')} businesses use to get online quickly.</p>

<h2>How to keep your website costs down</h2>
<p>Whichever route you choose, a little preparation saves money. Write a list of the pages you need before asking for quotes, gather your logo, photos and opening hours in one folder, and draft a few sentences about each service — even rough notes help a designer work faster. Start with the essentials and add extra pages later, rather than paying for features you might never use.</p>
<h2>Frequently asked questions</h2>
<h3>Can I really get a professional website for £100?</h3>
<p>Yes — for a single page. A well-designed one-page site with your services, contact details and a contact form is enough for many sole traders and new businesses, and it can be expanded later.</p>
<h3>Are there monthly fees?</h3>
<p>With a one-off package, the website itself has no monthly fee. You will need a domain name and hosting, which can cost very little; we can set these up at cost if you would like us to.</p>
<h3>Is a website builder cheaper than a web designer?</h3>
<p>In year one, sometimes. Over three years, a builder subscription often costs more than a one-off fixed-price website — and that is before you count the time it takes to build it yourself.</p>`,
    sources: [
      ['Wix UK pricing explained — Startups.co.uk', 'https://startups.co.uk/websites/builders/wix-pricing/'],
      ['Squarespace pricing UK — ExpertSure', 'https://www.expertsure.com/uk/web-design/squarespace-pricing-uk/'],
      ['Shopify pricing UK — Ecommerce Platforms', 'https://ecommerce-platforms.com/articles/shopify-pricing-uk'],
      ['Web Designer contract rates, UK — ITJobsWatch', 'https://www.itjobswatch.co.uk/contracts/uk/web%20designer.do'],
      ['How much to charge for freelance web design — Wise', 'https://wise.com/gb/blog/how-much-to-charge-for-freelance-web-design'],
      ['Mobile-first indexing has landed — Google Search Central (Oct 2023)', 'https://developers.google.com/search/blog/2023/10/mobile-first-is-here'],
      ['HTTPS as a ranking signal — Google Search Central (2014)', 'https://developers.google.com/search/blog/2014/08/https-as-ranking-signal'],
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'website-builder-vs-web-designer',
    title: 'Website Builder vs Cheap Web Design Package: Which Is Better?',
    metaTitle: 'Website Builder vs Cheap Web Design Package | The Fast Designs',
    description: 'Wix, Squarespace or a cheap web design package? We compare cost, time, design, SEO, speed and ownership to help UK small businesses choose the right option.',
    date: '2026-11-04', category: 'Comparisons', readMins: 8,
    excerpt: 'We compare DIY website builders with low-cost professional packages on cost, time, SEO, speed and ownership — with real UK prices.',
    body: `
<p>For a small business, there are two popular ways to get a website without spending thousands: build it yourself on a website builder such as Wix or Squarespace, or pay a designer for a low-cost, fixed-price package. Both promise a professional result on a small budget, but they suit very different people. In this comparison we look at the real costs, the time involved, design quality, search engine optimisation, speed and — the one most people forget — who actually owns the website.</p>

<h2>The quick answer</h2>
<p>If you enjoy hands-on projects, have a few spare days and are happy with a template look, a website builder is a reasonable choice. If you would rather spend your time running your business, want a site that looks properly designed and prefer a one-off cost over a lifelong subscription, a cheap web design package from a professional is usually better value. Below is the detail behind that answer.</p>

<h2>1. Cost: subscription vs one-off</h2>
<p>Website builders charge a monthly subscription. At the time of writing (November 2026), published UK prices for annual billing start at around £9 a month for Wix Light (which cannot sell online), £16 a month for Wix Core, around £12 a month for Squarespace Basic and £19 a month for Shopify Basic. Monthly billing costs more.</p>
<p>A design package is usually a one-off fee. Here is how the totals compare for a simple five-page site:</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Year 1</th><th>Year 2</th><th>Year 3</th><th>3-year total</th></tr></thead>
<tbody>
<tr><td>Wix Core (£16/month, annual)</td><td>£192</td><td>£192</td><td>£192</td><td>£576</td></tr>
<tr><td>Squarespace Basic (~£12/month)</td><td>~£144</td><td>~£144</td><td>~£144</td><td>~£432</td></tr>
<tr><td>£250 Standard package + domain &amp; hosting</td><td>~£270–£300</td><td>~£15–£50</td><td>~£15–£50</td><td>~£300–£400</td></tr>
</tbody></table></div>
<p>The subscription is cheaper in the first few months, but because it never ends, the professional package usually overtakes it within the first couple of years. Builders also tend to sell add-ons: premium apps, extra storage, email marketing and booking tools can all push the monthly cost up.</p>

<h2>2. Time: who does the work?</h2>
<p>This is the biggest difference. With a builder, <em>you</em> are the designer, copywriter and developer. Choosing a template, writing every page, finding images, setting up forms, configuring SEO settings and testing on a phone typically takes a first-timer several full days, spread over a few weeks.</p>
<p>With a package, you spend an hour or two answering questions and sending your content, then review the design. For most small business owners, two or three days not spent on paid work cost far more than the price difference between the two options.</p>

<h2>3. Design quality and first impressions</h2>
<p>First impressions are formed fast. In a widely cited 2006 study by Gitte Lindgaard and colleagues at Carleton University, participants judged the visual appeal of web pages after seeing them for just 50 milliseconds — and their ratings closely matched the judgements made after longer viewing. Stanford University’s Web Credibility Research found that the look of a site was the factor people mentioned most often when judging whether it was credible; in one study, 46.1% of comments referred to visual design.</p>
<p>Builder templates are generally well made, but they are used by thousands of businesses and it is easy to end up with something that looks generic — or to break a good template by adding too much. A designer creates ${link('affordable web designs')} that fit your brand, your audience and your goals, which matters when customers decide whether to trust you in a fraction of a second.</p>

<h2>4. SEO: getting found on Google</h2>
<p>Every major builder lets you edit page titles and descriptions, and many have good SEO guides. The difference is knowledge and discipline: a professional will set a unique title and description for every page, structure headings properly, write image alt text, create a sitemap and connect Google Search Console as standard.</p>
<p>Local businesses also benefit from structured data (schema markup) that tells Google your business type, opening hours and location, and from a well-optimised Google Business Profile, which is free. These are straightforward for a designer but easy to overlook when you are learning everything at once.</p>

<h2>5. Speed and Core Web Vitals</h2>
<p>Google measures real-world page experience using its Core Web Vitals. A page is considered “good” when, for at least 75% of visits, its Largest Contentful Paint is 2.5 seconds or less, its Interaction to Next Paint is 200 milliseconds or less, and its Cumulative Layout Shift is 0.1 or less.</p>
<p>Speed matters commercially as well as for SEO. Google’s research found that 53% of mobile visits are abandoned if a page takes longer than three seconds to load. Builders can produce fast pages, but heavy templates, large images and stacks of apps often slow them down. A hand-built site can be kept lean from the start — one of the advantages of affordable web design and development done by someone who builds sites every day.</p>

<h2>6. Ownership and flexibility</h2>
<p>This is the point most people only think about when it is too late. On most website builders you cannot take your site with you: if you stop paying, it goes offline, and moving to another platform usually means rebuilding it. Your domain name may also be registered through the builder.</p>
<p>When you pay for a website to be built, you should own it. Before you buy, check that the domain will be registered in your name and that you can move the site to another host if you want to. We cover this in more detail in our guide to choosing a low cost web design company.</p>

<h2>7. Support and changes</h2>
<p>Builders offer help centres and support chat, but they will not make changes for you. With a designer, small changes are often quick and inexpensive — and higher packages can include a simple editor so you can update text and photos yourself.</p>

<h2>Head-to-head summary</h2>
<div class="table-wrap"><table>
<thead><tr><th>Factor</th><th>Website builder</th><th>Cheap web design package</th></tr></thead>
<tbody>
<tr><td>Upfront cost</td><td>Low (monthly)</td><td>Low one-off fee</td></tr>
<tr><td>3-year cost</td><td>Often higher</td><td>Often lower</td></tr>
<tr><td>Your time</td><td>Several days</td><td>A few hours</td></tr>
<tr><td>Design</td><td>Template-based</td><td>Designed for your business</td></tr>
<tr><td>SEO set-up</td><td>Do it yourself</td><td>Done for you</td></tr>
<tr><td>Speed</td><td>Varies with template and apps</td><td>Can be kept lean</td></tr>
<tr><td>Ownership</td><td>Usually tied to the platform</td><td>Should be yours</td></tr>
</tbody></table></div>

<h2>A worked example: a local cleaning company</h2>
<p>Imagine a two-person cleaning business in Bristol that needs five pages: home, services, prices, areas covered and contact. On a website builder, the owner chooses a template, writes the copy, sources photos and sets up a quote form over a couple of weekends, then pays £16 a month on Wix Core — £576 over three years, plus any add-ons.</p>
<p>With a fixed-price Standard package, the owner fills in a short questionnaire, sends a few photos and reviews a draft design. The site is built mobile-first with page titles, descriptions and a Google Map on the contact page, then handed over. The total over three years is roughly £300–£400 including domain and hosting — and the owner spent those weekends working, not building.</p>
<p>Neither choice is wrong. The builder gives more control day to day; the package gives a more polished result for less money and time over the long run.</p>

<h2>What about editing the site yourself?</h2>
<p>One genuine advantage of builders is that you can change anything, at any time, without asking anyone. If you plan to update your site every week — adding new products, events or blog posts — that flexibility is valuable. Most small business websites, though, only change a few times a year: a new price list, fresh photos, updated opening hours. For that kind of occasional update, a simple editor included in a package, or a quick change made by your designer, is usually all you need. It is worth being honest with yourself about how often you will really make changes before you choose.</p>

<h2>Hybrid options</h2>
<p>You do not have to pick one forever. Some businesses start with a professionally designed site and add a booking or shop platform later. Others launch on a builder and switch to a designed site once the business grows. If you are unsure, start with the smallest version that does the job well — a strong one-page site is often enough to begin with.</p>

<h2>When a website builder is the better choice</h2>
<ul>
<li>You genuinely enjoy designing and writing, and have the time.</li>
<li>You need to launch today and will refine the site over months.</li>
<li>You want to run a large shop and are comfortable with the platform’s fees.</li>
</ul>

<h2>When a cheap web design package is the better choice</h2>
<ul>
<li>You would rather spend your time on customers than on templates.</li>
<li>You want a site that looks professional and specific to your business.</li>
<li>You prefer a one-off cost and full ownership over a permanent subscription.</li>
</ul>
<p>There are plenty of ${link('cheap website designers UK')} businesses can choose from, so quality varies — look at examples of their work and check exactly what is included. If you would like a professional site for less than a year or two of builder fees, our ${link('cheap web design packages')} start at £100, with a five-page Standard site for £250. You can compare the options on our ${link('affordable web design')} page.</p>`,
    sources: [
      ['Wix UK pricing explained — Startups.co.uk', 'https://startups.co.uk/websites/builders/wix-pricing/'],
      ['Squarespace pricing UK — ExpertSure', 'https://www.expertsure.com/uk/web-design/squarespace-pricing-uk/'],
      ['Shopify pricing UK — Ecommerce Platforms', 'https://ecommerce-platforms.com/articles/shopify-pricing-uk'],
      ['Web users judge sites in the blink of an eye — Nature (2006)', 'https://www.nature.com/news/2006/060109/full/news060109-13.html'],
      ['How Do People Evaluate a Web Site’s Credibility? — Stanford Persuasive Technology Lab (2002)', 'https://credibility.stanford.edu/'],
      ['Defining the Core Web Vitals thresholds — web.dev', 'https://web.dev/articles/defining-core-web-vitals-thresholds'],
      ['Mobile site load time statistics — Think with Google', 'https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-site-load-time-statistics/'],
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'website-speed-small-business',
    title: 'Why Website Speed Matters for Small Businesses: What the Data Says',
    metaTitle: 'Why Website Speed Matters for Small Businesses | The Fast Designs',
    description: 'Slow websites lose customers. Google and Deloitte research, Core Web Vitals and mobile data — plus how affordable web design keeps sites fast.',
    date: '2026-11-04', category: 'Performance', readMins: 8,
    excerpt: 'Half of mobile visitors leave slow pages. Here is what Google, Deloitte and Ofcom data tell us about speed — and a checklist for a faster site.',
    body: `
<p>Most small business owners judge their website by how it looks. Your customers judge it by how quickly it works. A beautiful page that takes five seconds to appear on a phone is, for many visitors, a page they never see. In this article we look at what the research actually says about website speed, how Google measures it and what you can do — whatever your budget — to keep your site fast.</p>

<h2>Your customers are on their phones</h2>
<p>Ofcom’s Online Nation research shows that UK adults now spend around four and a half hours online each day, and that most of that time is spent on a smartphone. Google reflects this: it completed its switch to mobile-first indexing in October 2023, which means it primarily looks at the mobile version of your site when deciding how to rank it.</p>
<p>Mobile connections are often slower and less stable than home broadband, and phones have less processing power than laptops. A site that feels instant on your office computer can feel sluggish on a phone in a car park with patchy 4G — which is exactly where many local customers will find you.</p>

<h2>What the research says about speed</h2>
<h3>Half of mobile visitors will not wait</h3>
<p>Google’s research into mobile page speed found that 53% of mobile site visits are abandoned if a page takes longer than three seconds to load. Related Google benchmark data found that as page load time increases from one second to seven seconds, the probability of a mobile visitor bouncing increases by 113%. These studies date from 2016–2017, but if anything, expectations have only risen since.</p>
<h3>Tenths of a second change behaviour</h3>
<p>In 2020, Google commissioned Deloitte and 55 to study how small speed improvements affect business results. The “Milliseconds Make Millions” study analysed mobile site data from 37 retail, travel, luxury and lead-generation brands across Europe and the US. It found that a 0.1-second improvement in mobile site speed was associated with an 8.4% increase in conversions for retail sites and a 10.1% increase for travel sites. Retail shoppers also spent 9.2% more on average.</p>
<p>Those were large brands, but the underlying behaviour applies to everyone: people are impatient on their phones, and small delays add up to lost enquiries.</p>

<h2>How Google measures speed: Core Web Vitals</h2>
<p>Google uses three Core Web Vitals to measure the real-world experience of a page. To pass, a page needs to meet the “good” threshold for at least 75% of visits:</p>
<div class="table-wrap"><table>
<thead><tr><th>Metric</th><th>What it measures</th><th>Good</th><th>Poor</th></tr></thead>
<tbody>
<tr><td>Largest Contentful Paint (LCP)</td><td>How quickly the main content appears</td><td>2.5 seconds or less</td><td>Over 4 seconds</td></tr>
<tr><td>Interaction to Next Paint (INP)</td><td>How quickly the page responds to taps and clicks</td><td>200 milliseconds or less</td><td>Over 500 milliseconds</td></tr>
<tr><td>Cumulative Layout Shift (CLS)</td><td>How much the layout jumps around while loading</td><td>0.1 or less</td><td>Over 0.25</td></tr>
</tbody></table></div>
<p>You can check your own site for free with Google’s PageSpeed Insights tool. Look at the mobile results first, because that is what most of your visitors experience.</p>

<h2>The most common reasons small business sites are slow</h2>
<ol>
<li><strong>Huge images.</strong> Photos straight from a phone or camera can be several megabytes each. Resized and compressed in a modern format such as WebP, the same image can often be a small fraction of the size with no visible difference.</li>
<li><strong>Heavy themes and page builders.</strong> Multi-purpose templates load code for features you are not using.</li>
<li><strong>Too many plugins and apps.</strong> Every chat widget, slider, pop-up and tracking script adds weight.</li>
<li><strong>Slow hosting.</strong> The cheapest shared hosting can respond slowly before your page even starts to load.</li>
<li><strong>Web fonts and render-blocking files</strong> that make the browser wait before showing anything.</li>
<li><strong>Auto-playing video backgrounds</strong> that look great on a desktop and drain mobile data.</li>
</ol>

<h2>A practical speed checklist</h2>
<p>You do not need a large budget to have a fast website. Most speed comes from making good decisions at the start:</p>
<ul>
<li>Resize images to the size they are displayed at and use WebP where possible.</li>
<li>Lazy-load images further down the page so the top of the page appears first.</li>
<li>Use as few plugins and third-party scripts as you can.</li>
<li>Host fonts efficiently, or use system fonts for body text.</li>
<li>Choose hosting with a content delivery network (CDN) so pages are served from near your visitors.</li>
<li>Reserve space for images so the layout does not jump while they load.</li>
<li>Test on a real phone, not just your desktop.</li>
</ul>

<h2>Does a cheap website have to be a slow one?</h2>
<p>No — and often the opposite is true. Expensive websites are sometimes slow precisely because they are packed with animations, sliders and integrations. A small, focused site with a handful of well-optimised pages can be extremely fast. That is the thinking behind ${link('affordable web design and development')}: build only what you need, and build it well.</p>
<p>When we build small business sites at The Fast Designs, we keep them lean by default — compressed images, minimal scripts and fast hosting — because speed is one of the cheapest ways to win more enquiries. If you are looking for ${link('affordable web development in the UK')} that does not cut corners on performance, our packages start at £100.</p>

<h2>How to measure your own site’s speed</h2>
<p>You do not need technical knowledge to check your website. Open Google’s free PageSpeed Insights tool, paste in your homepage address and run the test. You will see two types of results:</p>
<ul>
<li><strong>Field data</strong> — how real visitors using Chrome experienced your site over the last 28 days. This is what Core Web Vitals are based on, but smaller sites may not have enough visitors for it to appear.</li>
<li><strong>Lab data</strong> — a simulated test on a mid-range phone with a throttled connection. It is useful for spotting problems, even if your site has few visitors.</li>
</ul>
<p>Focus on the mobile tab, look at the Largest Contentful Paint figure first, and read the list of suggestions underneath. Large images, unused code and render-blocking files are the most common issues flagged for small business sites.</p>

<h2>Speed for different types of business</h2>
<p>Speed matters most on the pages people use to make a decision. For a restaurant, that is the menu and booking page; for a tradesperson, the services and contact pages; for a shop, product pages and checkout. Make sure those pages are the lightest on your site — avoid huge galleries or embedded videos on them, and put the most important action, such as a “Book a table” or “Get a quote” button, near the top.</p>
<p>Local businesses have a particular reason to care. People searching for a service nearby are often ready to act immediately — they want a phone number, opening hours or directions. Every second they wait is a second in which they might tap the next result instead.</p>

<h2>Speed and accessibility go hand in hand</h2>
<p>Many of the things that make a site fast also make it easier to use: clear layouts, readable text that does not depend on heavy custom fonts, buttons that respond instantly and pages that do not jump around while loading. Cumulative Layout Shift, one of the Core Web Vitals, exists precisely because content that moves unexpectedly causes people to tap the wrong thing. Building lean pages is good for every visitor, including people using older phones or assistive technology.</p>

<h2>Speed and SEO: how much does it matter?</h2>
<p>Speed is one of many signals Google uses, and it will not outrank relevant, helpful content on its own. But it can be the difference between two similar local businesses — and even when it does not change your ranking, it changes what visitors do once they arrive. A fast site keeps more of the people you have already worked hard to attract.</p>

<h2>Key takeaways</h2>
<ul>
<li>Most of your visitors are on phones, and Google ranks your site based on its mobile version.</li>
<li>Google’s research found more than half of mobile visits are abandoned when a page takes longer than three seconds to load.</li>
<li>Even a 0.1-second improvement was linked to more conversions in the Deloitte study.</li>
<li>Aim for an LCP of 2.5 seconds or less, an INP of 200 milliseconds or less and a CLS of 0.1 or less.</li>
<li>Most speed problems come from oversized images, heavy themes and too many plugins — all of which can be avoided from the start.</li>
<li>A small, focused website is often faster than an expensive, complicated one.</li>
</ul>

<h2>Quick wins you can do today</h2>
<ol>
<li>Run your homepage through PageSpeed Insights and note the mobile score.</li>
<li>Find your three largest images and replace them with compressed versions.</li>
<li>Remove any plugin, widget or app you no longer use.</li>
<li>Check your contact page loads quickly — it is often the most important page you have.</li>
</ol>
<p>If your site still struggles after that, it may be built on a heavy theme that cannot easily be fixed. In that case a small, fast rebuild can be cheaper than you think. As a ${link('low cost web design company')}, we regularly replace slow sites with lean ones for less than many businesses spend on a year of website builder fees.</p>`,
    sources: [
      ['Online Nation 2025 — Ofcom (via ISPreview)', 'https://www.ispreview.co.uk/index.php/2025/12/ofcom-finds-uk-adults-now-spend-over-4-5-hours-online-each-day.html'],
      ['Mobile-first indexing has landed — Google Search Central (Oct 2023)', 'https://developers.google.com/search/blog/2023/10/mobile-first-is-here'],
      ['Mobile site load time statistics — Think with Google', 'https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-site-load-time-statistics/'],
      ['Mobile page speed: new industry benchmarks — Think with Google', 'https://www.thinkwithgoogle.com/intl/en-gb/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/'],
      ['Milliseconds make millions — web.dev case study', 'https://web.dev/case-studies/milliseconds-make-millions'],
      ['Milliseconds Make Millions report — Deloitte', 'https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf'],
      ['Defining the Core Web Vitals thresholds — web.dev', 'https://web.dev/articles/defining-core-web-vitals-thresholds'],
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'does-my-small-business-need-a-website',
    title: 'Does My Small Business Need a Website? The Facts for UK Businesses',
    metaTitle: 'Does My Small Business Need a Website? | The Fast Designs',
    description: 'Around a third of UK businesses still have no website. We look at the data on reviews, trust and search — and how an affordable web design service can help.',
    date: '2026-11-04', category: 'Small business', readMins: 7,
    excerpt: 'Around a third of UK businesses still have no website. Here is what the data says about trust, search and social media — and what a basic site should do.',
    body: `
<p>If you run a small business, you have probably wondered whether a website is really worth it. You might already get work through word of mouth, a Facebook page or a listing on Google Maps. So does a website still matter in 2026? In this article we look at the facts — how many UK businesses are online, how customers find and judge local businesses, and what a website does that social media cannot.</p>

<h2>How many UK businesses have a website?</h2>
<p>The UK has a huge number of small businesses. According to the government’s Business Population Estimates, there were around 5.7 million private sector businesses at the start of 2025 — and 99.85% of them were small or medium-sized. Around 4.27 million had no employees other than the owners.</p>
<p>A significant share of those businesses are still offline. An analysis of the government’s UK Business Data Survey 2024 found that 32% of businesses had no website at all, rising to 35% of sole traders. That is a gap — and an opportunity. If a third of your competitors have no website, having a good one is one of the simplest ways to stand out.</p>

<h2>How customers find local businesses today</h2>
<p>Ofcom’s Online Nation research shows that UK adults spend around four and a half hours online every day, mostly on smartphones. When someone needs a plumber, a dentist or somewhere to eat, they search. The results they see typically include a map with local listings, followed by websites.</p>
<p>A website helps in both places. Your Google Business Profile — which is free — can link to your website, and the information on your site helps Google understand what you do and where you do it.</p>

<h2>Reviews and trust</h2>
<p>Reviews play a huge part in how people choose a local business. BrightLocal’s annual Local Consumer Review Survey consistently finds that the overwhelming majority of consumers read online reviews when researching local businesses, with well over nine in ten reading them at least occasionally.</p>
<p>Reviews get people interested; your website helps them decide. Once someone has read your reviews, they usually want to check your services, your prices, your opening hours and whether you look professional. In a widely cited 2006 study, researchers at Carleton University found that people form a judgement about a web page’s visual appeal in around 50 milliseconds. Stanford University’s Web Credibility Research found that a site’s visual design was the factor people mentioned most often when judging whether it was credible.</p>
<p>A note of caution: since April 2025, the Digital Markets, Competition and Consumers Act has made it unlawful in the UK to publish fake reviews or commission them. Genuine reviews from real customers are worth more than ever — show them proudly, and never invent them.</p>

<h2>Website vs social media: why not just use Facebook?</h2>
<p>Social media is a brilliant way to stay in touch with customers, but it is not a replacement for a website. Here is how the two compare:</p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Social media page</th><th>Your own website</th></tr></thead>
<tbody>
<tr><td>Who controls it</td><td>The platform</td><td>You</td></tr>
<tr><td>Who sees your posts</td><td>Decided by the platform’s algorithm</td><td>Anyone who visits</td></tr>
<tr><td>Found on Google for your services</td><td>Sometimes</td><td>Yes, with good SEO</td></tr>
<tr><td>Design and layout</td><td>Same as everyone else</td><td>Designed for your business</td></tr>
<tr><td>Bookings, quotes and enquiry forms</td><td>Limited</td><td>Built around your needs</td></tr>
<tr><td>If the platform changes its rules</td><td>You have to adapt</td><td>Nothing changes</td></tr>
</tbody></table></div>
<p>The best approach is to use both: social media to reach people and keep them engaged, and a website as the professional home that everything links back to.</p>

<h2>What a small business website should actually do</h2>
<p>A website does not need to be complicated to be effective. For most local businesses, a good site does five things well:</p>
<ol>
<li><strong>Explains what you do</strong> — clearly, in the words your customers would use.</li>
<li><strong>Shows where you work</strong> — your town, the areas you cover and your opening hours.</li>
<li><strong>Builds trust</strong> — genuine reviews, photos of your work, qualifications and guarantees.</li>
<li><strong>Makes contact easy</strong> — a phone number, email or form on every page.</li>
<li><strong>Works perfectly on a phone</strong> — because that is how most people will see it.</li>
</ol>
<p>That is achievable with a single page for a new business, or five pages for a business with several services. You do not need a complex site to start.</p>

<h2>Your website and your Google Business Profile</h2>
<p>A Google Business Profile is the listing that appears in Google Maps and in the local results at the top of many searches. It is free to set up and lets customers see your opening hours, photos, reviews and directions. It works best alongside a website, not instead of one: your profile can link to your site, and the more clearly your website explains your services and the areas you cover, the easier it is for Google to match you with the right searches.</p>
<p>A good set-up is simple. Make sure your business name, address (or service area) and phone number are written exactly the same way on your website and your profile, add your website address to the profile, and include your town or service areas naturally in your page titles and text.</p>

<h2>A simple plan to get online in a week</h2>
<ol>
<li><strong>Day 1:</strong> Write a list of your services, prices (if you share them), opening hours and the areas you cover.</li>
<li><strong>Day 2:</strong> Gather your logo, a few good photos of your work and any genuine reviews customers have left.</li>
<li><strong>Day 3:</strong> Choose your domain name — ideally your business name with .co.uk — and check it is available.</li>
<li><strong>Days 4–6:</strong> Have your site designed and built, or build it yourself if you prefer.</li>
<li><strong>Day 7:</strong> Connect the site to your Google Business Profile, share it on social media and add it to your email signature and invoices.</li>
</ol>
<p>Most of that week is gathering information you already have. The build itself is the quick part when it is done by someone who does it every day.</p>

<h2>What to put on a one-page website</h2>
<p>If you are starting small, a single, well-structured page can do everything a new business needs. From top to bottom, include: a headline that says what you do and where; two or three sentences on why customers choose you; your main services; a few photos of your work; genuine reviews; your opening hours and service area; and a contact form or phone number. That is enough to be found, look professional and win enquiries — and it can grow into a multi-page site later.</p>

<h2>What does it cost?</h2>
<p>Costs range from a monthly website builder subscription to several thousand pounds for a bespoke agency site — we compare the options in detail in our guide to how much a website costs in the UK. The key point is that ${link('affordable website designing')} is now genuinely accessible. With an ${link('affordable web design service')}, a professional one-page site can cost as little as £100, and a five-page site £250.</p>

<h2>Common objections — answered</h2>
<h3>“I get all my work through word of mouth.”</h3>
<p>Great — but people who are recommended to you will still look you up. A website reassures them that you are established and makes it easy to get in touch.</p>
<h3>“I don’t have time to manage a website.”</h3>
<p>A simple site needs very little maintenance. Update it a few times a year with new photos, prices or reviews, or ask your designer to do it for you.</p>
<h3>“I can’t afford it.”</h3>
<p>${link('Cheap web design in the UK')} now starts from a few hundred pounds or less. For many businesses, one or two extra jobs a year cover the cost entirely.</p>

<h3>“I’ll do it when the business is bigger.”</h3>
<p>The opposite usually works better. A simple website helps a young business look established, win its first customers and build the search history that makes it easier to be found later on.</p>

<h2>Key takeaways</h2>
<ul>
<li>There are around 5.7 million private sector businesses in the UK, and roughly a third of businesses still have no website.</li>
<li>Most people read reviews before choosing a local business, then check its website before getting in touch.</li>
<li>First impressions of a website form in a fraction of a second, so a clean, professional design matters.</li>
<li>Social media is great for reach, but a website is the home you own and control.</li>
<li>Your website and free Google Business Profile work best together.</li>
<li>A simple one-page or five-page site is enough for most small businesses to start.</li>
</ul>

<h2>The bottom line</h2>
<p>You can run a business without a website, and many people do. But with around a third of UK businesses still offline, customers checking reviews and websites before they get in touch, and first impressions formed in a fraction of a second, a simple, well-designed website remains one of the best-value investments a small business can make. If you are ready to get online without stretching your budget, see our ${link('low cost web design UK')} packages.</p>`,
    sources: [
      ['Business population estimates for the UK and regions 2025 — GOV.UK', 'https://www.gov.uk/government/statistics/business-population-estimates-2025/business-population-estimates-for-the-uk-and-regions-2025-statistical-release'],
      ['A third of UK businesses remain offline — Workplace Journal (analysis of the UK Business Data Survey 2024)', 'https://workplacejournal.co.uk/2025/09/a-third-of-uk-businesses-remain-offline-despite-digital-growth/'],
      ['Online Nation 2025 — Ofcom (via ISPreview)', 'https://www.ispreview.co.uk/index.php/2025/12/ofcom-finds-uk-adults-now-spend-over-4-5-hours-online-each-day.html'],
      ['Local Consumer Review Survey — BrightLocal', 'https://www.brightlocal.com/research/local-consumer-review-survey-2024/'],
      ['Web users judge sites in the blink of an eye — Nature (2006)', 'https://www.nature.com/news/2006/060109/full/news060109-13.html'],
      ['How Do People Evaluate a Web Site’s Credibility? — Stanford Persuasive Technology Lab (2002)', 'https://credibility.stanford.edu/'],
      ['Digital Markets, Competition and Consumers Act 2024 — legislation.gov.uk', 'https://www.legislation.gov.uk/ukpga/2024/13/contents'],
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'how-to-choose-a-low-cost-web-design-company',
    title: 'How to Choose a Low Cost Web Design Company: A 12-Point Checklist',
    metaTitle: 'How to Choose a Low Cost Web Design Company | The Fast Designs',
    description: 'Hiring cheap website designers in the UK? Use this 12-point checklist covering ownership, pricing, SEO, accessibility, cookies and red flags before you pay.',
    date: '2026-11-04', category: 'Guides', readMins: 8,
    excerpt: 'Low prices are great — surprises are not. Use these 12 checks on ownership, pricing, SEO, accessibility and contracts before you hire anyone.',
    body: `
<p>There are plenty of ${link('cheap website designers UK')} small businesses can hire, and many of them do excellent work. But low prices can also hide problems: websites you do not actually own, hosting fees that creep up every year, or sites that look fine on a laptop and fall apart on a phone. This 12-point checklist will help you choose a low cost web design company with confidence — and avoid the most common traps.</p>

<h2>Before you start: decide what you need</h2>
<p>Write a short list before you contact anyone: how many pages you need, what you want visitors to do (call, email, book or buy), which areas you serve and whether you will supply your own text and photos. A clear brief makes quotes easier to compare and helps you spot when someone is selling you things you do not need.</p>

<h2>The 12-point checklist</h2>

<h3>1. Is the price fixed and itemised?</h3>
<p>A good quote tells you exactly what you get: the number of pages, the features, the number of revision rounds and what happens after launch. Be cautious of vague day-rate estimates for small projects. Our own ${link('cheap web design packages')} are fixed at £100, £250 and £500 so you know the full cost before anything starts.</p>

<h3>2. Will you own the domain name?</h3>
<p>Your domain (for example, yourbusiness.co.uk) is the most valuable part of your web presence. It should be registered in your name or your company’s name, with the login details shared with you. If a designer registers it in their own name, you may struggle to move it later.</p>

<h3>3. Will you own the website itself?</h3>
<p>Ask directly: “If I want to move my website to another host or designer in the future, can I?” Some low-cost providers rent you a website on their own platform, so you lose it if you stop paying. That can be fine if it is clear and fairly priced — but it should be your choice, not a surprise.</p>

<h3>4. What are the ongoing costs?</h3>
<p>Ask for every recurring cost in writing: domain renewal, hosting, email, SSL certificates, maintenance and support. Compare the three-year total, not just the first-year price. A cheap build with an expensive hosting contract can cost more than a slightly pricier build with low running costs.</p>

<h3>5. Is the design mobile-first?</h3>
<p>Google completed its move to mobile-first indexing in October 2023, primarily using the mobile version of your site for indexing and ranking — and most of your visitors will be on a phone. Ask to see examples on your own phone, not just on a big screen.</p>

<h3>6. How fast are their websites?</h3>
<p>Google’s research found that 53% of mobile site visits are abandoned if a page takes longer than three seconds to load. Run a couple of the designer’s portfolio sites through Google’s free PageSpeed Insights tool. Fast sites are a good sign that the designer cares about details.</p>

<h3>7. Is basic SEO included?</h3>
<p>At a minimum, every page should have a unique title and meta description, proper headings, image alt text and a sitemap, and the site should be connected to Google Search Console. These are quick for a professional and make a real difference to whether people can find you.</p>

<h3>8. Is the site secure?</h3>
<p>Every modern website should use HTTPS. Browsers label non-HTTPS pages as “Not secure”, and Google has used HTTPS as a ranking signal since 2014. Many hosts include a free SSL certificate, so this should never be an expensive extra.</p>

<h3>9. Do they consider accessibility?</h3>
<p>The Web Content Accessibility Guidelines (WCAG) 2.2, published by the W3C in October 2023, set out how to make websites usable by people with disabilities — for example, readable colour contrast, keyboard navigation and descriptive alt text. Accessible websites are better for everyone, and the Equality Act 2010 requires service providers not to discriminate against disabled people. Ask how the designer approaches it.</p>

<h3>10. Are cookies and privacy handled properly?</h3>
<p>If your site uses analytics or marketing cookies, UK rules under the Privacy and Electronic Communications Regulations (PECR) generally require you to get visitors’ consent first, as explained in guidance from the Information Commissioner’s Office. Your site should also have a privacy notice explaining what happens to the information people send you through forms.</p>

<h3>11. Are their reviews and portfolio genuine?</h3>
<p>Look for real examples you can visit, and reviews you can verify on independent platforms. Since April 2025, the Digital Markets, Competition and Consumers Act has made it unlawful in the UK to publish fake consumer reviews. If a portfolio includes concept or practice work, a trustworthy designer will label it clearly — as we do in our own portfolio.</p>

<h3>12. What happens after launch?</h3>
<p>Ask how changes are handled and what they cost, how quickly the designer replies, and whether you will be able to edit the site yourself. Clear answers here are often the best indicator of how the whole relationship will go.</p>

<h2>How to compare quotes fairly</h2>
<p>Once you have two or three quotes, put them side by side in a simple table. List the number of pages, the features, the number of revision rounds, who owns the domain, what is included in SEO set-up, the launch timeline and every ongoing cost. Then add up the three-year total for each. Quotes that looked very different often turn out to be similar once everything is included — and occasionally the cheapest headline price turns out to be the most expensive overall.</p>
<p>Pay attention to how each designer communicates, too. Did they reply promptly? Did they explain things in plain English? Did they ask about your business and your customers, or simply send a price? The way someone handles the quote is usually a good preview of how they will handle the project.</p>

<h2>Understanding what “cheap” can safely leave out</h2>
<p>A low price does not have to mean low quality — it usually means a tighter scope. It is perfectly reasonable for an affordable package to leave out things like bespoke illustrations, professional photography, complex animations, large online shops or custom software integrations. What it should not leave out are the fundamentals: mobile-friendly design, security, basic SEO, a clear contact route and your ownership of the domain. Knowing the difference helps you choose the right package rather than simply the cheapest one.</p>

<h2>What a good handover looks like</h2>
<p>When your site goes live, you should receive the login details for your domain and hosting (or written confirmation of who manages them), access to Google Search Console and analytics if they were set up, and a short guide or video on how to make simple changes. Keep these details somewhere safe. A designer who hands everything over clearly is one you can trust to work with again.</p>

<h2>Red flags to watch out for</h2>
<ul>
<li>Long, hard-to-cancel contracts for a simple website.</li>
<li>A refusal to put the domain in your name.</li>
<li>Prices that only appear after a long sales call.</li>
<li>Guaranteed “page one of Google” promises — nobody can guarantee rankings.</li>
<li>Portfolios with no live examples or unverifiable testimonials.</li>
<li>No mention of mobile design, speed or SEO basics.</li>
</ul>

<h2>Questions to ask before you pay</h2>
<div class="table-wrap"><table>
<thead><tr><th>Question</th><th>A good answer</th></tr></thead>
<tbody>
<tr><td>Who owns the domain and website?</td><td>“You do.”</td></tr>
<tr><td>What will I pay over three years?</td><td>A clear written total</td></tr>
<tr><td>How many rounds of changes are included?</td><td>A specific number</td></tr>
<tr><td>Is SEO set up for every page?</td><td>“Yes — titles, descriptions and a sitemap.”</td></tr>
<tr><td>How fast will my site be on mobile?</td><td>They mention testing it</td></tr>
<tr><td>What happens if I want to leave?</td><td>“We will help you move it.”</td></tr>
</tbody></table></div>

<h2>How long should a small website take?</h2>
<p>For a one-page or five-page site where you supply the content, a realistic timeline is usually one to two weeks from receiving everything to launch. Larger sites with ten or more pages, booking systems or shops take longer. Be wary of both extremes: a promise of “live in an hour” often means an unchanged template, while a small brochure site that drags on for months usually signals poor project management.</p>

<h2>Key takeaways</h2>
<ul>
<li>Ask for a fixed, itemised price and a written three-year total.</li>
<li>Make sure the domain name — and ideally the website — belongs to you.</li>
<li>Check the designer’s live examples on your own phone and in PageSpeed Insights.</li>
<li>Confirm that SEO basics, HTTPS, accessibility and cookie consent are handled.</li>
<li>Look for genuine, verifiable reviews and clearly labelled concept work.</li>
<li>Agree how changes and support work after launch before you sign anything.</li>
</ul>

<h2>Choosing with confidence</h2>
<p>A low price should be a pleasant bonus, not a warning sign. The right designer will be open about what is included, put ownership in your hands and build a site that works on the devices your customers actually use. If you are comparing ${link('affordable web design services UK')} businesses can trust, we are happy to answer every question on this list before you commit. Have a look at what is included in our ${link('low cost web design company')} packages and get a quick quote.</p>`,
    sources: [
      ['Mobile-first indexing has landed — Google Search Central (Oct 2023)', 'https://developers.google.com/search/blog/2023/10/mobile-first-is-here'],
      ['Mobile site load time statistics — Think with Google', 'https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-site-load-time-statistics/'],
      ['HTTPS as a ranking signal — Google Search Central (2014)', 'https://developers.google.com/search/blog/2014/08/https-as-ranking-signal'],
      ['Web Content Accessibility Guidelines (WCAG) 2.2 — W3C', 'https://www.w3.org/TR/WCAG22/'],
      ['Equality Act 2010 — legislation.gov.uk', 'https://www.legislation.gov.uk/ukpga/2010/15/contents'],
      ['Guide to PECR: cookies and similar technologies — ICO', 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/'],
      ['Digital Markets, Competition and Consumers Act 2024 — legislation.gov.uk', 'https://www.legislation.gov.uk/ukpga/2024/13/contents'],
    ],
  },
];
