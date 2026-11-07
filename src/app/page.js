import Link from "next/link";
import Image from "next/image";
import StarfieldCanvas from "@/components/StarfieldCanvas";
import StatCounter from "@/components/StatCounter";
import HeroImageSlider from "@/components/HeroImageSlider";
import FounderGallery from "@/components/FounderGallery";


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
          <div>
            <div className="hero__eyebrow">Chamak Padhai Se</div>
            <h1 className="hero__title--fit">
              Every Child Deserves to Shine.
            </h1>
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
