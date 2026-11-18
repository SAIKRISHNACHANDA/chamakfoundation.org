import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  GraduationCap,
  Heart,
  Scale,
  Sparkles,
  CheckCircle2,
  ArrowRight,
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
      tagline: "Empowering girl child education and guaranteeing equal leadership access.",
      color: "#e5243b",
      accentBg: "rgba(229, 36, 59, 0.08)",
      borderColor: "rgba(229, 36, 59, 0.28)",
      icon: Heart,
      unTarget: "UN SDG 5 · Gender Equality",
      highlights: [
        "Over 50% of foundation scholarship allocations prioritized for underprivileged girls.",
        "Direct financial sponsorship to ensure completion of secondary and higher education.",
        "Mentorship circles cultivating spoken English fluency, public speaking, and self-advocacy.",
      ],
      impactStats: "Zero-Dropout Guarantee",
    },
    {
      num: "4",
      id: "quality-education",
      title: "Quality Education",
      tagline: "Rural libraries, merit sponsorships, and holistic classroom empowerment.",
      color: "#d9af52",
      accentBg: "rgba(217, 175, 82, 0.12)",
      borderColor: "rgba(217, 175, 82, 0.35)",
      icon: GraduationCap,
      unTarget: "UN SDG 4 · Quality Education",
      highlights: [
        "Inauguration of community and rural libraries stocked with competitive exam guides and reference books.",
        "100+ merit and need-based scholarships disbursed directly to educational institutions.",
        "Comprehensive career guidance, civil services mentoring, and pedagogical coaching.",
      ],
      impactStats: "Rural Libraries & Scholarships",
    },
    {
      num: "10",
      id: "reduced-inequalities",
      title: "Reduced Inequalities",
      tagline: "Dismantling urban-rural divides for first-generation rural scholars.",
      color: "#4f46e5",
      accentBg: "rgba(79, 70, 229, 0.08)",
      borderColor: "rgba(79, 70, 229, 0.28)",
      icon: Scale,
      unTarget: "UN SDG 10 · Reduced Inequalities",
      highlights: [
        "Affirmative focus on first-generation college aspirants and children of daily wage workers.",
        "Free provision of textbooks, stationery kits, and digital learning access in remote pockets.",
        "Connecting rural aspirants directly with civil servants, university professors, and corporate leaders.",
      ],
      impactStats: "Bridging the Divide",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="UN AGENDA 2030 · GLOBAL STANDARDS · LOCAL IMPACT"
        title="Sustainable Development Goals"
        subtitle="Empowering underprivileged children and youth across Telangana through direct alignment with the United Nations Sustainable Development Goals."
      />

      {/* CORE STRATEGIC SECTION WITH HORIZONTAL 3-GOAL LAYOUT */}
      <section className="section" style={{ paddingTop: "56px", paddingBottom: "70px" }}>
        <div className="container">
          {/* Header & Introductory Narrative */}
          <div style={{ maxWidth: "860px", margin: "0 auto 48px", textAlign: "center" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <Sparkles size={14} /> Global Standards, Grassroots Action
            </div>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.9rem, 2.8vw, 2.7rem)",
                color: "var(--navy-900)",
                margin: "12px 0 18px",
                lineHeight: 1.25,
              }}
            >
              Translating Global Goals Into Grassroots Miracles
            </h2>
            <p style={{ color: "var(--ink-600)", fontSize: "1.04rem", lineHeight: 1.75, marginBottom: "16px" }}>
              In 2015, the United Nations adopted the 17 Sustainable Development Goals (SDGs) as a universal call to end poverty, protect the planet, and ensure that all people enjoy peace and prosperity by 2030.
            </p>
            <p style={{ color: "var(--ink-600)", fontSize: "1.04rem", lineHeight: 1.75, margin: 0 }}>
              At <strong>Chamak Foundation (Chamak Padhai Se)</strong>, founded by National Youth Awardee Dr. Mohammad Azam Ali, we anchor our grassroots operations around three deeply intertwined goals that create compound generational progress: <strong>Quality Education (SDG 4)</strong>, <strong>Gender Equality (SDG 5)</strong>, and <strong>Reduced Inequalities (SDG 10)</strong>.
            </p>
          </div>

          {/* 3 SDGs Displayed Horizontally in a 3-Column Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "28px",
              marginBottom: "48px",
            }}
          >
            {sdgGoals.map((sdg) => {
              const IconComponent = sdg.icon;
              return (
                <div
                  key={sdg.id}
                  id={sdg.id}
                  style={{
                    background: "#ffffff",
                    borderRadius: "20px",
                    padding: "36px 30px",
                    border: `1px solid ${sdg.borderColor}`,
                    boxShadow: "0 12px 36px rgba(11,27,56,0.06)",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  {/* Top Color Accent Bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "5px",
                      background: sdg.color,
                    }}
                  />

                  {/* Header: Icon, Badge & Target */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "14px",
                        background: sdg.accentBg,
                        color: sdg.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconComponent size={26} strokeWidth={2.2} />
                    </div>

                    <span
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 800,
                        color: sdg.color,
                        background: sdg.accentBg,
                        padding: "5px 14px",
                        borderRadius: "999px",
                        border: `1px solid ${sdg.borderColor}`,
                        letterSpacing: "0.04em",
                      }}
                    >
                      SDG #{sdg.num}
                    </span>
                  </div>

                  {/* Title & UN Target */}
                  <div style={{ fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: sdg.color, marginBottom: "4px" }}>
                    {sdg.unTarget}
                  </div>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.55rem", color: "var(--navy-900)", margin: "0 0 12px", lineHeight: 1.3 }}>
                    {sdg.title}
                  </h3>

                  {/* Highlight Pill Statement */}
                  <div
                    style={{
                      padding: "12px 14px",
                      borderRadius: "10px",
                      background: sdg.accentBg,
                      borderLeft: `4px solid ${sdg.color}`,
                      fontSize: "0.92rem",
                      color: "var(--navy-950)",
                      fontWeight: 600,
                      lineHeight: 1.55,
                      marginBottom: "20px",
                    }}
                  >
                    {sdg.tagline}
                  </div>

                  {/* Key Highlights */}
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-400)", marginBottom: "10px" }}>
                      Key Interventions:
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                      {sdg.highlights.map((item, idx) => (
                        <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.9rem", color: "var(--ink-700)", lineHeight: 1.55 }}>
                          <CheckCircle2 size={16} style={{ color: sdg.color, flexShrink: 0, marginTop: "3px" }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Impact Tag */}
                  <div
                    style={{
                      marginTop: "24px",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(11,27,56,0.08)",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: sdg.color,
                    }}
                  >
                    <Sparkles size={14} />
                    <span>{sdg.impactStats}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/get-involved" className="btn btn-gold">
              Support Our Mission
            </Link>
            <Link href="/programmes" className="btn btn-navy">
              Explore Our Programmes <ArrowRight size={15} style={{ marginLeft: "4px" }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
