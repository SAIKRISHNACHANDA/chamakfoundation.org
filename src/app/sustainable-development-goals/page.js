import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import {
  GraduationCap,
  Heart,
  Scale,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Library,
  Users,
  Target,
  Award,
  BookOpen,
  Compass,
  ShieldCheck,
  TrendingUp,
  Globe2,
} from "lucide-react";

export const metadata = {
  title: "Sustainable Development Goals (SDGs) · Chamak Foundation",
  description:
    "How Chamak Foundation aligns grassroots educational action in Telangana with United Nations Sustainable Development Goals: SDG 4 (Quality Education), SDG 5 (Gender Equality), and SDG 10 (Reduced Inequalities).",
};

export default function SustainableDevelopmentGoalsPage() {
  const sdgGoals = [
    {
      num: "5",
      id: "gender-equality",
      title: "Gender Equality",
      tagline: "Empowering young girls to learn, lead, and overcome socioeconomic ceilings",
      color: "#e5243b",
      accentBg: "rgba(229, 36, 59, 0.08)",
      borderColor: "rgba(229, 36, 59, 0.28)",
      icon: Heart,
      unTarget: "UN SDG 5 · Gender Equality & Female Empowerment",
      description:
        "Gender disparities remain one of the steepest barriers to social progress. In rural and underserved communities across Telangana, economic stress often forces girls out of classrooms prematurely. Chamak Foundation actively reverses this through affirmative scholarships, female student mentorship, and family sensitization.",
      highlights: [
        "Over 50% of foundation scholarship allocations prioritized for underprivileged girls.",
        "Direct financial sponsorship to ensure completion of intermediate, degree, and professional education.",
        "Mentorship circles cultivating spoken English fluency, public speaking, and self-advocacy.",
        "Awareness campaigns to combat early marriage and advocate for girl child educational rights.",
      ],
      impactStats: "50%+ Girls Supported · Zero-Dropout Guarantee",
    },
    {
      num: "4",
      id: "quality-education",
      title: "Quality Education",
      tagline: "Unlocking human potential through universal access to books, guidance, and merit support",
      color: "#d9af52",
      accentBg: "rgba(217, 175, 82, 0.09)",
      borderColor: "rgba(217, 175, 82, 0.35)",
      icon: GraduationCap,
      unTarget: "UN SDG 4 · Inclusive, Equitable Quality Education",
      description:
        "Education is the single most potent equalizer in human history. Under the motto 'Chamak Padhai Se', we ensure that no child's academic journey is halted due to poverty. We build grassroots learning ecosystems that encompass libraries, scholarships, and expert pedagogical coaching.",
      highlights: [
        "Inauguration of community and rural libraries stocked with competitive exam guides and reference books.",
        "100+ merit and need-based scholarships disbursed directly to educational institutions.",
        "After-school foundational literacy and bilingual study materials for government school pupils.",
        "70+ career counselling sessions guiding students into medicine, engineering, civil services, and law.",
      ],
      impactStats: "2+ Rural Libraries · 500+ Students Mentored",
    },
    {
      num: "10",
      id: "reduced-inequalities",
      title: "Reduced Inequalities",
      tagline: "Bridging the urban-rural divide so every child has a level playing field to succeed",
      color: "#4f46e5",
      accentBg: "rgba(79, 70, 229, 0.08)",
      borderColor: "rgba(79, 70, 229, 0.28)",
      icon: Scale,
      unTarget: "UN SDG 10 · Reducing Disparities of Opportunity & Income",
      description:
        "Talent is distributed equally across humanity, but opportunity is not. First-generation learners, daily wage laborers' children, and rural youth face compounding disadvantages. Chamak Foundation dismantles these systemic inequalities by bringing elite resources, mentorship, and career paths directly to grassroots villages.",
      highlights: [
        "Affirmative focus on first-generation college aspirants and children of agricultural laborers.",
        "Free provision of textbooks, stationery kits, and digital learning devices in remote pockets.",
        "Connecting rural aspirants directly with civil servants, university professors, and corporate leaders.",
        "Guiding students toward prestigious state and national competitive examinations on merit.",
      ],
      impactStats: "25+ Villages Reached · 100% Free Access",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="UN AGENDA 2030 · GLOBAL GOALS · LOCAL IMPACT"
        title="Sustainable Development Goals"
        subtitle="Empowering underprivileged children and youth across Telangana through direct alignment with the United Nations Sustainable Development Goals."
      />

      {/* OVERVIEW & OFFICIAL BADGE SHOWCASE */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{ gap: "48px", alignItems: "center" }}>
            {/* Visual Media Card */}
            <div>
              <div
                style={{
                  background: "#fff",
                  padding: "16px",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "0 14px 44px rgba(11,27,56,0.08)",
                  border: "1px solid rgba(11,27,56,0.08)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    borderRadius: "calc(var(--radius-lg) - 8px)",
                    overflow: "hidden",
                    background: "#0b1b38",
                  }}
                >
                  <Image
                    src="/assets/img/sustainable-development-goals.jpg"
                    alt="Chamak Foundation UN Sustainable Development Goals: SDG 5 Gender Equality, SDG 4 Quality Education, SDG 10 Reduced Inequalities"
                    width={708}
                    height={1024}
                    priority
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: "14px 12px 6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "0.82rem",
                    color: "var(--ink-400)",
                    fontWeight: 500,
                  }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--navy-900)", fontWeight: 700 }}>
                    <Globe2 size={15} style={{ color: "var(--gold-500)" }} />
                    Chamak Foundation Agenda 2030
                  </span>
                  <span>SDG #5 · SDG #4 · SDG #10</span>
                </div>
              </div>
            </div>

            {/* Strategic Mission Text */}
            <div>
              <div className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <Sparkles size={14} /> Global Standards, Grassroots Action
              </div>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.9rem, 2.6vw, 2.6rem)", color: "var(--navy-900)", margin: "12px 0 16px", lineHeight: 1.25 }}>
                Translating Global Goals Into Grassroots Miracles
              </h2>
              <p style={{ color: "var(--ink-600)", fontSize: "1.02rem", lineHeight: 1.7, marginBottom: "16px" }}>
                In 2015, the United Nations adopted the 17 Sustainable Development Goals (SDGs) as a universal call to end poverty, protect the planet, and ensure that all people enjoy peace and prosperity by 2030.
              </p>
              <p style={{ color: "var(--ink-600)", fontSize: "1.02rem", lineHeight: 1.7, marginBottom: "24px" }}>
                At <strong>Chamak Foundation (Chamak Padhai Se)</strong>, founded by National Youth Awardee Dr. Mohammad Azam Ali, we anchor our grassroots operations around three deeply intertwined goals that create compound generational progress: <strong>Quality Education (SDG 4)</strong>, <strong>Gender Equality (SDG 5)</strong>, and <strong>Reduced Inequalities (SDG 10)</strong>.
              </p>

              {/* Three Pill Summary */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "12px 16px", borderRadius: "10px", background: "rgba(229, 36, 59, 0.07)", borderLeft: "4px solid #e5243b" }}>
                  <span style={{ fontWeight: 800, color: "#e5243b", fontSize: "0.85rem", minWidth: "64px" }}>SDG #5</span>
                  <span style={{ fontSize: "0.92rem", color: "var(--navy-950)", fontWeight: 500 }}>
                    <strong>Gender Equality:</strong> Empowering girl child education and guaranteeing equal leadership access.
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "12px 16px", borderRadius: "10px", background: "rgba(217, 175, 82, 0.12)", borderLeft: "4px solid #d9af52" }}>
                  <span style={{ fontWeight: 800, color: "#c99a3a", fontSize: "0.85rem", minWidth: "64px" }}>SDG #4</span>
                  <span style={{ fontSize: "0.92rem", color: "var(--navy-950)", fontWeight: 500 }}>
                    <strong>Quality Education:</strong> Rural libraries, merit sponsorships, and holistic classroom empowerment.
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "12px 16px", borderRadius: "10px", background: "rgba(79, 70, 229, 0.07)", borderLeft: "4px solid #4f46e5" }}>
                  <span style={{ fontWeight: 800, color: "#4f46e5", fontSize: "0.85rem", minWidth: "64px" }}>SDG #10</span>
                  <span style={{ fontSize: "0.92rem", color: "var(--navy-950)", fontWeight: 500 }}>
                    <strong>Reduced Inequalities:</strong> Dismantling urban-rural divides for first-generation rural scholars.
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="#goals-deep-dive" className="btn btn-navy">
                  Explore The 3 Goals <ArrowRight size={15} />
                </Link>
                <Link href="/get-involved#donate" className="btn btn-gold">
                  Support Our Mission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRIC STRIP */}
      <section className="section section--navy" style={{ padding: "50px 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
              textAlign: "center",
            }}
          >
            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: "2.4rem", fontWeight: 800, color: "var(--gold-400)" }}>
                500+
              </div>
              <div style={{ fontSize: "0.88rem", color: "rgba(250,247,239,0.75)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "4px" }}>
                Students Supported
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: "2.4rem", fontWeight: 800, color: "var(--gold-400)" }}>
                100+
              </div>
              <div style={{ fontSize: "0.88rem", color: "rgba(250,247,239,0.75)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "4px" }}>
                Scholarships Awarded
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: "2.4rem", fontWeight: 800, color: "var(--gold-400)" }}>
                2+
              </div>
              <div style={{ fontSize: "0.88rem", color: "rgba(250,247,239,0.75)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "4px" }}>
                Rural Libraries Opened
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: "2.4rem", fontWeight: 800, color: "var(--gold-400)" }}>
                70+
              </div>
              <div style={{ fontSize: "0.88rem", color: "rgba(250,247,239,0.75)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "4px" }}>
                Career Guidance Sessions
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: "2.4rem", fontWeight: 800, color: "var(--gold-400)" }}>
                100%
              </div>
              <div style={{ fontSize: "0.88rem", color: "rgba(250,247,239,0.75)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "4px" }}>
                Direct Impact Transparent
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE GOALS DEEP DIVE */}
      <section className="section" id="goals-deep-dive" style={{ scrollMarginTop: "90px" }}>
        <div className="container">
          <div className="section-head section-head--center section-head--fit">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <Target size={14} /> Core Pillars of Action
            </div>
            <h2 className="section-title--oneline">Our Three Targeted Sustainable Development Goals</h2>
            <p style={{ marginTop: "10px", color: "var(--ink-500)", maxWidth: "62ch", marginLeft: "auto", marginRight: "auto" }}>
              How Chamak Foundation directly links daily classroom activities, scholarship funds, and volunteer deployments to the United Nations 2030 targets.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "36px", marginTop: "40px" }}>
            {sdgGoals.map((sdg) => {
              const IconComponent = sdg.icon;
              return (
                <div
                  key={sdg.id}
                  id={sdg.id}
                  style={{
                    background: "#fff",
                    borderRadius: "var(--radius-lg)",
                    padding: "36px",
                    border: `1px solid ${sdg.borderColor}`,
                    boxShadow: "0 10px 32px rgba(11,27,56,0.05)",
                    position: "relative",
                    overflow: "hidden",
                    scrollMarginTop: "100px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "6px",
                      height: "100%",
                      background: sdg.color,
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "16px",
                      marginBottom: "18px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "14px",
                          background: sdg.accentBg,
                          color: sdg.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <IconComponent size={28} strokeWidth={2.2} />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: sdg.color }}>
                          {sdg.unTarget}
                        </div>
                        <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.65rem", color: "var(--navy-900)", margin: "4px 0 0" }}>
                          #{sdg.num} — {sdg.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "6px 14px",
                        borderRadius: "20px",
                        background: sdg.accentBg,
                        color: sdg.color,
                        fontWeight: 700,
                        fontSize: "0.82rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Sparkles size={13} /> {sdg.impactStats}
                    </div>
                  </div>

                  <p style={{ fontSize: "1.08rem", fontWeight: 600, color: "var(--navy-800)", marginBottom: "12px", lineHeight: 1.45 }}>
                    {sdg.tagline}
                  </p>

                  <p style={{ color: "var(--ink-600)", lineHeight: 1.7, marginBottom: "22px" }}>
                    {sdg.description}
                  </p>

                  <div
                    style={{
                      background: "var(--cream-100)",
                      borderRadius: "var(--radius-md)",
                      padding: "20px 24px",
                      border: "1px solid rgba(11,27,56,0.06)",
                    }}
                  >
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--navy-900)", marginBottom: "14px" }}>
                      Key Chamak Foundation Interventions:
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px" }}>
                      {sdg.highlights.map((item, idx) => (
                        <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                          <CheckCircle2 size={16} style={{ color: sdg.color, flexShrink: 0, marginTop: "4px" }} />
                          <span style={{ fontSize: "0.92rem", color: "var(--ink-800)", lineHeight: 1.55 }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE DELIVER SYSTEMIC IMPACT */}
      <section className="section section--cream2">
        <div className="container">
          <div className="section-head section-head--center section-head--fit">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <TrendingUp size={14} /> The 4-Stage Impact Engine
            </div>
            <h2 className="section-title--oneline">How We Ensure Sustainable, Lasting Change</h2>
            <p style={{ marginTop: "10px", color: "var(--ink-500)", maxWidth: "56ch", marginLeft: "auto", marginRight: "auto" }}>
              A proven methodology that takes underprivileged children from foundational classroom hurdles all the way to professional degree independence.
            </p>
          </div>

          <div className="grid grid--4" style={{ gap: "20px", marginTop: "36px" }}>
            <div className="card" style={{ padding: "28px 24px", background: "#fff", borderTop: "4px solid var(--navy-800)" }}>
              <div style={{ fontFamily: "var(--num)", fontSize: "1.8rem", fontWeight: 800, color: "var(--navy-700)", marginBottom: "8px" }}>
                01
              </div>
              <h4 style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--navy-900)", margin: "0 0 10px" }}>
                Grassroots Identification
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
                Our field coordinators and teacher networks identify vulnerable pupils facing imminent drop-out risks due to financial crisis.
              </p>
            </div>

            <div className="card" style={{ padding: "28px 24px", background: "#fff", borderTop: "4px solid var(--gold-500)" }}>
              <div style={{ fontFamily: "var(--num)", fontSize: "1.8rem", fontWeight: 800, color: "var(--gold-500)", marginBottom: "8px" }}>
                02
              </div>
              <h4 style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--navy-900)", margin: "0 0 10px" }}>
                Direct Sponsorship
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
                100% transparent fee disbursements paid straight to recognized schools and intermediate colleges to guarantee continued enrollment.
              </p>
            </div>

            <div className="card" style={{ padding: "28px 24px", background: "#fff", borderTop: "4px solid #e5243b" }}>
              <div style={{ fontFamily: "var(--num)", fontSize: "1.8rem", fontWeight: 800, color: "#e5243b", marginBottom: "8px" }}>
                03
              </div>
              <h4 style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--navy-900)", margin: "0 0 10px" }}>
                Mentorship &amp; Libraries
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
                Students gain unrestricted access to rural libraries, motivational lectures, English speaking clubs, and career counseling camps.
              </p>
            </div>

            <div className="card" style={{ padding: "28px 24px", background: "#fff", borderTop: "4px solid #4f46e5" }}>
              <div style={{ fontFamily: "var(--num)", fontSize: "1.8rem", fontWeight: 800, color: "#4f46e5", marginBottom: "8px" }}>
                04
              </div>
              <h4 style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--navy-900)", margin: "0 0 10px" }}>
                Generational Mobility
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--ink-600)", lineHeight: 1.6, margin: 0 }}>
                Graduates transition into white-collar professions, public administration, and entrepreneurship, permanently lifting their entire families out of poverty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER'S VISIONARY STATEMENT ON SDGS */}
      <section className="section section--navy quote-section">
        <div className="container">
          <div className="quote-box">
            <span className="quote-box__mark" aria-hidden="true">“</span>
            <blockquote className="quote-box__text">
              The United Nations Sustainable Development Goals are not abstract international declarations. To us at Chamak Foundation, they are daily marching orders: ensuring a girl in a remote village never has to abandon her education, ensuring every child can read freely in a village library, and proving that knowledge can eradicate generational poverty.
            </blockquote>
            <cite className="quote-box__author">
              — Dr. Mohammad Azam Ali, Founder &amp; President, Chamak Foundation
            </cite>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section" style={{ textAlign: "center", paddingBottom: "100px" }}>
        <div className="container">
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              padding: "48px 32px",
              background: "#fff",
              borderRadius: "var(--radius-lg)",
              border: "1px solid rgba(11,27,56,0.08)",
              boxShadow: "0 14px 44px rgba(11,27,56,0.07)",
            }}
          >
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <Sparkles size={14} /> Partner With Us
            </div>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 2.4vw, 2.3rem)", color: "var(--navy-900)", margin: "14px 0 16px" }}>
              Support Chamak Foundation in Advancing the UN SDGs
            </h2>
            <p style={{ color: "var(--ink-600)", fontSize: "1.02rem", lineHeight: 1.65, marginBottom: "28px" }}>
              Whether through corporate CSR partnerships, individual student sponsorships, or community volunteering, your support directly fuels educational equity across Telangana.
            </p>

            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/get-involved#donate" className="btn btn-gold">
                Sponsor a Student
              </Link>
              <Link href="/get-involved#volunteer" className="btn btn-navy">
                Become a Volunteer
              </Link>
              <Link href="/contact" className="btn btn-outline-navy">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

