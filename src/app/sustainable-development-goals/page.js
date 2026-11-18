import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Sustainable Development Goals (SDGs) · Chamak Foundation",
  description:
    "How Chamak Foundation aligns grassroots educational action in Telangana with United Nations Sustainable Development Goals: SDG 4 (Quality Education), SDG 5 (Gender Equality), and SDG 10 (Reduced Inequalities).",
};

export default function SustainableDevelopmentGoalsPage() {
  return (
    <>
      <PageHero
        title="Sustainable Development Goals"
      />

      <section className="section" style={{ paddingTop: "60px", paddingBottom: "80px" }}>
        <div className="container" style={{ maxWidth: "1080px" }}>
          {/* Heading & Text */}
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 40px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <Sparkles size={14} /> GLOBAL STANDARDS, GRASSROOTS ACTION
            </div>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 3vw, 2.7rem)",
                color: "var(--navy-900)",
                margin: "12px 0 20px",
                lineHeight: 1.25,
              }}
            >
              Translating Global Goals Into Grassroots Miracles
            </h2>
            <p style={{ color: "var(--ink-600)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "18px" }}>
              In 2015, the United Nations adopted the 17 Sustainable Development Goals (SDGs) as a universal call to end poverty, protect the planet, and ensure that all people enjoy peace and prosperity by 2030.
            </p>
            <p style={{ color: "var(--ink-600)", fontSize: "1.05rem", lineHeight: 1.8, margin: 0 }}>
              At <strong>Chamak Foundation (Chamak Padhai Se)</strong>, founded by National Youth Awardee Dr. Mohammad Azam Ali, we anchor our grassroots operations around three deeply intertwined goals that create compound generational progress: <strong>Quality Education (SDG 4)</strong>, <strong>Gender Equality (SDG 5)</strong>, and <strong>Reduced Inequalities (SDG 10)</strong>.
            </p>
          </div>

          {/* The 3 SDG Items Placed Horizontally */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px 22px",
                borderRadius: "12px",
                background: "rgba(229, 36, 59, 0.07)",
                borderLeft: "4px solid #e5243b",
              }}
            >
              <span style={{ fontWeight: 800, color: "#e5243b", fontSize: "0.95rem" }}>SDG #5</span>
              <span style={{ fontSize: "0.95rem", color: "var(--navy-950)", lineHeight: 1.6 }}>
                <strong>Gender Equality:</strong> Empowering girl child education and guaranteeing equal leadership access.
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px 22px",
                borderRadius: "12px",
                background: "rgba(217, 175, 82, 0.12)",
                borderLeft: "4px solid #d9af52",
              }}
            >
              <span style={{ fontWeight: 800, color: "#c99a3a", fontSize: "0.95rem" }}>SDG #4</span>
              <span style={{ fontSize: "0.95rem", color: "var(--navy-950)", lineHeight: 1.6 }}>
                <strong>Quality Education:</strong> Rural libraries, merit sponsorships, and holistic classroom empowerment.
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px 22px",
                borderRadius: "12px",
                background: "rgba(79, 70, 229, 0.07)",
                borderLeft: "4px solid #4f46e5",
              }}
            >
              <span style={{ fontWeight: 800, color: "#4f46e5", fontSize: "0.95rem" }}>SDG #10</span>
              <span style={{ fontSize: "0.95rem", color: "var(--navy-950)", lineHeight: 1.6 }}>
                <strong>Reduced Inequalities:</strong> Dismantling urban-rural divides for first-generation rural scholars.
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/get-involved" className="btn btn-gold">
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
