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
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              <span>Registered Non-Profit Organisation · Regd. No. 643/2023</span>
            </div>

            <h1 className="hero__brand-title">
              Chamak Padhai Se
            </h1>

            <p className="hero__lead-quote">
              Every Child Deserves to Shine.
            </p>

            <p className="hero__desc">
              Chamak Foundation is dedicated to empowering underprivileged students across Telangana through scholarships, career guidance, community libraries, and life-skills mentorship.
            </p>

            <div className="hero__ctas">
              <Link href="/get-involved#donate" className="btn btn-gold">
                Support a Student <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn btn-outline-light">
                Our Founder Story
              </Link>
              <Link href="/testimonials" className="btn btn-outline-light">
                Words of Appreciation
              </Link>
            </div>

            <div className="hero__highlights">
              <div className="hero__highlight-item">
                <strong>20,000+</strong>
                <span>Students Mentored</span>
              </div>
              <div className="hero__highlight-divider" />
              <div className="hero__highlight-item">
                <strong>2</strong>
                <span>Rural Libraries</span>
              </div>
              <div className="hero__highlight-divider" />
              <div className="hero__highlight-item">
                <strong>President&apos;s</strong>
                <span>NSS Awardee Founder</span>
              </div>
            </div>
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

      {/* The Person Behind the Chamak - Founder Honors */}
      <section className="section founder-section">
        <div className="container">
          <div className="section-head section-head--center section-head--fit" style={{ marginBottom: "36px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Meet Our Founder
            </div>
            <h2 className="hdg-oneline">The Person Behind the Chamak</h2>
          </div>

          <FounderGallery />
        </div>
      </section>


      {/* Inspirational Quote inside an Elegant Box */}
      <section className="section section--navy quote-section">
        <div className="container">
          <div className="quote-box">
            <span className="quote-box__mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="quote-box__text">
              Education is the most powerful weapon which you can use to change the world.
            </blockquote>
            <cite className="quote-box__author">&mdash; Nelson Mandela</cite>
          </div>
        </div>
      </section>
    </>
  );
}
