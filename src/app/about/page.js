import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";

export const metadata = {
  title: "About Us · Chamak Foundation",
  description:
    "Chamak Foundation (Chamak Padhai Se) Non-Profit Organization was launched on 6th October 2023 in Hyderabad by Professor Shantha Sinha. Regd. No. 643/2023 under Telangana Societies Registration Act, 2001.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Chamak Padhai Se · Shine Through Education"
        title="About Chamak Foundation"
        subtitle="Chamak Foundation stands as a symbol of hope, resilience, and transformation—believing firmly that education is the light (“Chamak”) that can illuminate lives and build a better society."
      />

      {/* SECTION 1: THE STORY OF CHAMAK & OFFICIAL LAUNCH */}
      <section className="section" style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="container" style={{ maxWidth: "1140px" }}>
          <div className="grid grid--2" style={{ alignItems: "center", gap: "48px" }}>
            {/* Left Column: Narrative */}
            <div>
              <div className="eyebrow" style={{ color: "var(--gold-600)", marginBottom: "14px" }}>
                <Sparkles size={14} /> Established 6th October 2023 · Hyderabad
              </div>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(2rem, 3.2vw, 2.7rem)",
                  color: "var(--navy-900)",
                  lineHeight: 1.25,
                  marginBottom: "20px",
                }}
              >
                A Symbol of Hope, Resilience &amp; Transformation
              </h2>

              <div
                style={{
                  background: "rgba(217, 175, 82, 0.08)",
                  borderLeft: "4px solid var(--gold-500)",
                  borderRadius: "10px",
                  padding: "16px 20px",
                  marginBottom: "22px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.1rem",
                    lineHeight: 1.65,
                    color: "var(--navy-900)",
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  The word &ldquo;Chamak&rdquo; means &ldquo;Shine&rdquo; in Hindi (Shine through Education). Education is the light that illuminates lives.
                </p>
              </div>

              <p style={{ color: "var(--ink-700)", lineHeight: 1.8, fontSize: "1.04rem", marginBottom: "18px" }}>
                <strong>Chamak Foundation (Chamak Padhai Se) Non-Profit Organization</strong> was launched on <strong>6th October 2023</strong> in Hyderabad by <strong>Professor Shantha Sinha</strong>, a renowned social activist, Ramon Magsaysay Award winner and Former ChairPerson for National Commission for Protection of Child Rights ( NCPCR ) .
              </p>

              <p style={{ color: "var(--ink-700)", lineHeight: 1.8, fontSize: "1.04rem", marginBottom: "26px" }}>
                The NGO is registered with the number <strong>643/2023</strong> under the <strong>Telangana Societies Registration Act, 2001</strong>. Chamak Foundation stands as a symbol of hope, resilience, and transformation—believing firmly that education is the light (&ldquo;Chamak&rdquo;) that can illuminate lives and build a better society.
              </p>

              {/* Registration & Launch Badges */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "#ffffff",
                    border: "1px solid rgba(11,27,56,0.12)",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    boxShadow: "0 4px 14px rgba(11,27,56,0.04)",
                  }}
                >
                  <ShieldCheck size={26} style={{ color: "var(--navy-800)", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--gold-700)", fontWeight: 700 }}>
                      Official Registration
                    </div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--navy-950)" }}>
                      Regd. No. 643/2023
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "#ffffff",
                    border: "1px solid rgba(11,27,56,0.12)",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    boxShadow: "0 4px 14px rgba(11,27,56,0.04)",
                  }}
                >
                  <Award size={26} style={{ color: "var(--gold-600)", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--gold-700)", fontWeight: 700 }}>
                      Inaugurated By
                    </div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--navy-950)" }}>
                      Prof. Shantha Sinha
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Launch Ceremony Photo */}
            <div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(201,154,58,0.35)",
                  boxShadow: "0 18px 45px rgba(11,27,56,0.12)",
                  background: "#ffffff",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "420px" }}>
                  <Image
                    src="/assets/img/about-launch-shantha-sinha.jpg"
                    alt="Chamak Foundation Formal Inauguration in Hyderabad with Prof. Shantha Sinha"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 20%" }}
                    priority
                  />
                </div>
                <div
                  style={{
                    padding: "16px 22px",
                    background: "var(--cream-100)",
                    borderTop: "1px solid rgba(11,27,56,0.08)",
                    fontSize: "0.88rem",
                    color: "var(--navy-900)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    lineHeight: 1.5,
                  }}
                >
                  <Award size={18} style={{ color: "var(--gold-600)", flexShrink: 0 }} />
                  <span>
                    Formal foundation inauguration in Hyderabad on <strong>6 October 2023</strong> with <strong>Prof. Shantha Sinha</strong> (Ramon Magsaysay Awardee &amp; Former Chairperson, NCPCR).
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BEACON OF HOPE & NURTURING LEADERS */}
      <section className="section section--cream2" style={{ paddingTop: "72px", paddingBottom: "80px" }}>
        <div className="container" style={{ maxWidth: "1140px" }}>
          <div className="grid grid--2" style={{ alignItems: "center", gap: "48px" }}>
            {/* Left Column: Leadership & Mentorship Photo */}
            <div style={{ order: 1 }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(11,27,56,0.12)",
                  boxShadow: "0 18px 45px rgba(11,27,56,0.08)",
                  background: "#ffffff",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "420px" }}>
                  <Image
                    src="/assets/img/about-foundation-dignitary.jpg"
                    alt="Chamak Foundation Educational Leadership and Outreach in Telangana"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 15%" }}
                  />
                </div>
                <div
                  style={{
                    padding: "16px 22px",
                    background: "var(--cream-100)",
                    borderTop: "1px solid rgba(11,27,56,0.08)",
                    fontSize: "0.88rem",
                    color: "var(--navy-900)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    lineHeight: 1.5,
                  }}
                >
                  <Sparkles size={18} style={{ color: "var(--gold-600)", flexShrink: 0 }} />
                  <span>
                    Mentorship, educational empowerment, and guidance for aspiring scholars across Telangana.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Mission Narrative */}
            <div style={{ order: 2 }}>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(2rem, 3.2vw, 2.7rem)",
                  color: "var(--navy-900)",
                  lineHeight: 1.25,
                  marginBottom: "20px",
                }}
              >
                Lighting Up the Futures of Disadvantaged Students
              </h2>

              <p style={{ color: "var(--ink-700)", lineHeight: 1.8, fontSize: "1.04rem", marginBottom: "16px" }}>
                <strong>Chamak Foundation</strong>, a beacon of hope in the realm of education, is a non-profit organization dedicated to lighting up the futures of disadvantaged students. Founded on the belief that education is the key to unlocking one&apos;s full potential, we are on a mission to remove the barriers that often stand in the way of aspiring scholars.
              </p>

              <p style={{ color: "var(--ink-700)", lineHeight: 1.8, fontSize: "1.04rem", marginBottom: "0" }}>
                With a passionate team of educators, volunteers, and advocates, Chamak Foundation offers a comprehensive range of services to nurture the talents of tomorrow&apos;s leaders. Our core programs include, mentorship, tutoring, career guidance, and more, all designed to empower students to achieve academic excellence and realize their dreams.
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
