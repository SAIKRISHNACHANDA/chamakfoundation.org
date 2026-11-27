import Link from "next/link";
import Image from "next/image";
import StarfieldCanvas from "@/components/StarfieldCanvas";
import StatCounter from "@/components/StatCounter";
import HeroImageSlider from "@/components/HeroImageSlider";
import FounderGallery from "@/components/FounderGallery";
import { ArrowRight } from "lucide-react";


export const metadata = {
  title: "Home · Chamak Foundation",
  description:
    "Chamak Foundation — empowering underprivileged children through education, scholarships, mentorship, and opportunities.",
};

const STATS_DATA = [
  { target: 100, suffix: "+", label: "Motivational Lectures" },
  { target: 70, suffix: "+", label: "Career Guidance Sessions" },
  { target: 2, suffix: "", label: "Rural Libraries Established" },
  { target: 20, suffix: "+", label: "Higher-Ed Scholars" },
  { target: 100, suffix: "+", label: "Volunteers" },
  { target: 2, suffix: "+", label: "Years of Impact" },
];


export default function HomePage() {
  return (
    <>
      {/* Cinematic Hero */}
      <section className="hero">
        <StarfieldCanvas />
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__brand-title" style={{ color: "var(--gold-400, #d9af52)" }}>
              Chamak Padhai Se
            </h1>

            <p className="hero__lead-quote">
              Every Child Deserves to Shine.
            </p>


          </div>

          <div className="hero__media">
            <HeroImageSlider />
          </div>
        </div>
      </section>

      {/* Animated Live Metrics Strip */}
      <div className="container">
        <div className="stats">
          {STATS_DATA.map((item, idx) => (
            <StatCounter
              key={idx}
              target={item.target}
              suffix={item.suffix}
              label={item.label}
            />
          ))}
        </div>
      </div>

      {/* The Person Behind the Chamak - Founder Showcase */}
      <section className="section founder-section" id="founder">
        <div className="container">
          <div className="section-head section-head--center section-head--fit" style={{ marginBottom: "36px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Meet Our Founder
            </div>
            <h2 className="hdg-oneline">The Person Behind Chamak Padhai Se</h2>
          </div>

          {/* Founder Profile Card with Round Photo & Bio */}
          <div className="founder-hero-card">
            <div className="founder-hero-card__media">
              <div className="founder-hero-card__img-wrap">
                <Image
                  src="/assets/team/dr-azam-ali-portrait.jpg"
                  alt="Dr. Mohammad Azam Ali — Founder & President, Chamak Foundation"
                  width={280}
                  height={280}
                  className="founder-hero-card__img"
                  priority
                />
              </div>
              <span className="founder-hero-card__badge">
                Founder &amp; President
              </span>
            </div>

            <div className="founder-hero-card__content">
              <h3 className="founder-hero-card__name">Dr. Mohammad Azam Ali</h3>
              <p className="founder-hero-card__degrees">M.A, M.Ed, Ph.D</p>

              <ul
                className="founder-hero-card__bio"
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "var(--gold-600)", fontSize: "1.1rem", lineHeight: 1, marginTop: "1px" }}>•</span>
                  <span>Educator, Social Activist, Motivational Speaker</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "var(--gold-600)", fontSize: "1.1rem", lineHeight: 1, marginTop: "1px" }}>•</span>
                  <span>President of India NSS National awardee 2012-13</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "var(--gold-600)", fontSize: "1.1rem", lineHeight: 1, marginTop: "1px" }}>•</span>
                  <span>National Youth awardee 2017-18 by the Ministry of Youth Affairs and Sports Government of India.</span>
                </li>
              </ul>

              <div className="founder-hero-card__actions">
                <Link href="/founder" className="btn btn-gold btn-sm">
                  Read Full Story &amp; Journey <ArrowRight size={15} style={{ marginLeft: "4px" }} />
                </Link>
                <Link href="/get-involved" className="btn btn-outline-navy btn-sm">
                  Support the Mission
                </Link>
              </div>
            </div>
          </div>

          {/* Presidential & Dignitary Photo Gallery Header */}
          <div style={{ textAlign: "center", margin: "48px auto 28px", maxWidth: "700px" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-600)", display: "block", marginBottom: "6px" }}>
              National Honors &amp; Dignitary Recognition
            </span>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)", color: "var(--navy-900)", margin: 0, fontWeight: 700 }}>
              Recognized at the Highest Levels of the Nation
            </h3>
          </div>

          <FounderGallery />
        </div>
      </section>


      {/* Inspirational Quote inside an Elegant Box */}
      <section className="section section--navy quote-section">
        <div className="container">
          <div className="quote-box">
            <span className="quote-box__mark" aria-hidden="true">&ldquo;</span>
            <blockquote
              className="quote-box__text"
              style={{ fontWeight: 800, fontStyle: "normal", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.01em" }}
            >
              Chamak Padhaai Se
            </blockquote>
            <cite className="quote-box__author">&mdash; Dr Mohammad Azam Ali</cite>
          </div>
        </div>
      </section>
    </>
  );
}
