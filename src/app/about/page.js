import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us · Chamak Foundation",
  description:
    "Chamak Foundation (Chamak Padhai Se) Non-Profit Organization was launched on 6th October 2023 in Hyderabad by Professor Shantha Sinha. Regd. No. 643/2023 under Telangana Societies Registration Act, 2001.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Chamak Foundation"
        title="Shine Through Education."
        subtitle="Chamak Foundation stands as a symbol of hope, resilience, and transformation—believing firmly that education is the light that can illuminate lives and build a better society."
      />

      {/* ABOUT CHAMAK FOUNDATION SECTION */}
      <section className="section" id="about-chamak" style={{ paddingTop: "56px", paddingBottom: "70px" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div className="section-head section-head--center section-head--fit">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <Sparkles size={14} /> Who We Are
            </div>
            <h2 className="section-title--oneline">About Chamak Foundation</h2>
            <p style={{ marginTop: "10px", color: "var(--ink-500)", maxWidth: "60ch", marginLeft: "auto", marginRight: "auto" }}>
              Lighting up the futures of disadvantaged students through the transformative power of education.
            </p>
          </div>

          {/* Quick Key Facts Strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
              margin: "32px 0 36px",
            }}
          >
            <div style={{ background: "#fff", border: "1px solid rgba(201,154,58,0.28)", borderRadius: "16px", padding: "20px 22px", boxShadow: "0 6px 20px rgba(11,27,56,0.04)" }}>
              <div style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, color: "var(--gold-700)", marginBottom: "6px" }}>Official Registration</div>
              <div style={{ fontSize: "1.12rem", fontWeight: 800, color: "var(--navy-900)" }}>Regd. No. 643/2023</div>
              <div style={{ fontSize: "0.82rem", color: "var(--ink-500)", marginTop: "3px" }}>Telangana Societies Registration Act, 2001</div>
            </div>

            <div style={{ background: "#fff", border: "1px solid rgba(201,154,58,0.28)", borderRadius: "16px", padding: "20px 22px", boxShadow: "0 6px 20px rgba(11,27,56,0.04)" }}>
              <div style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, color: "var(--gold-700)", marginBottom: "6px" }}>Inauguration Date</div>
              <div style={{ fontSize: "1.12rem", fontWeight: 800, color: "var(--navy-900)" }}>6th October 2023</div>
              <div style={{ fontSize: "0.82rem", color: "var(--ink-500)", marginTop: "3px" }}>Launched in Hyderabad, Telangana</div>
            </div>

            <div style={{ background: "#fff", border: "1px solid rgba(201,154,58,0.28)", borderRadius: "16px", padding: "20px 22px", boxShadow: "0 6px 20px rgba(11,27,56,0.04)" }}>
              <div style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, color: "var(--gold-700)", marginBottom: "6px" }}>Inaugurated By</div>
              <div style={{ fontSize: "1.12rem", fontWeight: 800, color: "var(--navy-900)" }}>Prof. Shantha Sinha</div>
              <div style={{ fontSize: "0.82rem", color: "var(--ink-500)", marginTop: "3px" }}>Ramon Magsaysay Awardee &amp; Former NCPCR ChairPerson</div>
            </div>

            <div style={{ background: "#fff", border: "1px solid rgba(201,154,58,0.28)", borderRadius: "16px", padding: "20px 22px", boxShadow: "0 6px 20px rgba(11,27,56,0.04)" }}>
              <div style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, color: "var(--gold-700)", marginBottom: "6px" }}>Meaning &amp; Motto</div>
              <div style={{ fontSize: "1.12rem", fontWeight: 800, color: "var(--navy-900)" }}>&ldquo;Chamak&rdquo; = Shine</div>
              <div style={{ fontSize: "0.82rem", color: "var(--ink-500)", marginTop: "3px" }}>Shine Through Education (Chamak Padhai Se)</div>
            </div>
          </div>

          {/* Narrative Card */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid rgba(11,27,56,0.1)",
              borderRadius: "20px",
              padding: "clamp(26px, 3.8vw, 44px)",
              boxShadow: "0 12px 36px rgba(11,27,56,0.05)",
            }}
          >
            <p style={{ fontSize: "1.06rem", lineHeight: 1.85, color: "var(--navy-950)", marginBottom: "20px", fontWeight: 500 }}>
              <strong>Chamak Foundation (Chamak Padhai Se) Non-Profit Organization</strong> was launched on <strong>6th October 2023</strong> in Hyderabad by <strong>Professor Shantha Sinha</strong>, a renowned social activist, Ramon Magsaysay Award winner and Former ChairPerson for National Commission for Protection of Child Rights ( NCPCR ) . The NGO is registered with the number <strong>643/2023</strong> under the <strong>Telangana Societies Registration Act, 2001</strong>. The word <em>&ldquo;Chamak &rdquo;</em> means <em>&ldquo;Shine&rdquo;</em> in Hindi. (Shine through Education) Chamak Foundation stands as a symbol of hope, resilience, and transformation—believing firmly that education is the light (<em>&ldquo;Chamak&rdquo;</em>) that can illuminate lives and build a better society.
            </p>

            <p style={{ fontSize: "1.02rem", lineHeight: 1.8, color: "var(--ink-700)", marginBottom: "20px" }}>
              Chamak Foundation, a beacon of hope in the realm of education, is a non-profit organization dedicated to lighting up the futures of disadvantaged students. Founded on the belief that education is the key to unlocking one&apos;s full potential, we are on a mission to remove the barriers that often stand in the way of aspiring scholars. With a passionate team of educators, volunteers, and advocates, Chamak Foundation offers a comprehensive range of services to nurture the talents of tomorrow&apos;s leaders. Our core programs include, mentorship, tutoring, career guidance, and more, all designed to empower students to achieve academic excellence and realize their dreams.
            </p>

            <p style={{ fontSize: "1.02rem", lineHeight: 1.8, color: "var(--ink-700)", margin: "0 0 32px" }}>
              Since our inception, Chamak Foundation has made a profound impact on the lives of hundreds of students, enabling them to pursue higher education, overcome financial hardships, and reach their career aspirations. Our success stories are a testament to the life-changing work we do.
            </p>

            {/* Quick Action Links */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", paddingTop: "24px", borderTop: "1px solid rgba(11,27,56,0.08)" }}>
              <Link href="/vision-mission" className="btn btn-navy">
                Our Vision &amp; Mission <ArrowRight size={14} style={{ marginLeft: "4px" }} />
              </Link>
              <Link href="/programmes" className="btn btn-outline-navy">
                Our Programmes
              </Link>
              <Link href="/get-involved" className="btn btn-gold">
                Support Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
