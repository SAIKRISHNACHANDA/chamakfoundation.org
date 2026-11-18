import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import {
  Library,
  Award,
  Sparkles,
  Quote,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  HeartHandshake,
  Users,
  Building,
  Languages,
  Milestone,
  Flag,
  Globe,
  Eye,
  Target,
  Compass,
  Smile,
} from "lucide-react";

export const metadata = {
  title: "About Us · Vision & Mission · Programmes · Chamak Foundation",
  description:
    "Learn about Chamak Foundation (Chamak Padhai Se), launched on 6th October 2023 by Prof. Shantha Sinha, our Vision, Mission, Programmes, and Founder Dr. Mohammad Azam Ali.",
};

const MAJOR_AWARDS = [
  { num: "01", name: "President of India NSS National Award", year: "2012–13", conferredBy: "Conferred by President Pranab Mukherjee at Rashtrapati Bhavan" },
  { num: "02", name: "National Youth Award", year: "2017–18", conferredBy: "Ministry of Youth Affairs and Sports, Govt of India at Vigyan Bhavan" },
  { num: "03", name: "Maulana Azad National Award", year: "2018", conferredBy: "Recognizing outstanding educational & social leadership" },
  { num: "04", name: "UN World Environment Day Hero", year: "2019", conferredBy: "United Nations Environment Programme youth recognition" },
  { num: "05", name: "Rashtriya Gaurav Samman", year: "2018", conferredBy: "National honor for commendable social service" },
  { num: "06", name: "State-Level Pratibha Puraskar Award", year: "2008", conferredBy: "Govt of Andhra Pradesh (Rank 2 in State at Intermediate)" },
  { num: "07", name: "State Best NSS Volunteer Award", year: "2012–13", conferredBy: "State Government of Andhra Pradesh" },
  { num: "08", name: "Ideal Teacher Award", year: "2021", conferredBy: "Recognizing pedagogical excellence and student mentoring" },
];

