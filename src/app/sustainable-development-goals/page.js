import Link from "next/link";
import PageHero from "@/components/PageHero";

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
                padding: "24px 22px",
                borderRadius: "12px",
                background: "rgba(229, 36, 59, 0.07)",
                borderLeft: "4px solid #e5243b",
              }}
            >
              <span style={{ fontWeight: 800, color: "#e5243b", fontSize: "1rem" }}>SDG #5</span>
              <span style={{ fontSize: "0.98rem", color: "var(--navy-950)", lineHeight: 1.6 }}>
                <strong>Gender Equality:</strong> Empowering girl child education and guaranteeing equal leadership access.
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "24px 22px",
                borderRadius: "12px",
                background: "rgba(217, 175, 82, 0.12)",
                borderLeft: "4px solid #d9af52",
              }}
            >
              <span style={{ fontWeight: 800, color: "#c99a3a", fontSize: "1rem" }}>SDG #4</span>
              <span style={{ fontSize: "0.98rem", color: "var(--navy-950)", lineHeight: 1.6 }}>
                <strong>Quality Education:</strong> Rural libraries, merit sponsorships, and holistic classroom empowerment.
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "24px 22px",
                borderRadius: "12px",
                background: "rgba(79, 70, 229, 0.07)",
                borderLeft: "4px solid #4f46e5",
              }}
            >
              <span style={{ fontWeight: 800, color: "#4f46e5", fontSize: "1rem" }}>SDG #10</span>
              <span style={{ fontSize: "0.98rem", color: "var(--navy-950)", lineHeight: 1.6 }}>
                <strong>Reduced Inequalities:</strong> Dismantling urban-rural divides for first-generation rural scholars.
              </span>
            </div>
          </div>

          {/* Action Button */}
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
