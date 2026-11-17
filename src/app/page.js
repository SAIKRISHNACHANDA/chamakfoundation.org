import Link from "next/link";
import Image from "next/image";
import StarfieldCanvas from "@/components/StarfieldCanvas";
import StatCounter from "@/components/StatCounter";
import HeroImageSlider from "@/components/HeroImageSlider";
import FounderGallery from "@/components/FounderGallery";
import { ArrowRight, Award, Sparkles, Landmark, GraduationCap } from "lucide-react";


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
            <h1 className="hero__brand-title">
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
            <p style={{ maxWidth: "68ch", margin: "14px auto 0", color: "var(--ink-600)", fontSize: "1.02rem" }}>
              From overcoming childhood adversity and child labour to receiving India&apos;s highest national youth honors from the President of India.
            </p>
          </div>

          {/* Founder Profile Card with Photo, Title & Awards */}
          <div className="founder-hero-card">
            <div className="founder-hero-card__media">
              <div className="founder-hero-card__img-wrap">
                <Image
                  src="/assets/team/dr-azam-ali-portrait.jpg"
                  alt="Dr. Mohammad Azam Ali — Founder & President, Chamak Foundation"
                  width={420}
                  height={480}
                  className="founder-hero-card__img"
                  priority
                />
                <span className="founder-hero-card__badge">
                  Founder &amp; President
                </span>
              </div>
            </div>

            <div className="founder-hero-card__content">
              <div className="founder-hero-card__tag">National Awardee &middot; Academician &middot; Social Reformer</div>
              <h3 className="founder-hero-card__name">Dr. Mohammad Azam Ali</h3>
              <p className="founder-hero-card__degrees">M.A., M.Ed., Ph.D. in English (Kakatiya University)</p>
              <p className="founder-hero-card__role">
                Assistant Professor of English &middot; Head of Department &middot; Chairperson, Board of Studies
              </p>

              <p className="founder-hero-card__bio">
                Born into a poor working-class family in rural Telangana and once forced into child labour, Dr. Mohammad Azam Ali triumphed over extreme hardship through sheer determination and the power of education. He founded <strong>Chamak Foundation (Chamak Padhai Se)</strong> to ensure that every disadvantaged child receives the mentorship, scholarships, and opportunities needed to shine.
              </p>

              {/* Founder Titles & Awards Grid */}
              <div className="founder-hero-awards">
                <div className="founder-hero-award-item">
                  <Award size={18} className="founder-hero-award-icon" />
                  <div>
                    <strong>President of India NSS National Award</strong>
                    <span>Conferred by Late President Shri Pranab Mukherjee at Rashtrapati Bhavan</span>
                  </div>
                </div>

                <div className="founder-hero-award-item">
                  <Sparkles size={18} className="founder-hero-award-icon" />
                  <div>
                    <strong>National Youth Award</strong>
                    <span>Conferred by Union Minister Shri Anurag Thakur, Govt. of India</span>
                  </div>
                </div>

                <div className="founder-hero-award-item">
                  <Landmark size={18} className="founder-hero-award-icon" />
                  <div>
                    <strong>Presidential &amp; Vice-Presidential Honors</strong>
                    <span>Felicitated by Hon&apos;ble President Smt. Droupadi Murmu &amp; Former VP Shri M. Venkaiah Naidu</span>
                  </div>
                </div>

                <div className="founder-hero-award-item">
                  <GraduationCap size={18} className="founder-hero-award-icon" />
                  <div>
                    <strong>1,000+ Lectures &amp; 20,000+ Students Mentored</strong>
                    <span>Ground educational awareness, rural libraries, and student career counselling across Telangana</span>
                  </div>
                </div>
              </div>

              <div className="founder-hero-card__actions">
                <Link href="/about#founder" className="btn btn-gold btn-sm">
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
