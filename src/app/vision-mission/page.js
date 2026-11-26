import PageHero from "@/components/PageHero";
import {
  Sparkles,
  Eye,
  Target,
  Compass,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Our Vision & Mission · Chamak Foundation",
  description:
    "Our Vision is to build an educated, inclusive, and empowered society where every underprivileged child has access to quality education and equal opportunities.",
};

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Purpose & Direction"
        title="Our Vision & Mission"
      />

      {/* Main Vision & Mission Cards */}
      <section className="section" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="container">
          <div className="grid grid--2" style={{ gap: "32px" }}>
            {/* Our Vision Card */}
            <div id="vision" className="pillar-card pillar-card--vision" style={{ scrollMarginTop: "100px" }}>
              <div className="pillar-card__header">
                <div className="pillar-card__icon">
                  <Eye size={28} strokeWidth={1.8} />
                </div>
                <span className="pillar-badge pillar-badge--gold">
                  <Sparkles size={13} /> The North Star
                </span>
              </div>

              <div className="pillar-card__eyebrow">Our Vision</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.6 }}>
                  <CheckCircle2 size={20} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "3px" }} />
                  <span>To build an educated, inclusive, and empowered society where every underprivileged child has access to quality education and equal opportunities.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.6 }}>
                  <CheckCircle2 size={20} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "3px" }} />
                  <span>To break the cycle of generational poverty through education, knowledge, and social awareness.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.6 }}>
                  <CheckCircle2 size={20} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "3px" }} />
                  <span>To nurture confident, responsible, and self-reliant individuals who contribute to a just and progressive India.</span>
                </li>
              </ul>

            </div>

            {/* Our Mission Card */}
            <div id="mission" className="pillar-card pillar-card--mission" style={{ scrollMarginTop: "100px" }}>
              <div className="pillar-card__header">
                <div className="pillar-card__icon">
                  <Target size={28} strokeWidth={1.8} />
                </div>
                <span className="pillar-badge pillar-badge--navy">
                  <Compass size={13} /> The Action Blueprint
                </span>
              </div>

              <div className="pillar-card__eyebrow">Our Mission</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.6 }}>
                  <CheckCircle2 size={20} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "3px" }} />
                  <span>To empower underprivileged and marginalized children through quality education, mentoring, and guidance.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.6 }}>
                  <CheckCircle2 size={20} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "3px" }} />
                  <span>To promote equitable access to education, life skills development, career guidance, and holistic learning opportunities among rural, tribal, and minority communities.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "1.02rem", color: "var(--ink-700)", lineHeight: 1.6 }}>
                  <CheckCircle2 size={20} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "3px" }} />
                  <span>To create an inclusive and equitable society by nurturing knowledgeable, skilled, confident, and socially responsible citizens.</span>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}

