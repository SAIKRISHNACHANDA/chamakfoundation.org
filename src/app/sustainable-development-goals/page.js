import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Sparkles, ArrowRight, Heart, BookOpen, Layers, Globe, Link2 } from "lucide-react";

export const metadata = {
  title: "Sustainable Development Goals (SDGs) · Chamak Foundation",
  description:
    "How Chamak Foundation aligns grassroots educational action in Telangana with United Nations Sustainable Development Goals: SDG 4 (Quality Education), SDG 5 (Gender Equality), and SDG 10 (Reduced Inequalities).",
};

export default function SustainableDevelopmentGoalsPage() {
  return (
    <>
      <PageHero
        eyebrow="United Nations Agenda 2030"
        title="Sustainable Development Goals"
        subtitle="Aligning grassroots educational interventions in Telangana with the United Nations global framework for peace, dignity, and shared prosperity."
      />

      <section className="section" style={{ paddingTop: "60px", paddingBottom: "96px" }}>
        <div className="container" style={{ maxWidth: "1180px" }}>
          {/* UN SDG Alignment Callout Banner */}
          <div
            style={{
              background: "linear-gradient(135deg, #0b1b38 0%, #122349 100%)",
              borderRadius: "var(--radius-lg)",
              padding: "36px 32px",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
              boxShadow: "0 12px 36px rgba(11,27,56,0.16)",
              border: "1px solid rgba(217,175,82,0.3)",
              marginBottom: "52px",
            }}
          >
            <div style={{ maxWidth: "680px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--gold-400)", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                <Globe size={15} /> UN Agenda 2030 Alignment
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.4rem, 2vw, 1.85rem)", color: "#fff", margin: "0 0 10px", lineHeight: 1.3 }}>
                Advancing the United Nations Sustainable Development Goals
              </h3>
              <p style={{ color: "rgba(250,247,239,0.78)", fontSize: "0.96rem", lineHeight: 1.65, margin: 0 }}>
                Discover how Chamak Foundation champions <strong>SDG 4 (Quality Education)</strong>, <strong>SDG 5 (Gender Equality)</strong>, and <strong>SDG 10 (Reduced Inequalities)</strong> across Telangana.
              </p>
            </div>
            <div>
              <a href="#goals" className="btn btn-gold" style={{ whiteSpace: "nowrap" }}>
                Explore SDG Action <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Section Header */}
          <div id="goals" style={{ textAlign: "center", maxWidth: "960px", margin: "0 auto 52px", scrollMarginTop: "100px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(217, 175, 82, 0.12)",
                color: "var(--gold-700)",
                padding: "6px 18px",
                borderRadius: "30px",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
                border: "1px solid rgba(217, 175, 82, 0.3)",
              }}
            >
              <Sparkles size={14} /> Global Standards · Grassroots Action
            </div>
            <h2
              className="section-title--oneline"
              style={{
                fontSize: "clamp(1.35rem, 2.6vw, 2.35rem)",
                color: "var(--navy-900)",
                lineHeight: 1.25,
                margin: "0 0 14px",
              }}
            >
              Three Interconnected Goals. Compounding Impact.
            </h2>
            <p style={{ color: "var(--ink-600)", fontSize: "1.05rem", lineHeight: 1.7, margin: "0 auto", maxWidth: "780px" }}>
              At Chamak Foundation, our ground operations in rural, tribal, and disadvantaged communities anchor directly around three deeply intertwined goals.
            </p>
          </div>

          {/* THE 3 SDG CARDS CONNECTED AS A CONTINUOUS CHAIN OF IMPACT */}
          <div className="sdg-chain-grid">
            {/* CARD 1: SDG #4 - QUALITY EDUCATION (CHAIN LINK 01: ROOT) */}
            <div className="sdg-chain-card sdg-chain-card--gold">
              {/* Top Accent Bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "5px",
                  background: "linear-gradient(90deg, #F3C669, #D9AF52, #C99A3A)",
                }}
              />

              {/* Chain Badge */}
              <div className="sdg-chain-badge sdg-chain-badge--gold">
                <Link2 size={12} strokeWidth={2.5} /> Link 01 · Root
              </div>

              {/* Hexagon Graphic Badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "22px" }}>
                <div
                  style={{
                    position: "relative",
                    width: "72px",
                    height: "72px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%", filter: "drop-shadow(0 6px 14px rgba(217,175,82,0.42))" }}>
                    <defs>
                      <linearGradient id="sdg4grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F5CE7A" />
                        <stop offset="50%" stopColor="#D9AF52" />
                        <stop offset="100%" stopColor="#C99A3A" />
                      </linearGradient>
                    </defs>
                    <polygon points="50,3 93,26 93,74 50,97 7,74 7,26" fill="url(#sdg4grad)" />
                  </svg>
                  {/* Hexagon Inner Content */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0b1b38",
                      textAlign: "center",
                      paddingTop: "2px",
                    }}
                  >
                    <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>🎓</span>
                    <span style={{ fontSize: "0.68rem", fontWeight: 900, letterSpacing: "0.04em", marginTop: "1px" }}>#4</span>
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      color: "var(--gold-700)",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    UN SDG Goal 04
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    Quality Education
                  </h3>
                </div>
              </div>

              {/* Core Text */}
              <p style={{ fontSize: "1.04rem", lineHeight: 1.75, color: "var(--ink-700)", margin: "0 0 24px", flexGrow: 1 }}>
                <strong>Quality Education:</strong> Rural libraries, merit sponsorships, and holistic classroom empowerment.
              </p>

              {/* Action Pillars Strip */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "18px", borderTop: "1px solid rgba(217, 175, 82, 0.18)" }}>
                <span style={{ background: "rgba(217, 175, 82, 0.14)", color: "var(--gold-800)", fontSize: "0.78rem", fontWeight: 700, padding: "5px 12px", borderRadius: "20px" }}>
                  Rural Libraries
                </span>
                <span style={{ background: "rgba(217, 175, 82, 0.14)", color: "var(--gold-800)", fontSize: "0.78rem", fontWeight: 700, padding: "5px 12px", borderRadius: "20px" }}>
                  Merit Sponsorships
                </span>
              </div>
            </div>

            {/* INTERLOCKING CHAIN BRIDGE 1 (04 -> 05) */}
            <div className="sdg-chain-bridge" aria-hidden="true">
              <div className="sdg-chain-link-icon-wrap sdg-chain-link-icon-wrap--gold-pink">
                <Link2 size={22} strokeWidth={2.4} />
              </div>
              <div className="sdg-chain-pill">Catalyzes ➔</div>
            </div>

            {/* CARD 2: SDG #5 - GENDER EQUALITY (CHAIN LINK 02: CATALYST) */}
            <div className="sdg-chain-card sdg-chain-card--pink">
              {/* Top Accent Bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "5px",
                  background: "linear-gradient(90deg, #FF4B72, #E5243B)",
                }}
              />

              {/* Chain Badge */}
              <div className="sdg-chain-badge sdg-chain-badge--pink">
                <Link2 size={12} strokeWidth={2.5} /> Link 02 · Catalyst
              </div>

              {/* Hexagon Graphic Badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "22px" }}>
                <div
                  style={{
                    position: "relative",
                    width: "72px",
                    height: "72px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%", filter: "drop-shadow(0 6px 14px rgba(229,36,59,0.38))" }}>
                    <defs>
                      <linearGradient id="sdg5grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF5A79" />
                        <stop offset="100%" stopColor="#E5243B" />
                      </linearGradient>
                    </defs>
                    <polygon points="50,3 93,26 93,74 50,97 7,74 7,26" fill="url(#sdg5grad)" />
                  </svg>
                  {/* Hexagon Inner Content */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      textAlign: "center",
                      paddingTop: "2px",
                    }}
                  >
                    <span style={{ fontSize: "1.3rem", fontWeight: 900, lineHeight: 1 }}>♀</span>
                    <span style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.04em", marginTop: "1px" }}>#5</span>
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      color: "#E5243B",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    UN SDG Goal 05
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    Gender Equality
                  </h3>
                </div>
              </div>

              {/* Core Text */}
              <p style={{ fontSize: "1.04rem", lineHeight: 1.75, color: "var(--ink-700)", margin: "0 0 24px", flexGrow: 1 }}>
                <strong>Gender Equality:</strong> Empowering girl child education and guaranteeing equal leadership access.
              </p>

              {/* Action Pillars Strip */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "18px", borderTop: "1px solid rgba(229, 36, 59, 0.12)" }}>
                <span style={{ background: "rgba(229, 36, 59, 0.08)", color: "#c2182d", fontSize: "0.78rem", fontWeight: 700, padding: "5px 12px", borderRadius: "20px" }}>
                  Girl Child Education
                </span>
                <span style={{ background: "rgba(229, 36, 59, 0.08)", color: "#c2182d", fontSize: "0.78rem", fontWeight: 700, padding: "5px 12px", borderRadius: "20px" }}>
                  Equal Leadership Access
                </span>
              </div>
            </div>

            {/* INTERLOCKING CHAIN BRIDGE 2 (05 -> 10) */}
            <div className="sdg-chain-bridge" aria-hidden="true">
              <div className="sdg-chain-link-icon-wrap sdg-chain-link-icon-wrap--pink-purple">
                <Link2 size={22} strokeWidth={2.4} />
              </div>
              <div className="sdg-chain-pill">Dismantles ➔</div>
            </div>

            {/* CARD 3: SDG #10 - REDUCED INEQUALITIES (CHAIN LINK 03: OUTCOME) */}
            <div className="sdg-chain-card sdg-chain-card--purple">
              {/* Top Accent Bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "5px",
                  background: "linear-gradient(90deg, #6366F1, #4F46E5)",
                }}
              />

              {/* Chain Badge */}
              <div className="sdg-chain-badge sdg-chain-badge--purple">
                <Link2 size={12} strokeWidth={2.5} /> Link 03 · Outcome
              </div>

              {/* Hexagon Graphic Badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "22px" }}>
                <div
                  style={{
                    position: "relative",
                    width: "72px",
                    height: "72px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%", filter: "drop-shadow(0 6px 14px rgba(79,70,229,0.38))" }}>
                    <defs>
                      <linearGradient id="sdg10grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#4F46E5" />
                      </linearGradient>
                    </defs>
                    <polygon points="50,3 93,26 93,74 50,97 7,74 7,26" fill="url(#sdg10grad)" />
                  </svg>
                  {/* Hexagon Inner Content */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      textAlign: "center",
                      paddingTop: "2px",
                    }}
                  >
                    <span style={{ fontSize: "1.25rem", fontWeight: 900, lineHeight: 1 }}>⊜</span>
                    <span style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.04em", marginTop: "1px" }}>#10</span>
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      color: "#4F46E5",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    UN SDG Goal 10
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    Reduced Inequalities
                  </h3>
                </div>
              </div>

              {/* Core Text */}
              <p style={{ fontSize: "1.04rem", lineHeight: 1.75, color: "var(--ink-700)", margin: "0 0 24px", flexGrow: 1 }}>
                <strong>Reduced Inequalities:</strong> Dismantling urban-rural divides for first-generation rural scholars.
              </p>

              {/* Action Pillars Strip */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "18px", borderTop: "1px solid rgba(79, 70, 229, 0.12)" }}>
                <span style={{ background: "rgba(79, 70, 229, 0.08)", color: "#4338ca", fontSize: "0.78rem", fontWeight: 700, padding: "5px 12px", borderRadius: "20px" }}>
                  Urban-Rural Divides
                </span>
                <span style={{ background: "rgba(79, 70, 229, 0.08)", color: "#4338ca", fontSize: "0.78rem", fontWeight: 700, padding: "5px 12px", borderRadius: "20px" }}>
                  First-Gen Scholars
                </span>
              </div>
            </div>
          </div>

          {/* COMPOUNDING CHAIN REACTION EXPLAINER */}
          <div className="sdg-chain-explainer">
            <div className="sdg-chain-explainer__header">
              <span className="sdg-chain-explainer__icon">
                <Link2 size={16} strokeWidth={2.5} />
              </span>
              <h4>The Unbroken Chain of Impact</h4>
            </div>
            <div className="sdg-chain-explainer__grid">
              <div className="sdg-chain-explainer__step">
                <span className="sdg-chain-explainer__num gold">01</span>
                <div>
                  <strong>Quality Education (Root)</strong>
                  <p>Rural libraries and merit scholarships establish foundational literacy and cognitive confidence.</p>
                </div>
              </div>
              <div className="sdg-chain-explainer__connector">➔</div>
              <div className="sdg-chain-explainer__step">
                <span className="sdg-chain-explainer__num pink">02</span>
                <div>
                  <strong>Gender Equality (Catalyst)</strong>
                  <p>Keeping girls in schools and leadership programs accelerates community-wide transformation.</p>
                </div>
              </div>
              <div className="sdg-chain-explainer__connector">➔</div>
              <div className="sdg-chain-explainer__step">
                <span className="sdg-chain-explainer__num purple">03</span>
                <div>
                  <strong>Reduced Inequalities (Outcome)</strong>
                  <p>First-generation rural scholars secure generational social and economic mobility.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/get-involved" className="btn btn-gold" style={{ padding: "14px 34px", fontSize: "0.95rem" }}>
              Support Our Mission <ArrowRight size={15} style={{ marginLeft: "4px" }} />
            </Link>
            <Link href="/programmes" className="btn btn-outline-navy" style={{ padding: "14px 28px", fontSize: "0.95rem" }}>
              Explore Programmes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
