import { useCallback, useEffect, useRef, useState } from "react";
import heroClouds from "./assets/hero-dusk.webp";
import heroMarquee from "./assets/hero-marquee.webp";
import heroCelebration from "./assets/hero-celebration.webp";

const PHONE_DISPLAY = "020 000 0000"; // [PLACEHOLDER]
const PHONE_HREF = "tel:+442000000000"; // [PLACEHOLDER]

const SLIDE_MS = 7000;

type Slide = {
  label: string;
  eyebrow: string;
  lead: string;
  accent: string;
  sub: string;
  src: string;
  alt: string;
  position?: string;
};

const SLIDES: Slide[] = [
  {
    label: "Plan",
    eyebrow: "Event planning in High Barnet, London",
    lead: "Your whole event,",
    accent: "run by one person.",
    sub: "Weddings, birthdays and private parties across High Barnet, EN4 and EN5. One planner, one written plan, one price.",
    src: heroClouds,
    alt: "Cloud inversion over a valley at blue hour, seen from a high ridge above North London",
    position: "60% 42%",
  },
  {
    label: "Weddings",
    eyebrow: "Weddings & receptions · EN4 & EN5",
    lead: "The day runs itself.",
    accent: "You just live it.",
    sub: "From the first venue call to the last chair stacked, one planner books the suppliers, writes the timings and runs the day.",
    src: heroMarquee,
    alt: "A marquee glowing from within on an English garden lawn at blue hour, festoon lights leading to the entrance",
    position: "50% 55%",
  },
  {
    label: "Parties",
    eyebrow: "Private parties · High Barnet & beyond",
    lead: "One date.",
    accent: "Nobody chasing anyone.",
    sub: "Birthdays, anniversaries, christenings and wakes, planned around one written price and a wet-weather plan agreed first.",
    src: heroCelebration,
    alt: "Guests dancing beneath festoon lights at a garden party, gold confetti suspended in the warm night air",
    position: "50% 45%",
  },
];

const Arrow = ({ dir }: { dir: "prev" | "next" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    {dir === "prev" ? <path d="M15 4 7 12l8 8" /> : <path d="M9 4l8 8-8 8" />}
  </svg>
);

const PauseIcon = ({ playing }: { playing: boolean }) =>
  playing ? (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="7" y="5" width="3.5" height="14" />
      <rect x="13.5" y="5" width="3.5" height="14" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5l11 7-11 7z" />
    </svg>
  );

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [inView, setInView] = useState(true);

  const sectionRef = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);

  /* motion preference */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  /* don't burn cycles (or advance slides unseen) when the hero is off-screen */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.12,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const sync = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  const restart = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
    setCycle((c) => c + 1);
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
      setCycle((c) => c + 1);
    },
    []
  );

  const autoplayOn = !paused && !reduced && pageVisible && inView;

  useEffect(() => {
    if (!autoplayOn) return;
    const t = window.setTimeout(() => step(1), SLIDE_MS);
    return () => window.clearTimeout(t);
  }, [index, cycle, autoplayOn, step]);

  const slide = SLIDES[index];
  const count = String(index + 1).padStart(2, "0");
  const total = String(SLIDES.length).padStart(2, "0");

  return (
    <section
      className="hero on-dark"
      id="top"
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Above the Clouds Events"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          step(-1);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          step(1);
        }
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
        if (Math.abs(dx) > 45) step(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      {/* slides */}
      <div className="hero__media">
        {SLIDES.map((s, i) => (
          <div
            key={s.label}
            className={`hero__slide${i === index ? " is-active" : ""}`}
            aria-hidden={i !== index}
          >
            <img
              src={s.src}
              alt={s.alt}
              style={{ objectPosition: s.position }}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
            />
          </div>
        ))}
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner">
        {/* keyed by slide so the copy re-runs its entrance animation */}
        <div className="hero__content" key={index}>
          <p className="eyebrow hero__eyebrow">
            <span className="hero__dot" aria-hidden="true" />
            {slide.eyebrow}
          </p>
          <h1>
            {slide.lead} <em className="v">{slide.accent}</em>
          </h1>
          <p className="hero__sub">{slide.sub}</p>
        </div>

        <div className="hero__actions">
          <a className="btn btn--primary" href={PHONE_HREF}>
            Call {PHONE_DISPLAY}
          </a>
          <a className="btn btn--ghost" href="#quote">
            Ask for a written quote
          </a>
        </div>

        <p className="hero__price">
          <span className="hero__price-k">Coordination from</span>
          <span className="price-mini" aria-hidden="true">
            £ —
          </span>
          <span className="sr-only">Price to be confirmed</span>
          <span className="tag">Placeholder</span>
          <span className="hero__price-note">replace with the owner-approved starting price</span>
        </p>

        <div className="hero__bar">
          <p className="hero__trust">
            <span className="tag">Placeholder</span>
            <span>
              Google rating and review count to be inserted here exactly as shown on the Google
              Business Profile — e.g. “4.9 stars from 47 Google reviews”.
            </span>
          </p>

          <div className="hero__nav">
            <div className="hero__ticks">
              {SLIDES.map((s, i) => {
                const active = i === index;
                return (
                  <button
                    key={s.label}
                    type="button"
                    className={`hero__tick${active ? " is-active" : ""}`}
                    onClick={() => restart(i)}
                    aria-label={`Show slide ${i + 1}: ${s.label}`}
                    aria-current={active ? "true" : undefined}
                  >
                    <span className="hero__tick-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="hero__tick-label">{s.label}</span>
                    {active && !reduced && (
                      <span
                        key={`${index}-${cycle}`}
                        className={`hero__tick-fill${autoplayOn ? "" : " is-paused"}`}
                        style={{ animationDuration: `${SLIDE_MS}ms` }}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="hero__controls">
              <button
                type="button"
                className="hero__btn"
                onClick={() => step(-1)}
                aria-label="Previous slide"
              >
                <Arrow dir="prev" />
              </button>
              <p className="hero__count" aria-hidden="true">
                <b>{count}</b> / {total}
              </p>
              <button
                type="button"
                className="hero__btn"
                onClick={() => step(1)}
                aria-label="Next slide"
              >
                <Arrow dir="next" />
              </button>
              <button
                type="button"
                className="hero__btn hero__btn--pause"
                onClick={() => {
                  const next = !paused;
                  setPaused(next);
                  if (!next) setCycle((c) => c + 1);
                }}
                aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                aria-pressed={paused}
                disabled={reduced}
              >
                <PauseIcon playing={!paused} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {index + 1} of {SLIDES.length}: {slide.label} — {slide.lead} {slide.accent}
      </p>
    </section>
  );
}
