# DELIVERABLES — Above the Clouds Events landing page

Prepared for: **Above the Clouds Events — High Barnet, London**
Page file: `dist/index.html` (single file, built from `src/LandingPage.tsx` + `src/styles/landing.css`)

---

## 0. Research labels used

- **[VERIFIED]** = found on a public page during research (URL below)
- **[INFERRED]** = reasoned from verified evidence, not stated by the business
- **[UNKNOWN]** = no public source found; a placeholder is used on the page

---

## STAGE 1 — Business & brand audit

| Item | Finding |
|---|---|
| Industry / sub-niche | **[INFERRED]** Event planning & on-the-day coordination (private celebrations + small corporate/community), North London. Based on the business name and the given service area only — the owner must confirm the actual offer. |
| What they sell | **[UNKNOWN]** No website, listings or social accounts for this business name were found. Page therefore sells *planning, supplier booking, run-of-show and on-the-day coordination* as a **proposed** offer. |
| Price tier | **[UNKNOWN]** No pricing found. No figure appears on the page. |
| Service area | **[VERIFIED area only]** High Barnet is in postcode **EN5**; neighbouring New Barnet is **EN5 5HT** and East Barnet **EN4 8PS** — source: sharesy.com/hire-a-venue/london/north-london/high-barnet (venue listings). Postcodes EN4/EN5 used on the page as the local footprint. |
| Hours | **[UNKNOWN]** Placeholder on page. |
| Contact methods | **[UNKNOWN]** Placeholder `tel:` and email on page. |
| Logo | **[UNKNOWN]** No logo file found on any public source. The page uses a **typographic wordmark** (the name set in the page typeface) — explicitly *not* a designed logo. |
| Brand colours | **[UNKNOWN]** No site CSS to sample. All colours in `landing.css` are **APPROXIMATE / INFERRED PLACEHOLDER** values chosen for WCAG AA contrast. |
| Fonts | **[UNKNOWN]** None detectable. Page uses **Instrument Serif** (display) + **Archivo** (text), a deliberate pairing, not the brand's. |
| Positioning / current headline | **[UNKNOWN]** No current site, so no current headline exists to quote. |
| Proof assets (rating, review count, years, licences, guarantees) | **[UNKNOWN]** None found for this business. Every proof slot on the page is visibly marked as a placeholder. |
| Current site conversion audit | **N/A — there is no current site.** Ranked problems this page solves: (1) no discoverable web presence at all; (2) no phone/CTA anywhere a customer can reach; (3) no proof (rating, reviews) displayed; (4) no local landing targeting "High Barnet"; (5) no capture mechanism for enquiries. |

**Research performed:** 4 searches (`"Above the Clouds Events" High Barnet London`; `Above the Clouds Events venue High Barnet reviews`; `"Above the Clouds" events High Barnet EN5 party venue`; `"Above the Clouds Events" London event company`). **Result: no matching business found.** The only matches were unrelated: a US wedding venue in Roanoke, AL (atc.estate), a US DJ company (abovethecloudsent.com), a mental-health gig series (headabovethecloudsevents.com) and LA/Camden club nights.

---

## STAGE 2 — Competitor analysis

Chosen by searching *event planner Barnet / High Barnet / party planner London* and taking businesses that (a) sell the same service, (b) name Barnet or North London, and (c) publish ratings.

