import { useEffect, useRef, useState } from "react";
import "./styles/landing.css";
import HeroCarousel from "./HeroCarousel";
import banquetImg from "./assets/banquet.webp";
import toastImg from "./assets/toast.webp";
import placeImg from "./assets/place-setting.webp";
import flatlayImg from "./assets/flatlay.webp";

/**
 * ABOVE THE CLOUDS EVENTS — High Barnet, London
 * Single landing page. All content rules:
 *  [VERIFIED]  = sourced during research (source in DELIVERABLES.md)
 *  [PLACEHOLDER] = owner must supply before launch
 *  [CONFIRM]   = owner must approve the promise before launch
 */

const PHONE_DISPLAY = "020 000 0000"; // [PLACEHOLDER] replace with GBP-listed number
const PHONE_HREF = "tel:+442000000000"; // [PLACEHOLDER]

const FAQS = [
  {
    q: "How far ahead should we book?",
    a: "Saturdays in spring and summer go first. Six to twelve months is comfortable for a wedding. Four to eight weeks is often enough for a birthday or a smaller party. [CONFIRM with owner]",
  },
  {
    q: "Do you work with a venue we have already booked?",
    a: "Yes. We can take over from the venue's coordinator, or work alongside them and handle everything else.",
  },
  {
    q: "Do you take commission from suppliers?",
    a: "No. You pay us, so our advice answers to you. If a supplier suits your budget better, we say so. [CONFIRM with owner — must be true before launch]",
  },
  {
    q: "What happens if it rains?",
    a: "Every outdoor plan we write comes with a wet-weather backup: the indoor space, the new timings, and who tells the guests. Decided before the day, not on it.",
  },
  {
    q: "What does it cost?",
    a: "It depends on the guest numbers, the venue and how much you want us to take on. You get one written quote before anything is booked. Current packages start from £[PLACEHOLDER] — replace with the owner-approved figure.",
  },
  {
    q: "How do we know you will turn up on the day?",
    a: "You get your planner's mobile number, a written run of show, and a company that does not book two events on the same day. [CONFIRM with owner]",
  },
];

const SERVICES = [
  {
    n: "01",
    t: "Weddings & receptions",
    d: "Ceremony to last dance: venue, suppliers, timings and a run of show everyone follows.",
  },
  {
    n: "02",
    t: "Birthdays & anniversaries",
    d: "60ths, 40ths, 21sts and family milestones, at home, in a hall or in a garden.",
  },
  {
    n: "03",
    t: "Christenings, naming days & wakes",
    d: "Small gatherings planned with care, clear timings and no fuss on the day.",
  },
  {
    n: "04",
    t: "Corporate & community days",
    d: "Team days, awards nights, fundraisers and local group events across Barnet.",
  },
];

const PACKAGES = [
  {
    n: "A",
    name: "The Written Plan",
    for: "You book the suppliers. We write the plan.",
    price: "PLACEHOLDER",
    unit: "one-off fee",
    includes: [
      "Venue and supplier shortlist",
      "Written run of show",
      "Budget sheet you can edit",
      "Wet-weather backup",
    ],
  },
  {
    n: "B",
    name: "The Day Of",
    for: "You plan the event. We run the day.",
    price: "PLACEHOLDER",
    unit: "per event day",
    includes: [
      "Supplier confirmations",
      "Set-up and styling checks",
      "On-site from set-up to lock-up",
      "Guest and timing management",
    ],
  },
  {
    n: "C",
    name: "The Whole Thing",
    for: "We plan and run it with you, start to finish.",
    price: "PLACEHOLDER",
    unit: "from, per event",
    includes: [
      "Everything in A and B",
      "Venue sourcing and booking",
      "Supplier booking and payments",
      "One named planner throughout",
    ],
  },
];

