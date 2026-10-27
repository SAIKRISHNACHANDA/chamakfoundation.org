import Link from "next/link";
import Image from "next/image";
import StarfieldCanvas from "@/components/StarfieldCanvas";
import StatCounter from "@/components/StatCounter";
import HeroImageSlider from "@/components/HeroImageSlider";
import {
  GraduationCap,
  BookOpen,
  Compass,
  Laptop,
  Users,
  ShieldCheck,
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

const OBJECTIVES = [
  {
    num: "01",
    tag: "Direct Sponsorship",
    icon: GraduationCap,
    title: "Financial Scholarships",
    desc: "Removing economic obstacles by funding complete school fees, uniforms, textbooks, and essential supplies for deserving children.",
    action: "View Scholarship Model",
    href: "/programmes#scholarships",
    metric: "100% Direct School Funding",
  },
  {
    num: "02",
    tag: "Academic Foundation",
    icon: BookOpen,
    title: "Remedial & Quality Tutoring",
    desc: "Providing daily after-school coaching in foundational numeracy, science, and English to eliminate critical learning gaps in underserved schools.",
    action: "Explore Tutoring Centers",
    href: "/programmes#tutoring",
    metric: "Daily After-School Coaching",
  },
  {
    num: "03",
    tag: "Future Readiness",
    icon: Compass,
    title: "Career Guidance & Mentorship",
    desc: "Pairing high school students with professional mentors and vocational counselors to navigate college admissions and clear career pathways.",
    action: "Discover Mentorship",
    href: "/programmes#mentorship",
    metric: "1-on-1 Youth Mentors",
  },
  {
    num: "04",
    tag: "Digital Empowerment",
    icon: Laptop,
    title: "Digital Literacy & Tech Skills",
    desc: "Equipping underprivileged children with hands-on computer training, safe digital tools, and practical skills for the modern economy.",
    action: "Inspect Tech Labs",
    href: "/programmes#digital",
    metric: "Hands-On PC Learning",
  },
  {
    num: "05",
    tag: "Grassroots Unity",
    icon: Users,
    title: "Community & Parent Engagement",
    desc: "Partnering closely with parents, school administrators, and village elders to foster safe learning environments and halt dropouts.",
    action: "See Community Impact",
    href: "/impact",
    metric: "25+ Communities Reached",
  },
  {
    num: "06",
    tag: "Full Accountability",
    icon: ShieldCheck,
    title: "Transparent Stewardship",
    desc: "Ensuring 100% financial transparency with verified student outcome records and auditable impact tracking for every supporter.",
    action: "Review Governance",
    href: "/vision-mission",
    metric: "100% Verified Tracking",
  },
];

const HIGHLIGHT_PROGRAMMES = [
  {
    title: "Education Scholarships",
    tag: "Access & Equity",
    desc: "Targeted financial sponsorship covering complete annual schooling costs for children from disadvantaged families.",
    href: "/programmes#scholarships",
  },
  {
    title: "Career Mentorship",
    tag: "Future Readiness",
    desc: "Guiding high school students through stream selection, entrance exam coaching, and one-on-one professional mentorship.",
    href: "/programmes#mentorship",
  },
  {
    title: "Digital Literacy Lab",
    tag: "Skills & Innovation",
    desc: "Hands-on computer training, online learning resources, and practical tech skills for children with zero prior access.",
    href: "/programmes#digital",
  },
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
              Every Child Has a <em>Chamak.</em>
            </h1>
            <p className="hero__sub">Education today. A brighter tomorrow.</p>
            <p className="hero__desc">
              We empower underprivileged children through education, opportunities,
              and mentorship to help them shine in life.
            </p>
            <div className="hero__ctas">
              <Link href="/get-involved#donate" className="btn btn-gold">
                Support a Student
              </Link>
              <Link href="/impact" className="btn btn-outline-light">
                See Our Impact
              </Link>
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

      {/* Six Pillars / Core Objectives */}
      <section className="section section--pillars">
        <div className="container">
          <div className="section-head section-head--center section-head--fit">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <Sparkles size={14} /> Our Strategic Pillars
            </div>
            <h2 className="section-title--single">
              How We Nurture the <em>Chamak</em> in Every Child
            </h2>
          </div>

          <div className="pillar-grid">
            {OBJECTIVES.map((obj, i) => {
              const IconComp = obj.icon;
              return (
                <Link key={i} href={obj.href} className="pillar-card">
                  <div className="pillar-card__header">
                    <div className="pillar-card__icon-box">
                      <IconComp size={22} />
                    </div>
                    <span className="pillar-card__num">{obj.num}</span>
                  </div>

                  <div className="pillar-card__body">
                    <span className="pillar-card__tag">{obj.tag}</span>
                    <h3 className="pillar-card__title">{obj.title}</h3>
                    <p className="pillar-card__desc">{obj.desc}</p>
                  </div>

                  <div className="pillar-card__footer">
                    <span className="pillar-card__metric">
                      <span className="pillar-card__metric-dot" /> {obj.metric}
                    </span>
                    <span className="pillar-card__action">
                      <span>Learn more</span>
                      <ArrowRight size={14} className="pillar-card__link-arrow" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flagship Programmes Preview */}
      <section className="section section--cream2">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Transformative Pathways
            </div>
            <h2>Our Flagship Programmes</h2>
            <p style={{ margin: "0 auto" }}>
              Targeted initiatives built to solve the root causes of educational dropouts.
            </p>
          </div>

          <div className="grid grid--3">
            {HIGHLIGHT_PROGRAMMES.map((prog, i) => (
              <div key={i} className="card">
                <div className="card__body">
                  <div className="card__icon">
                    <Sparkles size={24} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--gold-500)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {prog.tag}
                  </span>
                  <h3>{prog.title}</h3>
                  <p style={{ marginBottom: "18px" }}>{prog.desc}</p>
                  <Link
                    href={prog.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.86rem",
                      fontWeight: 600,
                      color: "var(--navy-900)",
                    }}
                  >
                    Explore Programme <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "44px" }}>
            <Link href="/programmes" className="btn btn-outline-navy">
              View All 6 Programmes <ArrowRight size={14} />
            </Link>
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
