import Link from "next/link";
import Image from "next/image";
import StarfieldCanvas from "@/components/StarfieldCanvas";
import StatCounter from "@/components/StatCounter";
import HeroImageSlider from "@/components/HeroImageSlider";
import {
  GraduationCap,
  Compass,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Library,
  Smile,
} from "lucide-react";

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
              Every Child Deserves to <em>Shine.</em>
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

      {/* Meet Our Founder Intro Strip */}
      <section className="section section--tight founder-intro">
        <div className="container">
          <div className="section-head section-head--center section-head--fit">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Meet Our Founder
            </div>
            <h2 className="hdg-oneline">The Person Behind the Chamak</h2>
            <p style={{ margin: "0 auto" }}>
              A closer look at the founder whose commitment and vision started it all.
            </p>
          </div>
        </div>
        <div className="founder-intro__divider">
          <Sparkles size={22} />
        </div>
      </section>

      {/* Editorial Founder Section */}
      <section className="founder-full">
        <div className="founder-full__photo" style={{ background: "linear-gradient(145deg, var(--navy-950) 0%, var(--navy-900) 100%)", padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="showcase-tile__badge" style={{ display: "inline-flex", marginBottom: "16px" }}>
              <HeartHandshake size={14} /> Founder&apos;s Vision
            </div>
            <h3 style={{ color: "var(--cream-100)", fontSize: "clamp(1.5rem, 2.4vw, 2rem)", maxWidth: "28ch", lineHeight: 1.35, fontFamily: "var(--serif)" }}>
              &ldquo;Education is the light (&lsquo;Chamak&rsquo;) that can illuminate lives and build a better society.&rdquo;
            </h3>
            <p style={{ color: "rgba(250,247,239,0.75)", maxWidth: "42ch", marginTop: "14px", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Founded with the deep conviction that quality learning is the single most powerful equalizer in society.
            </p>
          </div>

          <div style={{ marginTop: "40px", paddingTop: "28px", borderTop: "1px solid rgba(201,154,58,0.3)" }}>
            <div className="eyebrow" style={{ color: "var(--gold-400)", marginBottom: "4px" }}>Founder &amp; President</div>
            <h2 style={{ color: "var(--cream-100)", fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)", margin: "0 0 6px" }}>Dr. Mohammad Azam Ali</h2>
            <span style={{ color: "var(--gold-400)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
              M.A., M.Ed., Ph.D. · Assistant Professor &amp; Educator
            </span>
            <p style={{ color: "rgba(250,247,239,0.85)", fontSize: "0.95rem", lineHeight: 1.6, margin: "0 0 20px", maxWidth: "46ch" }}>
              Overcoming early poverty and educational discontinuation through perseverance, Dr. Azam Ali achieved his dream of becoming an Assistant Professor. Inspired by Maulana Abul Kalam Azad and Dr. APJ Abdul Kalam, he founded Chamak Foundation to ensure no student&apos;s dream is left in the dark.
            </p>
            <Link href="/about" className="btn btn-gold btn--sm" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Read Founder&apos;s Full Journey <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="founder-full__gallery">
          <div className="showcase-tile" style={{ borderRadius: 0, padding: "30px 20px" }}>
            <Compass size={32} style={{ color: "var(--gold-400)", marginBottom: "12px" }} />
            <h4 style={{ color: "var(--cream-100)", margin: 0, fontSize: "1.1rem" }}>Career Guidance</h4>
            <p style={{ fontSize: "0.82rem", color: "rgba(250,247,239,0.7)", margin: "6px 0 0" }}>
              70+ sessions for school, college &amp; civil services
            </p>
          </div>
          <div className="showcase-tile" style={{ borderRadius: 0, padding: "30px 20px" }}>
            <Smile size={32} style={{ color: "var(--gold-400)", marginBottom: "12px" }} />
            <h4 style={{ color: "var(--cream-100)", margin: 0, fontSize: "1.1rem" }}>Life Skills</h4>
            <p style={{ fontSize: "0.82rem", color: "rgba(250,247,239,0.7)", margin: "6px 0 0" }}>
              Leadership, communication &amp; emotional intelligence
            </p>
          </div>
          <div className="showcase-tile" style={{ borderRadius: 0, padding: "30px 20px" }}>
            <Library size={32} style={{ color: "var(--gold-400)", marginBottom: "12px" }} />
            <h4 style={{ color: "var(--cream-100)", margin: 0, fontSize: "1.1rem" }}>Rural Libraries</h4>
            <p style={{ fontSize: "0.82rem", color: "rgba(250,247,239,0.7)", margin: "6px 0 0" }}>
              Active in Rangapoor &amp; Govt. HS Matwada
            </p>
          </div>
          <div className="showcase-tile" style={{ borderRadius: 0, padding: "30px 20px" }}>
            <GraduationCap size={32} style={{ color: "var(--gold-400)", marginBottom: "12px" }} />
            <h4 style={{ color: "var(--cream-100)", margin: 0, fontSize: "1.1rem" }}>Higher-Ed Aid</h4>
            <p style={{ fontSize: "0.82rem", color: "rgba(250,247,239,0.7)", margin: "6px 0 0" }}>
              20+ scholars funded in Pharmacy, B.Ed, M.A. &amp; M.Phil
            </p>
          </div>
        </div>
      </section>


      {/* Quote Section */}
      <section className="section section--navy">
        <div className="container">
          <div className="quote">
            <p>
              &ldquo;Education is the most powerful weapon which you can use to
              change the world.&rdquo;
            </p>
            <cite>— Nelson Mandela</cite>
          </div>
        </div>
      </section>

      {/* Call to Action Band */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div className="eyebrow" style={{ color: "var(--gold-300)", justifyContent: "center" }}>
              Make a Direct Difference
            </div>
            <h2>Be the Reason a Child Shines</h2>
            <p>
              Your monthly sponsorship or one-time donation provides textbooks,
              school fees, uniforms, and mentorship to an underprivileged student.
            </p>
            <div className="cta-band__ctas">
              <Link href="/get-involved#donate" className="btn btn-gold">
                Support a Student
              </Link>
              <Link href="/get-involved#volunteer" className="btn btn-outline-light">
                Join as a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