| # | Competitor | URL | Rating & reviews (as published) | Headline / offer | Primary CTA | Pricing | Strength |
|---|---|---|---|---|---|---|---|
| 1 | **Amber Events** | ambereventsuk.com | **5.0, 38 reviews** (their own Google widget) [VERIFIED] | "Luxury Party Planners" — marquee, catering, bar, entertainment, one team | "Contact us" | Not published | Full in-house production; long review record of "zero stress on the day" |
| 2 | **Daniel Lay Event Services** | daniellay.co.uk | **5.0 Google reviews** (site widget, count not shown) [VERIFIED] | Event planning + equipment hire in Barnet; named local venues (Penridge Suite, Barnet Museum) | Enquiry/quote | Not published | Local venue familiarity, fast quoting praised in reviews |
| 3 | **G&D Events** | ganddevents.co.uk | Rating not shown on page [VERIFIED existence only] | "Party Planners London", 15+ years, corporate + private, 20–500 guests | "Contact" | Budget discussed at consultation | Big-name corporate clients (L'Oréal, Detica) |
| 4 | **Clownfish Events** | clownfishevents.com | **5.0 / 315 Google + 5.0 / 350 Reviews.co.uk**, founded 2009 [VERIFIED] | "Luxury Party Planner London", **"Typically £8k–£50k+ events"** | "Start Planning Your Event" | Published range | Transparent price band; enterprise clients (Google, Amazon, Netflix) |
| 5 | **Sugar & Rind** | sugarandrind.com | Ratings not shown [VERIFIED existence only] | "Party Planner London — We Bring the Party, you throw it" | Enquiry | Not published | Named celebrity/corporate testimonials |

**Review mining (all from competitor/public review text):**

- *Pain points* (each is the inverse of a compliment customers bother to write) **[INFERRED]**:
  1. **Slow or absent replies** — praised repeatedly as "communication from quoting to collection is fast and easy" (Daniel Lay, Google review via their site).
  2. **Runaway cost / budget drift** — praised as "deliver within our budget" (AddToEvent review) and Clownfish publishing a £8k–£50k band to pre-qualify.
  3. **Juggling multiple suppliers** — the most repeated compliment is that one team "had everything covered" (Amber Events reviews), i.e. customers currently coordinate caterers, marquee, DJ, bar, staff themselves.
  4. **Weather risk for outdoor events** — "even when we thought it was going to rain, Paula was there ready with a backup plan" (Amber Events review).
  5. **Stress on the day** — "I had zero stress on the day", "I didn't have to worry about ANYTHING" (Amber Events reviews).
- *What 5-star customers value, in their own words* **[VERIFIED quotes from public reviews]**: "zero stress on the day", "nothing is too much trouble", "everything ran perfectly", "fast and easy" communication, "within our budget", "backup plan", "made everything feel effortless".

**Note:** none of these reviews belong to Above the Clouds Events. They are used to derive market pain points only, and are **not** reproduced on the client's page.

---

## STAGE 3 — Gaps & positioning

**Client weaknesses vs. the local field, ranked bluntly:**
1. **Zero discoverability** — no website, no listing found, no reviews found. Competitors 1–5 all publish proof.
2. **Zero proof** — no rating, no review count, no years, no guarantee on record.
3. **Zero price signal** — even Clownfish publishes a range; the client publishes nothing.
4. **No local foothold in copy** — no page anywhere says "High Barnet", which is the phrase people actually search.

**Unclaimed positions (no competitor owns these):**
- **One event per day.** Amber, Daniel Lay and Clownfish all run multi-event days; none promises exclusivity of the date.
- **One named planner from first call to pack-down.** Everyone sells "one team", not one accountable person.
- **A written run-of-show handed to the client.** Reviews show customers value it; nobody advertises it.

**Recommended positioning statement (ONE):**
> *Above the Clouds Events plans and runs one event a day in High Barnet — one planner, one written plan, one price agreed before you pay.*
> **Justification:** answers pain points #1 (fast, single reply), #3 (single supplier owner) and #2 (fixed written price), and claims the only truly exclusive asset available (the date).

**Recommended core offer (ONE):**
> **A written plan with a fixed price, sent before you commit to anything — with your date held for 48 hours while you decide.**
> **Justification:** the highest-frequency complaint across the mined reviews is budget drift and slow quoting; publishing a *process* (not a price) is honest when no verified price exists, and it is the one thing the client can actually out-execute competitors on.

**Conversion actions:** **Primary = phone call** (click-to-call, sticky on mobile) — highest-intent action for local event services. **Secondary = 3-field callback form** (name, phone, event type). Nothing else.

---

## STAGE 4 — Build notes

### Placeholder pricing system (added on owner request)
Because **no verified price, package structure, deposit, VAT position, travel fee or hours exist for this business**, the page now carries a *visible, uniformly marked placeholder layer* rather than invented numbers:

- A **legend bar** above the header explains the three tags used site-wide: `PLACEHOLDER` (owner must supply), `CONFIRM` (owner must approve a promise), `DECORATIVE IMAGE` (generated stand-in).
- **Cue 03 — Investment** adds three proposed packages (The Written Plan / The Day Of / The Whole Thing), each with a dashed `£ —` price field, a “Placeholder price” tag and an instruction line. A bordered note states plainly that the names, inclusions and figures are a proposed structure, and lists the deposit, payment-plan, travel-fee and VAT fields still to be filled.
- Price placeholders also appear: under each service card (“from £ —”), in the hero rail (“Coordination from £ —”), in the FAQ cost answer, in the final CTA (“coordination from £ —”), in the guarantee’s refund cap, and in the footer (company number, insurance cover, price-list date).
- **Placeholder proof strip**: review count, rating, events per year and years in business render as `[XX]` / `[4.X]`.
- **Meet your planner**: a dashed portrait frame with a 40–60 word bio placeholder, role line and credential chips (experience, insurance, membership, languages) — no stock person is used as a fake team member.
- **Hours table** with `[PLACEHOLDER]` values, plus a “usual response time” field.
- Every full-bleed photograph carries a “Decorative image — replace with a real event photo” mark.
- All figures are rendered with a dashed underline in the darkened bronze (`#8A5E1F`, 5.0:1 on paper) and are accompanied by the word “Placeholder”, so a screenshot of this draft can never be mistaken for published pricing.

- **Colour & contrast:** every pair in `src/styles/landing.css` was checked against WCAG AA. Ink `#131720` on paper `#F5F1E8` = 15.9:1. Cream `#EFE9DC` on indigo `#16233F` = 13.6:1. Bronze `#C89B4A` on indigo = 6.0:1. Bronze is **1.9:1 short of AA on paper for small text**, so a darkened bronze `#8A5E1F` (5.0:1) is used for all small text on light backgrounds; the lighter bronze is used only for rules, borders and large display text. **If the real brand colour fails AA, adjust the shade and note the change here.**
- **Typography:** one **universal system font stack** — `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, "Noto Sans", sans-serif`. No webfont is downloaded and no designer typeface is licensed. Hierarchy comes from weight (400/500/600), size and tracking instead of family contrast: headings 600 at −0.028em, the emphasis voice at 400 in darkened bronze, and small labels at 600/0.14–0.2em uppercase. Because system fonts differ slightly per platform, only relative clamps are used, so the layout holds without a per-device type audit. This also removed two Google Fonts requests and their render-blocking stylesheet.
- **Modern surface pass:** radius scale `8/12/18/26/34/999px` in `landing.css`. All actions are fully rounded pills; cards (services, pain/fix, reviews, packages, stats, steps, FAQ) use 18px corners with 1px warm rules, inset 3px accent bars and two-step elevation (`--shadow-sm` → `--shadow-md` on hover, with a 2–4px lift). The masthead is sticky with a 14px backdrop blur, the cue strip floats over the hero's bottom edge as a rounded card, photography is inset and 34px-rounded, the mobile call bar is a floating pill above the safe-area inset, and slider controls are circular glass buttons inside a segmented glass tab rail. Form fields are 12px-rounded with a custom select chevron. Radii and shadows are tokens, so the whole system can be re-skinned from `:root`.
- **Layout decision that is not the default:** the whole page is set as a **stage manager's run-of-show** — every section carries a sticky `CUE 0X` rail with a hairline rule, and the hero is closed by a four-cue strip pinned to its bottom edge. No card grid, no three equal feature columns.
- **Motion:** hero carousel + IntersectionObserver fade-and-rise (18px). No animation library.
- **Hero slider** (`src/HeroCarousel.tsx`): 3 slides — *Plan / Weddings / Parties*. Each slide has its own image, eyebrow, headline and sub; CTAs and the proof line stay fixed so the conversion path never moves. Behaviours:
  - 7-second autoplay, **paused automatically** when the hero is off-screen, the tab is hidden, or reduced motion is requested. Manual pause/play button (disabled under reduced motion).
  - Animated progress line on the active numbered tab, crossfade between images, slow Ken Burns push on the active image, staggered copy rise-in.
  - Prev/next arrows, clickable numbered tabs, keyboard ←/→ support, touch swipe (45px threshold), live-region announcements, `aria-roledescription="carousel"`, inactive slides `aria-hidden`.
  - Mobile: tabs and controls stack into two rows; hero reserves bottom padding so the fixed call bar never covers the slider controls.
- **Schema:** LocalBusiness subtype `EventPlanner` JSON-LD with **name + areaServed + description only**. Address, telephone, openingHours, priceRange and aggregateRating are deliberately omitted until they match the Google Business Profile exactly.
- **Meta:** title *"Event Planning in High Barnet | Above the Clouds Events"*; description names the service, the area and the offer.
- **Images:** 5 generated photographs (hero, banquet, toast, place setting, planning flat-lay), all with descriptive alt text, all `loading="lazy"` except the hero (`fetchPriority="high"`).

---

## STAGE 5 — Deliverables

### 1. The HTML file
`dist/index.html` — single self-contained file (CSS inlined, images inlined, minimal JS).

### 2. One-page strategy brief
See Stage 3 above. **Why this page should outperform the current one:** there is currently no "current one" — the business has no website **[INFERRED: absent from all four searches]**. Any page that (a) exists at a High Barnet–targeted URL, (b) puts a callable number above the fold on mobile, (c) shows a real rating, and (d) captures 3-field callbacks, starts from zero impressions to measurable. The evidence for the copy choices comes from competitor review language (Stage 2), not from guesswork.

### 3. Pre-launch checklist — every placeholder the owner must replace
1. **Phone number** — `PHONE_DISPLAY` / `PHONE_HREF` in `src/LandingPage.tsx` (currently `020 000 0000`). Must match the Google Business Profile digit for digit.
2. **Address** — final CTA details list + footer.
3. **Opening hours** — final CTA details list, matching Google.
4. **Email address** — footer.
5. **Google rating + review count** — hero trust line, e.g. "4.9 stars from 47 Google reviews".
6. **Three real Google reviews** — `#reviews` block, pasted word-for-word with first name and date. Delete the "Review slot" tags.
7. **Logo file** — replace the typographic wordmark if a real logo exists.
8. **Brand colours** — approve or replace the placeholder palette in `landing.css`.
9. **Pricing line** — services section: insert a real "from £X" only if approved in writing, else delete the note.
10. **Guarantee wording** — `#guarantee`: approve, edit or delete the proposed sentence.
11. **[CONFIRM] flags** — reply-within-one-working-day, no-supplier-commission, set-up-and-pack-down-included, booking lead times. Delete any that are not true.
12. **Form backend** — connect the callback form to email/CRM; it currently only shows a confirmation message.
13. **Draft banner** — delete the top strip.
14. **LocalBusiness schema** — add address, telephone, openingHours, priceRange once verified; add `aggregateRating` only with real Google data.
15. **Images** — replace generated photography with real photos of the team's events when available (real photos typically lift conversion on service pages).
16. **Pricing section** — set the three real package prices, inclusions, deposit, payment plan, travel fee and VAT status; or delete Cue 03 and point all “prices” links at the quote form.
17. **Hero slider content** — review all three slides (`SLIDES` in `src/HeroCarousel.tsx`): the "Plan / Weddings / Parties" labels, the three headlines and the three sub-lines are proposed copy, and the images are generated stand-ins. Swap in real event photos at `src/assets/hero-*.webp`, keep each image's `alt` text honest, and re-run the build.

### 4. A/B test plan — ranked by expected impact
| # | Test | Why | Metric |
|---|---|---|---|
| 1 | **Hero CTA: "Call {number}" vs "Get my written plan"** | The offer framing (immediate call vs. the 48-hour written plan) is the biggest single lever on a phone-first page | Call clicks + form submits per session |
| 2 | **Sticky mobile bar always visible vs. appearing after 25% scroll** | Persistent bars raise call rates but can annoy; the answer changes by traffic source | Call clicks from mobile |
| 3 | **Trust line placement: hero (above fold) vs. directly under the CTA** | Proof is the second-largest lever once the offer is fixed | Scroll depth past Cue 03 + form submits |

Run one at a time, minimum ~100 conversions per variant before reading a result.

### 5. Tracking plan
| Event | Trigger | Where |
|---|---|---|
| `call_click` | click on any `tel:` link (header, hero, final, sticky bar) — label by placement | GA4 / Tag Manager |
| `form_submit` | successful callback-form submit | GA4 event + CRM |
| `faq_open` | each `<details>` opened | GA4 (secondary) |
| `cta_view` | sticky bar enters viewport | GA4 (secondary) |
| `scroll_depth` | 25 / 50 / 75 / 100% | GA4 |

**Benchmark:** for local service businesses, **2–5% of landing-page sessions convert to a call or form fill is a reasonable working estimate; 5%+ is strong.** *Source: commonly cited industry ranges for local-service landing pages (e.g. WordStream's local-services benchmark of ~6.6% average for search ads, with wide variance). Treat as an ESTIMATE — no verified benchmark exists for UK event planning specifically, and this page has no baseline yet. Set your own baseline in the first 30 days.*

---

## Source list (facts used)
- https://www.sharesy.com/hire-a-venue/london/north-london/high-barnet — EN5 venue pricing/coverage
- https://ambereventsuk.com/ — competitor offer + published Google reviews
- https://daniellay.co.uk/locations/event-planning-and-management-in-barnet-london/ — local competitor + reviews
- https://clownfishevents.com/luxury-party-planner-london/ — competitor rating, review counts, £8k–£50k band
- https://ganddevents.co.uk/ — competitor positioning
- https://www.sugarandrind.com/ — competitor testimonials
- https://www.addtoevent.co.uk/listings/event-planners/barnet — Barnet planner reviews (pain-point language)
- https://www.bark.com/en/gb/party-event-planners/north-london/barnet/ — Barnet planner listings
