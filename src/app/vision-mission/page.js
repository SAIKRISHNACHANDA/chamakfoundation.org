import PageHero from "@/components/PageHero";
import { Eye, Target } from "lucide-react";

export const metadata = {
  title: "Our Vision & Mission · Chamak Foundation",
  description:
    "Our Vision is to build an educated, inclusive, and empowered society where every underprivileged child has access to quality education and equal opportunities.",
};

const PILLARS = [
  {
    id: "vision",
    title: "Our Vision",
    Icon: Eye,
    cardBg: "#FFFDF7",
    cardBorder: "rgba(182, 132, 37, 0.35)",
    headerBg: "linear-gradient(135deg, #B68425 0%, #8E6414 100%)",
    headerBorder: "#E6C16E",
    iconBg: "rgba(255, 255, 255, 0.2)",
    iconColor: "#FFFFFF",
    boxBg: "#FEF7E5",
    boxBorder: "rgba(182, 132, 37, 0.35)",
    numBg: "#9E6F1B",
    numColor: "#FFFFFF",
    points: [
      "To build an educated, inclusive, and empowered society where every underprivileged child has access to quality education and equal opportunities.",
      "To break the cycle of generational poverty through education, knowledge, and social awareness.",
      "To nurture confident, responsible, and self-reliant individuals who contribute to a just and progressive India.",
    ],
  },
  {
    id: "mission",
    title: "Our Mission",
    Icon: Target,
    cardBg: "#F8FAFF",
    cardBorder: "rgba(11, 27, 56, 0.2)",
    headerBg: "linear-gradient(135deg, #0B1B38 0%, #163264 100%)",
    headerBorder: "#60A5FA",
    iconBg: "rgba(255, 255, 255, 0.14)",
    iconColor: "#FFFFFF",
    boxBg: "#EEF4FF",
    boxBorder: "rgba(37, 99, 235, 0.22)",
    numBg: "#0B1B38",
    numColor: "#FFFFFF",
    points: [
      "To empower underprivileged and marginalized children through quality education, mentoring, and guidance.",
      "To promote equitable access to education, life skills development, career guidance, and holistic learning opportunities among rural, tribal, and minority communities.",
      "To create an inclusive and equitable society by nurturing knowledgeable, skilled, confident, and socially responsible citizens.",
    ],
  },
];

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Purpose & Direction"
        title="Our Vision & Mission"
      />

      <section className="section" style={{ paddingTop: "60px", paddingBottom: "72px" }}>
        <div className="container">
          <div className="grid grid--2" style={{ gap: "28px", alignItems: "stretch" }}>
            {PILLARS.map((pillar) => {
              const Icon = pillar.Icon;
              return (
                <div
                  key={pillar.id}
                  id={pillar.id}
                  style={{
                    scrollMarginTop: "100px",
                    background: pillar.cardBg,
                    borderRadius: "16px",
                    border: `1.5px solid ${pillar.cardBorder}`,
                    boxShadow: "0 10px 28px rgba(11, 27, 56, 0.06)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Box Header */}
                  <div
                    style={{
                      background: pillar.headerBg,
                      borderBottom: `4px solid ${pillar.headerBorder}`,
                      padding: "22px 26px",
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: pillar.iconBg,
                        color: pillar.iconColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <h2
                      style={{
                        margin: 0,
                        fontFamily: "var(--serif)",
                        fontSize: "1.55rem",
                        fontWeight: 700,
                        color: "#FAF7EF",
                        lineHeight: 1.2,
                      }}
                    >
                      {pillar.title}
                    </h2>
                  </div>

                  {/* Stacked Statement Boxes */}
                  <div
                    style={{
                      padding: "22px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                      flexGrow: 1,
                    }}
                  >
                    {pillar.points.map((point, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: pillar.boxBg,
                          border: `1px solid ${pillar.boxBorder}`,
                          borderRadius: "12px",
                          padding: "16px 18px",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "14px",
                          flexGrow: 1,
                        }}
                      >
                        <span
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "8px",
                            background: pillar.numBg,
                            color: pillar.numColor,
                            fontSize: "0.78rem",
                            fontWeight: 800,
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        >
                          0{idx + 1}
                        </span>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "0.98rem",
                            lineHeight: 1.65,
                            color: "var(--ink-700)",
                          }}
                        >
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