const EMINENT_DIGNITARIES = [
  { name: "Smt. Droupadi Murmu", role: "Hon'ble President of India", desc: "Interacted at Raj Bhavan, Telangana; commended Dr. Azam Ali's grassroots humanitarian and education drive." },
  { name: "Late Shri Pranab Mukherjee", role: "Former President of India", desc: "Presented the prestigious Indira Gandhi NSS National Award 2012–13 at Rashtrapati Bhavan." },
  { name: "Shri M. Venkaiah Naidu", role: "Former Vice President of India", desc: "Appreciated his dedicated youth mobilization and social empowerment work." },
  { name: "Smt. Tamilisai Soundararajan", role: "Former Governor of Telangana", desc: "Commended Dr. Azam Ali's educational outreach in rural and underserved communities." },
  { name: "Shri Kailash Satyarthi", role: "Nobel Peace Laureate", desc: "Applauded Dr. Azam Ali's fight against child labour and promotion of child education." },
  { name: "Anna Hazare", role: "Renowned Social Crusader", desc: "Endorsed his anti-corruption, RTI, and civic awareness work with youth." },
  { name: "Prof. Shantha Sinha", role: "Ramon Magsaysay Awardee", desc: "Child rights pioneer who formally inaugurated Chamak Foundation on 6 October 2023." },
  { name: "Dr. Jayaprakash Narayan", role: "Former IAS officer & Founder, Lok Satta", desc: "Mentored his civic governance, voter awareness, and electoral reform work." },
  { name: "Shri V. V. Lakshminarayana", role: "Former IPS Officer (JD)", desc: "Commended Dr. Azam Ali's motivational lectures and youth character building." },
  { name: "Shri Sandeep Pandey", role: "Ramon Magsaysay Awardee", desc: "Appreciated his dedication to grassroots educational equality." },
  { name: "Padma Shri Vanajeevi Ramaiah", role: "Renowned Environmentalist", desc: "Applauded Dr. Azam Ali's mass tree plantation and green campaigns." },
  { name: "Shri Anurag Singh Thakur", role: "Former Union Cabinet Minister", desc: "Conferred the National Youth Award at Vigyan Bhavan, New Delhi." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Chamak Foundation"
        title="Shine Through Education."
        subtitle="Chamak Foundation stands as a symbol of hope, resilience, and transformation—believing firmly that education is the light that can illuminate lives and build a better society."
      />

      {/* 1. ABOUT CHAMAK FOUNDATION SECTION */}
      <section className="section" id="about-chamak" style={{ paddingTop: "56px", paddingBottom: "48px" }}>
        <div className="container">
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

            <p style={{ fontSize: "1.02rem", lineHeight: 1.8, color: "var(--ink-700)", margin: 0 }}>
              Since our inception, Chamak Foundation has made a profound impact on the lives of hundreds of students, enabling them to pursue higher education, overcome financial hardships, and reach their career aspirations. Our success stories are a testament to the life-changing work we do.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR VISION & MISSION SECTION */}
      <section className="section section--cream2" id="vision-mission" style={{ scrollMarginTop: "90px" }}>
        <div className="container">
          <div className="section-head section-head--center section-head--fit">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <Target size={14} /> Purpose &amp; Direction
            </div>
            <h2 className="section-title--oneline">Our Vision &amp; Mission</h2>
            <p style={{ marginTop: "10px", color: "var(--ink-500)", maxWidth: "56ch", marginLeft: "auto", marginRight: "auto" }}>
              The foundational commitments that guide Chamak Foundation&apos;s daily efforts and long-term service to society.
            </p>
          </div>

          <div className="grid grid--2" style={{ gap: "28px", marginTop: "36px" }}>
            {/* Our Vision Card */}
            <div id="vision" className="pillar-card pillar-card--vision" style={{ scrollMarginTop: "100px" }}>
              <div className="pillar-card__header">
                <div className="pillar-card__icon">
                  <Eye size={26} strokeWidth={1.8} />
                </div>
                <span className="pillar-badge pillar-badge--gold">
                  <Sparkles size={13} /> The North Star
                </span>
              </div>

              <div className="pillar-card__eyebrow">Our Vision</div>
              <h3 className="pillar-card__title" style={{ fontSize: "1.28rem", lineHeight: 1.5, color: "var(--navy-900)" }}>
                To build an inclusive and educated India where every underprivileged child has access to quality education, equal opportunities, and the confidence to shine in life with dignity and self-reliance.
              </h3>

              <div className="pillar-card__footer" style={{ marginTop: "auto" }}>
                <span className="pillar-tag"><span className="dot" /> Inclusive India</span>
                <span className="pillar-tag"><span className="dot" /> Quality Education</span>
                <span className="pillar-tag"><span className="dot" /> Equal Opportunities</span>
                <span className="pillar-tag"><span className="dot" /> Dignity &amp; Self-Reliance</span>
              </div>
            </div>

            {/* Our Mission Card */}
            <div id="mission" className="pillar-card pillar-card--mission" style={{ scrollMarginTop: "100px" }}>
              <div className="pillar-card__header">
                <div className="pillar-card__icon">
                  <Target size={26} strokeWidth={1.8} />
                </div>
                <span className="pillar-badge pillar-badge--navy">
                  <Compass size={13} /> The Action Blueprint
                </span>
              </div>

              <div className="pillar-card__eyebrow">Our Mission</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.98rem", color: "var(--ink-700)", lineHeight: 1.6 }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "3px" }} />
                  <span>To empower marginalized and disadvantaged students through education.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.98rem", color: "var(--ink-700)", lineHeight: 1.6 }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "3px" }} />
                  <span>To promote equitable access to primary, secondary, and higher education.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.98rem", color: "var(--ink-700)", lineHeight: 1.6 }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "3px" }} />
                  <span>To create awareness about the transformative power of education in rural, tribal, and minority communities.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.98rem", color: "var(--ink-700)", lineHeight: 1.6 }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "3px" }} />
                  <span>To nurture socially responsible, skilled, and value-driven citizens for nation-building.</span>
                </li>
              </ul>

              <div className="pillar-card__footer" style={{ marginTop: "auto" }}>
                <span className="pillar-tag"><span className="dot" /> Marginalized Students</span>
                <span className="pillar-tag"><span className="dot" /> Equitable Access</span>
                <span className="pillar-tag"><span className="dot" /> Community Awareness</span>
                <span className="pillar-tag"><span className="dot" /> Nation Building</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PROGRAMMES SECTION */}
      <section className="section" id="programmes" style={{ scrollMarginTop: "90px" }}>
        <div className="container">
          <div className="section-head section-head--center section-head--fit">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <BookOpen size={14} /> Core Initiatives
            </div>
            <h2 className="section-title--oneline">Our Programmes</h2>
            <p style={{ marginTop: "10px", color: "var(--ink-500)", maxWidth: "58ch", marginLeft: "auto", marginRight: "auto" }}>
              Four strategic pillars designed to nurture talent, bridge educational gaps, and unlock potential from classrooms to policy.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "36px" }}>
            {/* 1 Career Guidance Programmes */}
            <div className="card" style={{ padding: "32px 28px", background: "#fff", border: "1px solid rgba(201,154,58,0.25)", borderRadius: "18px", boxShadow: "0 8px 24px rgba(11,27,56,0.04)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <span style={{ fontFamily: "var(--num)", fontSize: "1.1rem", fontWeight: 700, color: "var(--gold-600)" }}>01</span>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(201,154,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-700)" }}>
                  <Compass size={22} />
                </div>
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", color: "var(--navy-900)", margin: "0 0 16px", fontWeight: 700 }}>
                Career Guidance Programmes
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", flexGrow: 1 }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.55 }}>
                  <CheckCircle2 size={16} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "2px" }} />
                  <span>Career counseling for school and college students.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.55 }}>
                  <CheckCircle2 size={16} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "2px" }} />
                  <span>Competitive exam awareness sessions.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.55 }}>
                  <CheckCircle2 size={16} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "2px" }} />
                  <span>Civil Services awareness and mentoring initiatives.</span>
                </li>
              </ul>
            </div>

            {/* 2 Life Skills Education */}
            <div className="card" style={{ padding: "32px 28px", background: "#fff", border: "1px solid rgba(201,154,58,0.25)", borderRadius: "18px", boxShadow: "0 8px 24px rgba(11,27,56,0.04)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <span style={{ fontFamily: "var(--num)", fontSize: "1.1rem", fontWeight: 700, color: "var(--gold-600)" }}>02</span>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(11,27,56,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--navy-900)" }}>
                  <Smile size={22} />
                </div>
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", color: "var(--navy-900)", margin: "0 0 16px", fontWeight: 700 }}>
                Life Skills Education
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", flexGrow: 1 }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.55 }}>
                  <CheckCircle2 size={16} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "2px" }} />
                  <span>Leadership development</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.55 }}>
                  <CheckCircle2 size={16} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "2px" }} />
                  <span>Communication skills</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.55 }}>
                  <CheckCircle2 size={16} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "2px" }} />
                  <span>Emotional intelligence</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.55 }}>
                  <CheckCircle2 size={16} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "2px" }} />
                  <span>Personality development</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.55 }}>
                  <CheckCircle2 size={16} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "2px" }} />
                  <span>Decision-making skills</span>
                </li>
              </ul>
            </div>

            {/* 3 Community Library Initiatives */}
            <div className="card" style={{ padding: "32px 28px", background: "#fff", border: "1px solid rgba(201,154,58,0.25)", borderRadius: "18px", boxShadow: "0 8px 24px rgba(11,27,56,0.04)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <span style={{ fontFamily: "var(--num)", fontSize: "1.1rem", fontWeight: 700, color: "var(--gold-600)" }}>03</span>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(201,154,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-700)" }}>
                  <Library size={22} />
                </div>
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", color: "var(--navy-900)", margin: "0 0 16px", fontWeight: 700 }}>
                Community Library Initiatives
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", flexGrow: 1 }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.55 }}>
                  <CheckCircle2 size={16} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "2px" }} />
                  <span>Establishing libraries in rural, tribal, and minority areas.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.55 }}>
                  <CheckCircle2 size={16} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "2px" }} />
                  <span>Promoting reading culture and knowledge accessibility.</span>
                </li>
              </ul>
            </div>

            {/* 4 Education Dialogue, Policy & Professional Development Programme */}
            <div className="card" style={{ padding: "32px 28px", background: "#fff", border: "1px solid rgba(201,154,58,0.25)", borderRadius: "18px", boxShadow: "0 8px 24px rgba(11,27,56,0.04)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <span style={{ fontFamily: "var(--num)", fontSize: "1.1rem", fontWeight: 700, color: "var(--gold-600)" }}>04</span>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(11,27,56,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--navy-900)" }}>
                  <GraduationCap size={22} />
                </div>
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", color: "var(--navy-900)", margin: "0 0 16px", fontWeight: 700 }}>
                Education Dialogue, Policy &amp; Professional Development Programme
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", flexGrow: 1 }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.55 }}>
                  <CheckCircle2 size={16} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "2px" }} />
                  <span>Organizing seminars and symposiums on educational issues, trends, and challenges.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", color: "var(--ink-600)", lineHeight: 1.55 }}>
                  <CheckCircle2 size={16} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "2px" }} />
                  <span>Creating platforms for educators, researchers, and policymakers.</span>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/programmes" className="btn btn-navy">
              Explore Detailed Programmes &amp; How to Support <ArrowRight size={15} style={{ marginLeft: "4px" }} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER COMPREHENSIVE BIOGRAPHY SECTION */}
      <section className="section founder-cv-section" id="founder" style={{ scrollMarginTop: "90px" }}>
        <div className="container">
          <div className="founder-cv-grid">
            {/* Left: Founder Portrait & Sticky Sidebar */}
            <div className="founder-cv-sidebar">
              <div className="founder-cv-portrait-card">
                <div className="founder-cv-portrait">
                  <Image
                    src="/assets/team/dr-azam-ali-portrait.jpg"
                    alt="Dr. Mohammad Azam Ali - Founder & President, Chamak Foundation"
                    width={480}
                    height={580}
                    priority
                    className="founder-cv-portrait__img"
                  />
                  <div className="founder-cv-portrait__badge">
                    Founder &amp; President
                  </div>
                </div>

                <div className="founder-cv-card-body">
                  <h3 className="founder-cv-name">Dr. Mohammad Azam Ali</h3>
                  <p className="founder-cv-qualifications">M.A, M.Ed, Ph.D</p>
                  <p className="founder-cv-role">Assistant Professor of English, National Awardee &amp; Social Activist</p>

                  <div className="founder-cv-meta-list">
                    <div className="founder-cv-meta-item">
                      <GraduationCap size={18} className="founder-cv-meta-icon" />
                      <div>
                        <strong>Doctorate &amp; Double Masters</strong>
                        <span>Ph.D. in English (Kakatiya Univ.) · M.Ed. · M.A.</span>
                      </div>
                    </div>
                    <div className="founder-cv-meta-item">
                      <Award size={18} className="founder-cv-meta-icon" />
                      <div>
                        <strong>President of India Awardee</strong>
                        <span>NSS National Award &amp; National Youth Award</span>
                      </div>
                    </div>
                    <div className="founder-cv-meta-item">
                      <Building size={18} className="founder-cv-meta-icon" />
                      <div>
                        <strong>Academic Leadership</strong>
                        <span>HOD English &amp; Chairperson, Board of Studies</span>
                      </div>
                    </div>
                    <div className="founder-cv-meta-item">
                      <Sparkles size={18} className="founder-cv-meta-icon" />
                      <div>
                        <strong>1,000+ Lectures Delivered</strong>
                        <span>Trained 20,000+ students in communication &amp; career</span>
                      </div>
                    </div>
                    <div className="founder-cv-meta-item">
                      <ShieldCheck size={18} className="founder-cv-meta-icon" />
                      <div>
                        <strong>Founder President</strong>
                        <span>Chamak Foundation (Regd. No. 643/2023)</span>
                      </div>
                    </div>
                  </div>

                  {/* Connect with Dr. Azam Ali Directly */}
                  <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(11,27,56,0.08)" }}>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-400)", marginBottom: "12px" }}>
                      Connect with Dr. Azam Ali
                    </div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <a
                        href="https://www.linkedin.com/in/dr-mohammad-azam-ali-08a2ab143?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Dr. Azam Ali LinkedIn"
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "50%",
                          border: "1px solid rgba(11,27,56,0.14)",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--navy-900)",
                          background: "#fff",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6"/><path d="M7.5 10v6.5M7.5 7.5v.01M11.5 16.5V13c0-1.4 1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                      </a>
                      <a
                        href="https://www.instagram.com/mohammad_azam_ali_activist?igsh=MWwwa3EzYXRxbTVzOA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Dr. Azam Ali Instagram"
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "50%",
                          border: "1px solid rgba(11,27,56,0.14)",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--navy-900)",
                          background: "#fff",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor"/></svg>
                      </a>
                      <a
                        href="https://x.com/AzamActivist"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Dr. Azam Ali X"
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "50%",
                          border: "1px solid rgba(11,27,56,0.14)",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--navy-900)",
                          background: "#fff",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </a>
                      <a
                        href="https://www.facebook.com/share/1TsEuQEAcp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Dr. Azam Ali Facebook"
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "50%",
                          border: "1px solid rgba(11,27,56,0.14)",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--navy-900)",
                          background: "#fff",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z" fill="currentColor"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Full Comprehensive Biography */}
            <div className="founder-cv-main">
              {/* Header Eyebrow */}
              <div className="founder-cv-eyebrow">
                <span className="founder-cv-eyebrow__line" />
                <span className="founder-cv-eyebrow__icon">
                  <Sparkles size={18} />
                </span>
                <span>A Journey of Indomitable Spirit</span>
              </div>

              <h2 className="founder-cv-heading" style={{ fontSize: "clamp(1.9rem, 2.7vw, 2.5rem)", lineHeight: 1.25 }}>
                Dr. Mohammad Azam Ali: From Dropout to Doctorate
              </h2>
              
              <p className="founder-cv-lead">
                <strong>Dr. Mohammad Azam Ali</strong> is a prominent Indian social activist and educator from Telangana. Born into a poor working-class family in Chirlavancha village, he overcame acute financial hardships, child labour, and personal struggles through sheer determination and the transformative power of education. 
              </p>

              <p style={{ color: "var(--ink-600)", lineHeight: 1.8, fontSize: "1.02rem", marginBottom: "28px" }}>
                He went on to earn a <strong>Ph.D. in English from Kakatiya University</strong>, won the prestigious <strong>President of India NSS National Award</strong> and the <strong>National Youth Award</strong> from the Union Ministry of Youth Affairs and Sports, and has trained more than 20,000 engineering students in communication and life skills. As the Founder President of Chamak Foundation, he has turned his personal struggle into an institutional mission to ensure that no child’s future is silenced by poverty.
              </p>

              {/* 1. EARLY LIFE & STRUGGLE */}
              <div className="founder-cv-section-box">
                <div className="founder-cv-section-head">
                  <div className="founder-cv-section-icon">
                    <Milestone size={20} />
                  </div>
                  <h3 className="founder-cv-section-title">Early Life and Struggle</h3>
                </div>
                <p style={{ color: "var(--ink-600)", lineHeight: 1.78, fontSize: "0.98rem", margin: "0 0 14px" }}>
                  Dr. Mohammad Azam Ali was born on <strong>5 August 1991</strong> in Chirlavancha village of Siricilla Mandal in the erstwhile Karimnagar district of Telangana. He was the fifth child of <strong>Ahmed Hussain</strong>, a lorry driver, and <strong>Khalida Begum</strong>, a daily wage labourer. His parents struggled every day to provide food, shelter, and education to their children in a home where survival itself was uncertain.
                </p>
                <p style={{ color: "var(--ink-600)", lineHeight: 1.78, fontSize: "0.98rem", margin: "0 0 14px" }}>
                  When opportunities in their village became scarce, the family migrated to Karimnagar town in search of livelihood. Life remained intensely difficult: Azam studied exclusively in government schools because private education was unimaginable. Many days passed without proper meals, rent was a recurring ordeal, and books, uniforms, and stationery were luxuries. Despite these hardships, his mother fiercely believed that education was the only way her children could break the shackles of poverty.
                </p>
                <p style={{ color: "var(--ink-600)", lineHeight: 1.78, fontSize: "0.98rem", margin: "0 0 14px" }}>
                  During his schooling years, tragedy struck when his father abandoned the family. Left with no steady income, Khalida Begum carried the sole responsibility of raising her children as a daily wage labourer under harsh conditions, never permitting them to lose hope. Her quiet sacrifices left an indelible imprint on young Azam’s consciousness.
                </p>
                <div style={{ background: "rgba(201,154,58,0.08)", borderLeft: "4px solid var(--gold-500)", padding: "16px 20px", borderRadius: "10px", margin: "16px 0" }}>
                  <div style={{ fontWeight: 700, color: "var(--navy-900)", marginBottom: "4px" }}>The Turning Point on a Village Wall</div>
                  <p style={{ color: "var(--ink-700)", fontSize: "0.94rem", lineHeight: 1.7, margin: 0 }}>
                    In the 8th standard, severe financial distress forced Azam to discontinue school for an entire year. To earn a few rupees for his family, he took up work as a <strong>wall poster boy</strong>—sticking posters on walls and tying banners in streets. One afternoon, while pasting posters, his eyes fell upon a slogan painted on a wall: <em>&ldquo;Sarva Shiksha Abhiyan – Education for All, Sab Padhe – Sab Bade.&rdquo;</em> Those words struck deep into his soul, igniting the realization that education alone could rewrite his destiny. Gathering courage, he approached his teachers; deeply moved by his plight, they stepped forward with personal financial and emotional support to bring him back into the classroom.
                  </p>
                </div>
              </div>

              {/* 2. ACADEMIC JOURNEY AGAINST ALL ODDS */}
              <div className="founder-cv-section-box">
                <div className="founder-cv-section-head">
                  <div className="founder-cv-section-icon">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="founder-cv-section-title">Academic Journey Against All Odds</h3>
                </div>
                <div className="cv-timeline">
                  <div className="cv-item">
                    <div className="cv-item__header">
                      <h4 className="cv-item__title">Doctor of Philosophy (Ph.D.) in English</h4>
                      <span className="cv-item__badge">2018 – 2022</span>
                    </div>
                    <div className="cv-item__subtitle">Kakatiya University, Warangal</div>
                    <p className="cv-item__desc">
                      Secured <strong>First Rank in the Ph.D. Entrance Examination</strong> and completed doctoral research on Indian youth literature, proving to rural students across the state that higher academic excellence is within reach.
                    </p>
                  </div>

                  <div className="cv-item">
                    <div className="cv-item__header">
                      <h4 className="cv-item__title">Master of Education (M.Ed.) &amp; State Eligibility Test (SET)</h4>
                      <span className="cv-item__badge">Post-Graduate</span>
                    </div>
                    <div className="cv-item__subtitle">University College of Education, Kakatiya University</div>
                    <p className="cv-item__desc">
                      Specialized in pedagogy and educational psychology, successfully qualifying the State Eligibility Test (SET) in both English and Education.
                    </p>
                  </div>

                  <div className="cv-item">
                    <div className="cv-item__header">
                      <h4 className="cv-item__title">Master of Arts (M.A.) in English Literature</h4>
                      <span className="cv-item__badge">2012 – 2014</span>
                    </div>
                    <div className="cv-item__subtitle">Kakatiya University, Warangal</div>
                    <p className="cv-item__desc">
                      Transitioning from Telugu-medium schooling into Master-level English literature was a grueling challenge. Encouraged by his mentor Syed Moin Ahmed, Azam read English newspapers daily, practiced public speaking for hours, and graduated with distinction.
                    </p>
                  </div>

                  <div className="cv-item">
                    <div className="cv-item__header">
                      <h4 className="cv-item__title">Bachelor of Arts — B.A. (H.E.P.)</h4>
                      <span className="cv-item__badge">2008 – 2011</span>
                    </div>
                    <div className="cv-item__subtitle">SRR Government Degree College, Karimnagar</div>
                    <p className="cv-item__desc">
                      Although he qualified the prestigious APRDC entrance for Nagarjunasagar, financial constraints prevented him from travelling for counselling. Undeterred, he joined SRR Govt Degree College and graduated at the top of his cohort.
                    </p>
                  </div>

                  <div className="cv-item">
                    <div className="cv-item__header">
                      <h4 className="cv-item__title">Intermediate (H.E.C.) — State 2nd Rank &amp; Pratibha Puraskar</h4>
                      <span className="cv-item__badge">2006 – 2008</span>
                    </div>
                    <div className="cv-item__subtitle">Govt. Junior College Arts &amp; Commerce, Karimnagar</div>
                    <p className="cv-item__desc">
                      Scored 873 out of 1000 marks, standing <strong>second at the State Level</strong> across Andhra Pradesh and receiving the prestigious <strong>State-Level Pratibha Puraskar Award 2008</strong> from the Government of Andhra Pradesh.
                    </p>
                  </div>

                  <div className="cv-item">
                    <div className="cv-item__header">
                      <h4 className="cv-item__title">Secondary School Certificate (SSC)</h4>
                      <span className="cv-item__badge">March 2006</span>
                    </div>
                    <div className="cv-item__subtitle">Government High School, Padmanagar</div>
                    <p className="cv-item__desc">
                      Secured Second Rank in his school in SSC board examinations, cementing his conviction that poverty would never dictate his ceiling.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. LEARNING ENGLISH: A LIFE-CHANGING DECISION */}
              <div className="founder-cv-section-box">
                <div className="founder-cv-section-head">
                  <div className="founder-cv-section-icon">
                    <Languages size={20} />
                  </div>
                  <h3 className="founder-cv-section-title">Learning English: A Life-Changing Decision</h3>
                </div>
                <p style={{ color: "var(--ink-600)", lineHeight: 1.78, fontSize: "0.98rem", margin: "0 0 14px" }}>
                  A defining moment occurred during a <strong>National Integration Camp at JNTU Kakinada in 2010</strong>. Azam was invited to speak on <em>&ldquo;National Integration and Role of Youth.&rdquo;</em> When he spoke passionately in Telugu, the organizers halted him and insisted he speak in English or Hindi. Leaving the stage feeling deeply humiliated, he resolved that very day to master the English language.
                </p>
                <p style={{ color: "var(--ink-600)", lineHeight: 1.78, fontSize: "0.98rem", margin: 0 }}>
                  With guidance from lecturers <strong>Nalimela Bhaskar</strong> and <strong>Gande Parsha Ram Rao</strong>, he enrolled in spoken English programs, consumed newspapers and books relentlessly, and attended classes supported by <em>The Hindu E-Plus Club</em>. His struggle with English gradually transformed into his greatest superpower. Today, as Assistant Professor and Head of Department, he has trained more than <strong>20,000 engineering students</strong> in corporate communication, interview preparation, and public speaking, with alumni placed in top multinational firms and civil services.
                </p>
              </div>

              {/* 4. AWAKENING OF SOCIAL SERVICE & NATIONAL HONOURS */}
              <div className="founder-cv-section-box">
                <div className="founder-cv-section-head">
                  <div className="founder-cv-section-icon">
                    <HeartHandshake size={20} />
                  </div>
                  <h3 className="founder-cv-section-title">Social Service Spirit &amp; President of India Awards</h3>
                </div>
                <p style={{ color: "var(--ink-600)", lineHeight: 1.78, fontSize: "0.98rem", margin: "0 0 14px" }}>
                  Dr. Azam Ali’s social service journey began in school through <strong>Lead India 2020</strong>, NCC, and environmental initiatives. During the 2004 Indian Ocean tsunami, he mobilized donations with friends and presented them directly to the District Collector. In Intermediate college, he joined the <strong>National Service Scheme (NSS)</strong> under Dr. S. Manohara Chary, turning NSS into a life mission through blood donation camps, village adoptions, AIDS awareness, pulse polio drives, and disaster relief.
                </p>
                <p style={{ color: "var(--ink-600)", lineHeight: 1.78, fontSize: "0.98rem", margin: "0 0 16px" }}>
                  During the devastating 2009 Andhra Pradesh floods, he personally collected ₹10,000 and 1,000 notebooks for affected children. In recognition of extraordinary service, he was nominated for the country’s highest student volunteer honor:
                </p>
                <div className="founder-honors-grid">
                  <div className="founder-honor-card">
                    <div className="founder-honor-card__icon">
                      <Award size={20} />
                    </div>
                    <div>
                      <h5 className="founder-honor-card__name">President of India NSS National Award 2012–13</h5>
                      <p className="founder-honor-card__role">Presented by President Pranab Mukherjee at Rashtrapati Bhavan (2013)</p>
                    </div>
                  </div>
                  <div className="founder-honor-card">
                    <div className="founder-honor-card__icon">
                      <Award size={20} />
                    </div>
                    <div>
                      <h5 className="founder-honor-card__name">National Youth Award 2017–18</h5>
                      <p className="founder-honor-card__role">Conferred by Ministry of Youth Affairs &amp; Sports at Vigyan Bhavan, New Delhi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. STATEHOOD MOVEMENT & ANTI-CORRUPTION */}
              <div className="founder-cv-section-box">
                <div className="founder-cv-section-head">
                  <div className="founder-cv-section-icon">
                    <Flag size={20} />
                  </div>
                  <h3 className="founder-cv-section-title">Telangana Statehood Movement &amp; Civic Governance</h3>
                </div>
                <p style={{ color: "var(--ink-600)", lineHeight: 1.78, fontSize: "0.98rem", margin: "0 0 14px" }}>
                  During his graduation years, Dr. Azam Ali was at the forefront of the historic <strong>Telangana Statehood Movement</strong>. He organized and led student rallies, dharnas, Sadak Bandh protests, the Million March, and the Sakala Janula Samme. When the Justice Sri Krishna Committee visited the region, he represented students to present memorandums advocating for equitable educational opportunities.
                </p>
                <p style={{ color: "var(--ink-600)", lineHeight: 1.78, fontSize: "0.98rem", margin: 0 }}>
                  A progressive thinker, he was profoundly influenced by <strong>Dr. Jayaprakash Narayan</strong> (former IAS officer and founder of Lok Satta). Azam worked extensively on Right to Information (RTI) awareness, consumer advocacy, electoral transparency, and voter empowerment, while actively supporting Anna Hazare’s anti-corruption Lokpal movement.
                </p>
              </div>

              {/* 6. TEACHING CAREER & ACADEMIC CONTRIBUTIONS */}
              <div className="founder-cv-section-box">
                <div className="founder-cv-section-head">
                  <div className="founder-cv-section-icon">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="founder-cv-section-title">Academic Career, Authorship &amp; Research</h3>
                </div>
                <p style={{ color: "var(--ink-600)", lineHeight: 1.78, fontSize: "0.98rem", margin: "0 0 14px" }}>
                  After completing his post-graduation, Azam served as Guest Faculty at the Government Degree College for Women, Karimnagar, before joining prominent engineering colleges in Warangal as Assistant Professor of English. Over more than a decade of university teaching, he has served as:
                </p>
                <ul style={{ paddingLeft: "20px", color: "var(--ink-600)", lineHeight: 1.75, fontSize: "0.96rem", margin: "0 0 16px" }}>
                  <li style={{ marginBottom: "6px" }}><strong>Head of the Department (HOD) of English</strong> and Chairperson of the Board of Studies (BOS) for B.Tech First-Year English.</li>
                  <li style={{ marginBottom: "6px" }}>Author of the acclaimed research book: <em>&ldquo;Indian Youth Literature: Mapping Young Minds in Changing India&rdquo;</em>.</li>
                  <li style={{ marginBottom: "6px" }}>Editor of the national volume: <em>&ldquo;Education: A Pathway to Viksit Bharat&rdquo;</em>.</li>
                  <li style={{ marginBottom: "6px" }}>Author of numerous peer-reviewed research papers in UGC Care-listed journals and international symposium proceedings.</li>
                  <li><strong>NSS Programme Officer</strong>, guiding hundreds of collegiate youth in Swachh Bharat campaigns, anti-drug awareness, ethics, and leadership camps across Delhi, Maharashtra, and Kerala.</li>
                </ul>
              </div>

              {/* 7. FOUNDING OF CHAMAK FOUNDATION */}
              <div className="founder-cv-section-box">
                <div className="founder-cv-section-head">
                  <div className="founder-cv-section-icon">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="founder-cv-section-title">Founding of Chamak Foundation (Chamak Padhai Se)</h3>
                </div>
                <p style={{ color: "var(--ink-600)", lineHeight: 1.78, fontSize: "0.98rem", margin: "0 0 14px" }}>
                  Dr. Azam Ali’s personal struggles crystallized his conviction that quality education is the most potent weapon to eradicate intergenerational poverty. Guided by the visionary calls of <strong>Maulana Abul Kalam Azad</strong> and <strong>Dr. A.P.J. Abdul Kalam</strong>, he formally founded <strong>Chamak Foundation (Chamak Padhai Se)</strong> on <strong>6 October 2023</strong> in Hyderabad in the presence of eminent Ramon Magsaysay Awardee <strong>Prof. Shantha Sinha</strong>.
                </p>
                <p style={{ color: "var(--ink-600)", lineHeight: 1.78, fontSize: "0.98rem", margin: "0 0 14px" }}>
                  Under his leadership, Chamak Foundation conducts English communication classes, life-skills workshops, and personality development drives across government schools and <strong>Kasturba Gandhi Balika Vidyalayas (KGBVs)</strong>. The foundation provides crucial tuition and examination sponsorships for students in M.Pharmacy, M.Phil, M.A., BLISC, and B.Ed. degrees, and has established fully-stocked community libraries in <strong>Rangapoor village (Karimnagar)</strong> and <strong>Govt. High School Matwada (Warangal)</strong> with thousands of donated books.
                </p>
              </div>

              {/* 8. MAJOR AWARDS & RECOGNITIONS */}
              <div className="founder-cv-section-box">
                <div className="founder-cv-section-head">
                  <div className="founder-cv-section-icon">
                    <Award size={20} />
                  </div>
                  <h3 className="founder-cv-section-title">Major Awards, Honours &amp; Recognitions</h3>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px", marginTop: "14px" }}>
                  {MAJOR_AWARDS.map((aw) => (
                    <div key={aw.num} style={{ background: "#fff", border: "1px solid rgba(201,154,58,0.25)", borderRadius: "12px", padding: "16px 18px", boxShadow: "0 4px 14px rgba(11,27,56,0.03)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--gold-700)", background: "rgba(201,154,58,0.12)", padding: "2px 8px", borderRadius: "10px" }}>{aw.num}</span>
                        <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--navy-900)" }}>{aw.year}</span>
                      </div>
                      <h4 style={{ fontSize: "0.98rem", color: "var(--navy-900)", margin: "0 0 4px", fontFamily: "var(--serif)" }}>{aw.name}</h4>
                      <p style={{ fontSize: "0.8rem", color: "var(--ink-400)", margin: 0, lineHeight: 1.45 }}>{aw.conferredBy}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "16px", padding: "12px 18px", background: "var(--cream-100)", borderRadius: "10px", fontSize: "0.88rem", color: "var(--navy-900)", fontWeight: 600 }}>
                  ✨ Additionally felicitated with more than <strong>150 certifications</strong>, over <strong>100 mementos</strong>, and recognition for delivering more than <strong>1,000 motivational lectures</strong> across India.
                </div>
              </div>

              {/* 9. APPRECIATION FROM EMINENT PERSONALITIES */}
              <div className="founder-cv-section-box">
                <div className="founder-cv-section-head">
                  <div className="founder-cv-section-icon">
                    <Users size={20} />
                  </div>
                  <h3 className="founder-cv-section-title">Appreciation from Eminent National Leaders</h3>
                </div>
                <p style={{ color: "var(--ink-600)", lineHeight: 1.7, fontSize: "0.95rem", margin: "0 0 16px" }}>
                  During his journey, Dr. Azam Ali had the rare honour of meeting and receiving personal appreciation from leaders at the highest echelons of Indian governance, judiciary, civil society, and academia:
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px" }}>
                  {EMINENT_DIGNITARIES.map((item, idx) => (
                    <div key={idx} style={{ padding: "14px 16px", borderRadius: "10px", background: "#ffffff", border: "1px solid rgba(11,27,56,0.08)", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <CheckCircle2 size={18} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "2px" }} />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: "0.94rem", color: "var(--navy-900)" }}>{item.name}</div>
                        <div style={{ fontSize: "0.78rem", color: "var(--gold-700)", fontWeight: 600, marginBottom: "3px" }}>{item.role}</div>
                        <div style={{ fontSize: "0.82rem", color: "var(--ink-500)", lineHeight: 1.4 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 10. PHILOSOPHY & MESSAGE TO YOUTH */}
              <div className="founder-cv-quote">
                <p>
                  &ldquo;Poverty is not a barrier to success. Hard times test character and reveal inner strength. Turn every obstacle into an opportunity, and remember: success is meaningful only when shared with society.&rdquo;
                </p>
                <cite>— Dr. Mohammad Azam Ali</cite>
              </div>

              {/* CV Key Impact Metrics */}
              <div className="founder-cv-stats-grid">
                <div className="founder-cv-stat-box">
                  <span className="founder-cv-stat-num">1,000+</span>
                  <span className="founder-cv-stat-label">Motivational Lectures Delivered Across India</span>
                </div>
                <div className="founder-cv-stat-box">
                  <span className="founder-cv-stat-num">20,000+</span>
                  <span className="founder-cv-stat-label">Engineering &amp; College Students Mentored</span>
                </div>
                <div className="founder-cv-stat-box">
                  <span className="founder-cv-stat-num">150+</span>
                  <span className="founder-cv-stat-label">State &amp; National Honors &amp; Certifications</span>
                </div>
                <div className="founder-cv-stat-box">
                  <span className="founder-cv-stat-num">2</span>
                  <span className="founder-cv-stat-label">Rural Community Libraries Established</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SUSTAINABLE DEVELOPMENT GOALS TEASER BANNER */}
      <section className="section section--tight" style={{ paddingTop: 0, paddingBottom: "40px" }}>
        <div className="container">
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
            }}
          >
            <div style={{ maxWidth: "620px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--gold-400)", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                <Globe size={15} /> UN Agenda 2030 Alignment
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: "#fff", margin: "0 0 10px", lineHeight: 1.3 }}>
                Advancing the United Nations Sustainable Development Goals
              </h3>
              <p style={{ color: "rgba(250,247,239,0.78)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                Discover how Chamak Foundation champions <strong>SDG 4 (Quality Education)</strong>, <strong>SDG 5 (Gender Equality)</strong>, and <strong>SDG 10 (Reduced Inequalities)</strong> across Telangana.
              </p>
            </div>
            <div>
              <Link href="/sustainable-development-goals" className="btn btn-gold" style={{ whiteSpace: "nowrap" }}>
                Explore SDG Action <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INSPIRATIONS & CORE PHILOSOPHY */}
      <section className="section section--cream2">
        <div className="container">
          <div className="section-head section-head--center section-head--wide">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <Quote size={14} /> Guiding Words
            </div>
            <h2 className="section-title--oneline">The Visionary Ideals That Guide Us</h2>
            <p>Dr. Azam Ali was moved by two profound philosophical statements that became the bedrock of Chamak Foundation.</p>
          </div>

          <div className="grid grid--2" style={{ gap: "28px", marginTop: "32px" }}>
            <div className="card" style={{ padding: "38px", background: "#fff", borderLeft: "5px solid var(--gold-500)", boxShadow: "0 10px 30px rgba(11,27,56,0.05)" }}>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.22rem", lineHeight: 1.6, color: "var(--navy-900)", fontStyle: "italic", margin: 0 }}>
                &ldquo;Agar tum sirf apne liye zinda ho toh iska matlab yahi hai ke tum apni qaum ke liye zinda laash ho.&rdquo;
              </p>
              <div style={{ marginTop: "18px", fontSize: "0.88rem", fontWeight: 700, color: "var(--gold-700)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                — Maulana Abul Kalam Azad
              </div>
              <span style={{ fontSize: "0.82rem", color: "var(--ink-400)", display: "block", marginTop: "4px" }}>
                First Minister of Education of Independent India &amp; Visionary Leader
              </span>
            </div>

            <div className="card" style={{ padding: "38px", background: "#fff", borderLeft: "5px solid var(--navy-800)", boxShadow: "0 10px 30px rgba(11,27,56,0.05)" }}>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.22rem", lineHeight: 1.6, color: "var(--navy-900)", fontStyle: "italic", margin: 0 }}>
                &ldquo;Aap badho, desh ko badhao.&rdquo;
              </p>
              <div style={{ marginTop: "18px", fontSize: "0.88rem", fontWeight: 700, color: "var(--navy-900)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                — Dr. A. P. J. Abdul Kalam
              </div>
              <span style={{ fontSize: "0.82rem", color: "var(--ink-400)", display: "block", marginTop: "4px" }}>
                Former President of India &amp; Visionary Scientist
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION BAND */}
      <section className="section" style={{ paddingTop: "20px" }}>
        <div className="container">
          <div className="cta-band">
            <h2>Join Our Mission to Educate and Empower</h2>
            <p>Every mentor, volunteer, and donor helps us illuminate the path for one more student.</p>
            <div className="cta-band__ctas">
              <Link href="/get-involved" className="btn btn-gold">Support a Child</Link>
              <Link href="/programmes" className="btn btn-outline-cream">Explore Programmes</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