const PH_LEGEND = [
  { tag: "PLACEHOLDER", meaning: "Owner must supply the real detail before launch." },
  { tag: "CONFIRM", meaning: "Owner must approve this promise before it is published." },
  { tag: "DECORATIVE IMAGE", meaning: "Generated stand-in. Replace with a real event photo." },
];

export default function LandingPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const nodes = rootRef.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!nodes?.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventPlanner",
    name: "Above the Clouds Events",
    areaServed: { "@type": "City", name: "High Barnet, London" },
    description:
      "Event planning, supplier booking and on-the-day coordination for weddings, birthdays and private parties in High Barnet, London.",
    // address, telephone, openingHours, priceRange and aggregateRating are
    // deliberately OMITTED: they could not be verified against the Google
    // Business Profile. Add them only once they match the profile exactly.
  };

  useEffect(() => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify(jsonLd);
    document.head.appendChild(el);
    return () => {
      document.head.removeChild(el);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={rootRef}>
      {/* Placeholder legend — DELETE THIS BLOCK AND THE DRAFT BANNER before launch */}
      <div className="phbar" role="note" aria-label="Placeholder legend">
        <div className="phbar__inner">
          <p className="phbar__title">
            Draft page — not for publication
          </p>
          <ul className="phbar__legend">
            {PH_LEGEND.map((l) => (
              <li key={l.tag}>
                <span className="tag">{l.tag}</span>
                <span>{l.meaning}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------------- header ---------------- */}
      <header className="masthead">
        <div className="shell masthead__inner">
          <a className="wordmark" href="#top">
            Above the Clouds
            <small>Events · High Barnet, London</small>
          </a>
          <nav className="masthead__nav" aria-label="Page sections">
            <a href="#pricing">
              Prices <span className="tag">Placeholder</span>
            </a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="masthead__call" href={PHONE_HREF}>
            Call us <span className="num">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </header>

      {/* ---------------- hero carousel ---------------- */}
      <HeroCarousel />

      {/* run-of-show strip */}
      <div className="cuestrip on-dark">
        <ol>
          <li>
            <b>Cue 01</b> A 20-minute call
          </li>
          <li>
            <b>Cue 02</b> Written plan, fixed price
          </li>
          <li>
            <b>Cue 03</b> We set up and run the day
          </li>
          <li>
            <b>Cue 04</b> We pack down and lock up
          </li>
        </ol>
      </div>

      {/* ---------------- pain -> solution ---------------- */}
      <section className="cue" id="why">
        <div className="shell cue__grid">
          <p className="cue__rail">
            <span>Cue 01</span>
            <span>Pain → fix</span>
          </p>
          <div className="reveal">
            <p className="eyebrow">Where events go wrong</p>
            <h2>
              Most events slip in the <em className="v">same three places.</em>
            </h2>
            <p className="lede">
              We plan around them before the day, not on it.
            </p>
            <div className="pains">
              <article className="pain">
                <p className="pain__problem">“The quote kept changing.”</p>
                <p className="pain__answer">
                  <strong>One written price</strong>
                  You get a single price in writing before you book anything. It changes only if
                  you change the plan.
                </p>
              </article>
              <article className="pain">
                <p className="pain__problem">“We were chasing five different suppliers.”</p>
                <p className="pain__answer">
                  <strong>One planner, start to finish</strong>
                  One contact books the venue, the caterer, the music and the timings — and is
                  standing there on the day.
                </p>
              </article>
              <article className="pain">
                <p className="pain__problem">“Nobody replied to our enquiry.”</p>
                <p className="pain__answer">
                  <strong>A reply within one working day</strong>
                  Every enquiry gets an answer within one working day. If we cannot take your
                  date, we tell you straight away. [CONFIRM]
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- services ---------------- */}
      <section className="cue" id="services">
        <div className="shell cue__grid">
          <p className="cue__rail">
            <span>Cue 02</span>
            <span>What we do</span>
          </p>
          <div className="reveal">
            <p className="eyebrow">Services</p>
            <h2>What we take off your list.</h2>
            <p className="lede">
              Booked, timed and written down, so nobody has to remember anything on the day.
            </p>
            <div className="services">
              {SERVICES.map((s) => (
                <article className="service" key={s.n}>
                  <span className="service__no">{s.n}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  <p className="service__price">
                    from <span className="price-mini">£ —</span>
                    <span className="tag">Placeholder</span>
                  </p>
                </article>
              ))}
            </div>
            <p className="proof__slot" style={{ marginTop: "1.5rem" }}>
              <strong>Prices:</strong> no verified price exists for this business, so every figure
              on this page is a marked placeholder. Do not publish a number until the owner
              confirms it in writing.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- pricing / investment ---------------- */}
      <section className="cue" id="pricing">
        <div className="shell cue__grid">
          <p className="cue__rail">
            <span>Cue 03</span>
            <span>Investment</span>
          </p>
          <div className="reveal">
            <p className="eyebrow">Packages & prices</p>
            <h2>
              One plan. One price. <em className="v">Written down.</em>
            </h2>
            <p className="lede">
              Three ways to work together. Every figure below is a placeholder until the owner
              sets the real price — the structure is here so the page can be finished in minutes.
            </p>

            <div className="pricing">
              {PACKAGES.map((pk) => (
                <article className="pkg" key={pk.n}>
                  <div className="pkg__head">
                    <span className="pkg__no">Package {pk.n}</span>
                    <span className="tag">Placeholder price</span>
                  </div>
                  <h3>{pk.name}</h3>
                  <p className="pkg__for">{pk.for}</p>
                  <p className="pkg__price">
                    <span className="pkg__from">from</span>
                    <span className="price">
                      <span className="price__cur" aria-hidden="true">
                        £
                      </span>
                      <span className="price__val" aria-hidden="true">
                        —
                      </span>
                      <span className="sr-only">Price to be confirmed</span>
                    </span>
                    <span className="pkg__unit">{pk.unit}</span>
                  </p>
                  <p className="pkg__ph">
                    Replace “—” with the approved figure, e.g. <b>£[PLACEHOLDER]</b>. Delete this
                    line at launch.
                  </p>
                  <ul className="pkg__list">
                    {pk.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="pkg__cta" href="#quote">
                    Ask about this package
                  </a>
                </article>
              ))}
            </div>

            <div className="price-note">
              <span className="tag">Owner approval required</span>
              <p>
                <strong>No price was found for Above the Clouds Events during research.</strong>{" "}
                The package names, inclusions and figures above are a proposed structure, not the
                owner's published offer. Before launch the owner must either supply real prices and
                inclusions, or this whole section must be switched to “Enquire for a quote”.
              </p>
              <p className="price-note__meta">
                Deposit: £[PLACEHOLDER] · Payment plan: [PLACEHOLDER] · Travel beyond EN4/EN5:
                £[PLACEHOLDER] · VAT: [PLACEHOLDER]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* full-bleed image band */}
      <div className="band">
        <img
          src={banquetImg}
          alt="A long outdoor banquet table set with brass candlesticks and festoon lights at dusk"
          loading="lazy"
        />
        <p className="band__note">
          Venues in and around High Barnet, New Barnet, Cockfosters and Barnet — booked, dressed
          and timed by the same planner.
          <span className="band__ph">Decorative image — replace with a real event photo</span>
        </p>
      </div>

      {/* ---------------- social proof ---------------- */}
      <section className="cue" id="reviews">
        <div className="shell cue__grid">
          <p className="cue__rail">
            <span>Cue 04</span>
            <span>Proof</span>
          </p>
          <div className="reveal">
            <p className="eyebrow">Reviews</p>
            <h2>What clients say.</h2>
            <p className="proof__slot" style={{ marginBottom: "1.5rem" }}>
              <strong>This block is intentionally empty.</strong> Research found no public
              reviews for Above the Clouds Events, so no testimonial has been written. Paste real
              Google reviews here word for word, with the first name and date exactly as Google
              shows them.
            </p>
            <div className="stats">
              {[
                { v: "[XX]", l: "Google reviews" },
                { v: "[4.X]", l: "Google rating" },
                { v: "[XX]", l: "Events run a year" },
                { v: "[XX]", l: "Years in business" },
              ].map((st) => (
                <div className="stat" key={st.l}>
                  <p className="stat__v">{st.v}</p>
                  <p className="stat__l">
                    {st.l} <span className="tag">Placeholder</span>
                  </p>
                </div>
              ))}
            </div>
            <p className="ph-inline">
              [PLACEHOLDER — paste the figures from the Google Business Profile. If there is no
              profile yet, delete this strip rather than publishing empty numbers.]
            </p>

            <div className="proof">
              {[
                { n: "Review slot 1", w: "First name · date · source" },
                { n: "Review slot 2", w: "First name · date · source" },
                { n: "Review slot 3", w: "First name · date · source" },
              ].map((r) => (
                <figure className="review" key={r.n}>
                  <span className="tag">{r.n}</span>
                  <blockquote>
                    “Paste the exact text of a real Google review here — no rewriting, no
                    invented names.”
                  </blockquote>
                  <figcaption>
                    <b>Awaiting real review</b>
                    {r.w}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- why choose us ---------------- */}
      <section className="cue" id="about">
        <div className="shell cue__grid">
          <p className="cue__rail">
            <span>Cue 05</span>
            <span>Why us</span>
          </p>
          <div className="reveal">
            <p className="eyebrow">Why choose us</p>
            <h2>
              Small enough to give you <em className="v">the whole day.</em>
            </h2>
            <div className="why" style={{ marginTop: "2rem" }}>
              <article className="why__item">
                <h3>One event a day</h3>
                <p>We do not double-book. When your date is confirmed, that day is yours alone.</p>
              </article>
              <article className="why__item">
                <h3>Local to High Barnet</h3>
                <p>
                  Halls, churches, gardens, hotels and pubs in EN4 and EN5 — and the parking,
                  loading and curfew rules that come with them.
                </p>
              </article>
              <article className="why__item">
                <h3>A written plan, not a promise</h3>
                <p>
                  Timings, suppliers, who does what and when — sent to you in writing before the
                  day, and printed for the people running it.
                </p>
              </article>
              <article className="why__item">
                <h3>Set up and pack down included</h3>
                <p>
                  We arrive early, dress the room, keep the timings and clear everything away at
                  the end. [CONFIRM]
                </p>
              </article>
            </div>

            <div className="planner">
              <div className="planner__frame" aria-hidden="true">
                <span>PORTRAIT</span>
                <span>600 × 750</span>
                <small>Owner photo goes here</small>
              </div>
              <div className="planner__body">
                <p className="eyebrow">Meet your planner</p>
                <h3>[Planner name]</h3>
                <p className="planner__role">
                  Founder &amp; lead planner · High Barnet <span className="tag">Placeholder</span>
                </p>
                <p>
                  [PLACEHOLDER BIO — 40 to 60 words in the owner's own voice: how they started,
                  what kind of events they love, and the one thing they refuse to get wrong.
                  Replace this paragraph before launch.]
                </p>
                <ul className="chips">
                  <li>[Years of experience]</li>
                  <li>[Public liability insurance]</li>
                  <li>[Professional membership]</li>
                  <li>[Languages spoken]</li>
                </ul>
                <p className="ph-inline">
                  [PLACEHOLDER — add a real headshot and these credentials only if the owner can
                  evidence them.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="band">
        <img
          src={toastImg}
          alt="Guests raising champagne coupes in a toast beneath warm festoon lights at dusk"
          loading="lazy"
        />
        <p className="band__note">
          We keep the timings so you can stay in the conversation instead of watching the clock.
          <span className="band__ph">Decorative image — replace with a real event photo</span>
        </p>
      </div>

      {/* ---------------- how it works ---------------- */}
      <section className="cue" id="how">
        <div className="shell cue__grid">
          <p className="cue__rail">
            <span>Cue 06</span>
            <span>How it works</span>
          </p>
          <div className="reveal">
            <p className="eyebrow">Three steps</p>
            <h2>From first call to last dance.</h2>
            <div className="steps" style={{ marginTop: "2.25rem" }}>
              <article className="step">
                <h3>A 20-minute call</h3>
                <p>
                  Tell us the date, the guest numbers and how you want the day to feel. We tell
                  you straight away if the date is free. <span className="ph">[PLACEHOLDER — typical reply time]</span>
                </p>
              </article>
              <article className="step">
                <h3>A plan and a price</h3>
                <p>
                  You get a written plan, a supplier list and one fixed price. Nothing is booked
                  and no money changes hands until you say yes. <span className="ph">[PLACEHOLDER — deposit amount]</span>
                </p>
              </article>
              <article className="step">
                <h3>We run the day</h3>
                <p>
                  We set up, keep the timings, handle the suppliers and lock up. You are a guest
                  at your own event.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <div className="band">
        <img
          src={flatlayImg}
          alt="Overhead view of a planner's table with a hand-drawn floor plan, fabric swatches, ribbon and brass scissors"
          loading="lazy"
        />
        <p className="band__note">
          Every plan is written by hand first: layout, timings, suppliers, wet-weather backup.
          <span className="band__ph">Decorative image — replace with a real event photo</span>
        </p>
      </div>

      {/* ---------------- risk reversal ---------------- */}
      <section className="cue" id="guarantee">
        <div className="shell cue__grid">
          <p className="cue__rail">
            <span>Cue 07</span>
            <span>Promise</span>
          </p>
          <div className="reveal">
            <div className="risk on-dark">
              <p className="eyebrow" style={{ color: "#c89b4a" }}>
                Risk reversal
              </p>
              <h2>Nothing is booked until you approve the plan.</h2>
              <p>
                You see the full plan, the supplier list and the total price in writing. If it is
                not right, you change it. If you do not approve it, you owe nothing.
              </p>
              <div className="proposal">
                <p>
                  <span className="tag">Owner approval required</span> No guarantee could be
                  verified for this business, so none is claimed. Suggested wording to approve or
                  replace: “If we miss a item agreed in the written run of show on the day, we fix
                  it or refund the coordination fee.”
                </p>
                <p style={{ margin: "0.75rem 0 0" }}>
                  Refund cap: <b>£[PLACEHOLDER]</b> · Claim window:{" "}
                  <b>[PLACEHOLDER — e.g. 14 days]</b> · Owner signature:{" "}
                  <b>[PLACEHOLDER]</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="band">
        <img
          src={placeImg}
          alt="Overhead close-up of a place setting with cloud-blue linen, brass cutlery and a blank place card"
          loading="lazy"
        />
        <p className="band__note">
          Linen, lighting, stationery and seating plans sourced to your budget and written into
          the plan.
          <span className="band__ph">Decorative image — replace with a real event photo</span>
        </p>
      </div>

      {/* ---------------- faq ---------------- */}
      <section className="cue" id="faq">
        <div className="shell cue__grid">
          <p className="cue__rail">
            <span>Cue 08</span>
            <span>Questions</span>
          </p>
          <div className="reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Questions we get asked.</h2>
            <div className="faq" style={{ marginTop: "2rem" }}>
              {FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- final cta ---------------- */}
      <section className="cue final" id="quote">
        <div className="shell cue__grid">
          <p className="cue__rail">
            <span>Cue 09</span>
            <span>Book</span>
          </p>
          <div className="final__grid reveal">
            <div>
              <p className="eyebrow">Tell us your date</p>
              <h2>
                Start with a <em className="v">20-minute call.</em>
              </h2>
              <p className="lede">
                No cost, no obligation. We will tell you the same day whether your date is free.
              </p>
              <p className="ph-block">
                <b>PLACEHOLDER PRICE:</b> coordination from <b>£ —</b> per event. Replace with the
                owner-approved starting price, or delete this line.
              </p>
              <a className="btn btn--dark" href={PHONE_HREF} style={{ marginTop: "0.5rem" }}>
                Call {PHONE_DISPLAY}
              </a>

              <ul className="details-list" style={{ marginTop: "2.25rem" }}>
                <li>
                  <b>Business name</b>
                  <span>Above the Clouds Events</span>
                </li>
                <li>
                  <b>Address</b>
                  <span>[PLACEHOLDER — must match the Google Business Profile exactly]</span>
                </li>
                <li>
                  <b>Phone</b>
                  <span>[PLACEHOLDER — {PHONE_DISPLAY}]</span>
                </li>
                <li>
                  <b>Hours</b>
                  <span className="hours">
                    <span>Mon–Fri</span><span>[PLACEHOLDER]</span>
                    <span>Saturday</span><span>[PLACEHOLDER]</span>
                    <span>Sunday</span><span>[PLACEHOLDER]</span>
                  </span>
                </li>
                <li>
                  <b>Usual response time</b>
                  <span>[PLACEHOLDER — e.g. within one working day]</span>
                </li>
                <li>
                  <b>Service area</b>
                  <span>
                    High Barnet, New Barnet, Barnet, Cockfosters, Hadley Wood, Potters Bar
                  </span>
                </li>
              </ul>
            </div>

            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <h3>Request a call back</h3>
              <p className="form__hint">Three fields. We reply within one working day.</p>

              {sent ? (
                <div className="form__done" role="status">
                  Thank you — your details are ready to send.{" "}
                  <strong>
                    [PLACEHOLDER: this form has no backend yet. Connect it to email, a CRM or a
                    booking tool before launch.]
                  </strong>
                </div>
              ) : (
                <>
                  <div className="field">
                    <label htmlFor="name">Your name</label>
                    <input id="name" name="name" type="text" autoComplete="name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="type">What are you planning?</label>
                    <select id="type" name="type" defaultValue="" required>
                      <option value="" disabled>
                        Choose one
                      </option>
                      <option>Wedding or reception</option>
                      <option>Birthday or anniversary</option>
                      <option>Christening, naming day or wake</option>
                      <option>Corporate or community event</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <button className="btn btn--primary btn--block" type="submit">
                    Request a call back
                  </button>
                  <p className="form__fine">
                    We use your number to call you back about your event. Nothing else.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ---------------- footer ---------------- */}
      <footer className="foot on-dark">
        <div className="shell foot__grid">
          <div>
            <h3>Above the Clouds Events</h3>
            <p>
              Event planning and on-the-day coordination in High Barnet, London and the
              surrounding postcodes.
            </p>
            <p>[PLACEHOLDER — registered address and phone, matching the Google profile.]</p>
            <p>
              Company no. [PLACEHOLDER]<br />
              Public liability cover: £[PLACEHOLDER]<br />
              Price list last updated: [PLACEHOLDER]
            </p>
          </div>
          <div>
            <h3>Service area</h3>
            <p>High Barnet · New Barnet · Barnet · Cockfosters · Hadley Wood · Potters Bar</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              <br />
              [PLACEHOLDER — email address]
            </p>
          </div>
        </div>
      </footer>

      {/* ---------------- sticky mobile bar ---------------- */}
      <nav className="stickybar" aria-label="Call or request a quote">
        <a href={PHONE_HREF}>Call now</a>
        <a href="#quote">Get a quote</a>
      </nav>

    </div>
  );
}
