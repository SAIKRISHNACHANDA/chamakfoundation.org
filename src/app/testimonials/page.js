import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  Quote,
  Sparkles,
  Award,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
  BookOpen,
  Library,
  Compass,
} from "lucide-react";

export const metadata = {
  title: "Words of Appreciation · Testimonials · Chamak Foundation",
  description:
    "Eminent academicians, university professors, and child rights leaders share their appreciation and endorsements for Chamak Foundation's educational empowerment work across Telangana.",
};

const APPRECIATIONS = [
  {
    id: "prof-g-damodar",
    name: "Professor G. Damodar",
    role: "Former Vice-Chancellor & Senior Professor of English",
    badge: "Higher Education Leadership",
    monogram: "GD",
    quote:
      "Chamak Foundation, under the leadership of Dr. Mohammad Azam Ali, is making commendable efforts to transform lives through education and social service. Its initiatives in empowering underprivileged students, promoting educational awareness, mentoring and career guidance are highly appreciable. The foundation's commitment to creating equal opportunities for young people reflects a noble vision. I wish Dr. Azam Ali and his team great success in their mission.",
    focus: "Educational Awareness & Mentorship",
  },
  {
    id: "prof-suresh-lal",
    name: "Professor Suresh Lal",
    role: "Senior Professor, Academician & Social Scientist",
    badge: "Social Transformation & Youth Empowerment",
    monogram: "SL",
    quote:
      "Chamak Foundation is an inspiring initiative towards educational empowerment and social transformation. Its focus on student development, life skills education, personality development and career counselling addresses the important needs of today's younger generation. I appreciate the dedication and vision of Dr. Mohammad Azam Ali in working for disadvantaged communities. I hope the foundation continues to expand its activities and positively impact many more lives.",
    focus: "Life Skills & Career Counselling",
  },
  {
    id: "prof-meghana-rao",
    name: "Professor Meghana Rao",
    role: "Professor & Student Mentorship Leader",
    badge: "Student Mentorship & Character Building",
    monogram: "MR",
    quote:
      "Chamak Foundation is creating hope and opportunities for young minds through education and empowerment. Its initiatives in mentoring, counselling, career guidance, communication skills and holistic personality development are particularly meaningful. I appreciate Dr. Mohammad Azam Ali for his commitment to nurturing young talent and supporting students from underprivileged backgrounds. Such efforts can inspire confidence, build character and create a brighter future for society.",
    focus: "Holistic Personality & Confidence",
  },
  {
    id: "r-venkat-reddy",
    name: "R. Venkat Reddy",
    role: "National Convenor, M.V. Foundation & Member, Telangana Education Commission",
    badge: "Child Rights & Educational Policy",
    image: "/assets/team/r-venkat-reddy.png",
    monogram: "VR",
    quote:
      "Chamak Foundation represents a meaningful commitment to educational empowerment and inclusive social development. Its efforts to support underprivileged students through mentoring, educational awareness, career guidance, counselling and community-based initiatives are noteworthy. I appreciate the leadership and dedication of Dr. Mohammad Azam Ali in taking forward this noble mission. I strongly believe that initiatives like Chamak Foundation can contribute significantly to building an educated, empowered and equitable society. My best wishes for its continued growth and success.",
    focus: "Inclusive Society & Child Retention",
  },
];

const STATS = [
  { num: "100+", label: "Motivational Lectures Across Telangana" },
  { num: "70+", label: "Career Guidance & Civil Services Seminars" },
  { num: "20+", label: "Scholars Aided in Pharmacy, B.Ed, M.A. & M.Phil" },
  { num: "2", label: "Libraries at Rangapoor & Govt. HS Matwada" },
];

const STUDENT_STORIES = [
  {
    title: "From Daily Wage Uncertainty to Engineering College",
    student: "Mohd. Rehan, 19",
    location: "Hyderabad",
    programme: "Scholarship & Career Guidance",
    body: "When Rehan scored 94% in his intermediate exams, his father, an auto-rickshaw driver, worried they could never pay engineering college counseling fees. Through Chamak Foundation's merit scholarship and senior mentorship, Rehan secured admission to a top engineering institution in Telangana.",
    quote: "Chamak gave me the confidence that poverty would not write the final chapter of my career.",
  },
  {
    title: "Defying the Drop-out Odds in Class 9",
    student: "Fatima Begum, 15",
    location: "Charminar Area",
    programme: "Girl Child Education",
    body: "After losing her mother, Fatima was on the verge of being withdrawn from school to manage domestic responsibilities. Chamak volunteers intervened with targeted family counseling, sponsored her tuition fees and school supplies, and paired her with a woman mentor. Today, she is top of her class.",
    quote: "My teachers told me I had wings; Chamak made sure I had the sky to fly in.",
  },
  {
    title: "A Neighbourhood Transformed by Books",
    student: "Syed Ayan & Friends",
    location: "Rural & Community Libraries",
    programme: "Community Libraries",
    body: "Before Chamak established quiet reading rooms and book camps, local students had no study tables or access to reference materials in their homes. Today, the community library serves over 60 children daily, stocked with curriculum texts, storybooks, and competitive exam guides.",
    quote: "The library is our second home. We study together, read novels, and dream bigger.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* 1. Master Editorial Page Hero */}
      <PageHero
        eyebrow="Words of Appreciation"
        title="What Leaders & Scholars Say"
        subtitle="Distinguished university professors, academicians, and child rights leaders reflect on Chamak Foundation's transformative impact in educational empowerment."
      />

      {/* 2. Four Stat Cards (Matching the user's high-contrast navy/gold UI) */}
      <div className="container testimonials-stats-wrapper">
        <div className="testimonials-stats-grid">
          {STATS.map((stat, idx) => (
            <div key={idx} className="testimonials-stat-card">
              <span className="testimonials-stat-num">{stat.num}</span>
              <span className="testimonials-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Primary Section: Words of Appreciation from Academic Leaders */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head section-head--center section-head--wide">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <Sparkles size={15} /> Academic &amp; Social Endorsements
            </div>
            <h2 className="section-title--oneline">Words of Appreciation</h2>
            <p>
              Recognitions and endorsements from eminent educators, university leadership, and advocates who have witnessed our ground initiatives across Telangana.
            </p>
          </div>

          <div className="appreciation-grid">
            {APPRECIATIONS.map((item) => (
              <div key={item.id} className="appreciation-card">
                <div>
                  <div className="appreciation-card__header">
                    <div className="appreciation-card__author">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={58}
                          height={58}
                          className="appreciation-card__avatar"
                        />
                      ) : (
                        <div className="appreciation-card__monogram">
                          {item.monogram}
                        </div>
                      )}
                      <div>
                        <h3 className="appreciation-card__name">{item.name}</h3>
                        <p className="appreciation-card__designation">{item.role}</p>
                      </div>
                    </div>
                    <Quote size={32} className="appreciation-card__quote-icon" />
                  </div>

                  <blockquote className="appreciation-card__body">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="appreciation-card__footer">
                  <span className="appreciation-card__badge">
                    <Award size={13} />
                    {item.badge}
                  </span>
                  <span className="appreciation-card__verified">
                    <CheckCircle2 size={14} style={{ color: "var(--gold-600)" }} />
                    Verified Endorsement
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Secondary Section: Student Voices of Transformation */}
      <section className="section section--cream2">
        <div className="container">
          <div className="section-head section-head--center section-head--wide">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <HeartHandshake size={15} /> Student Impact
            </div>
            <h2 className="section-title--oneline">Voices of Transformation</h2>
            <p>
              Behind every aggregated number is an individual human story of resilience, opportunity, and triumph over circumstance.
            </p>
          </div>

          <div className="grid grid--3" style={{ marginTop: "36px", gap: "26px" }}>
            {STUDENT_STORIES.map((story, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "36px 30px",
                  background: "#ffffff",
                  borderRadius: "20px",
                  borderColor: "rgba(201, 154, 58, 0.22)",
                  boxShadow: "0 10px 28px rgba(11,27,56,0.05)",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.76rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "var(--gold-700)",
                        background: "rgba(201,154,58,0.12)",
                        padding: "4px 12px",
                        borderRadius: "12px",
                      }}
                    >
                      {story.programme}
                    </span>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--ink-400)",
                        fontWeight: 500,
                      }}
                    >
                      {story.location}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.25rem",
                      color: "var(--navy-900)",
                      lineHeight: 1.35,
                      marginBottom: "14px",
                    }}
                  >
                    {story.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--ink-500)",
                      lineHeight: 1.68,
                      marginBottom: "22px",
                    }}
                  >
                    {story.body}
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(11,27,56,0.04)",
                    padding: "16px 18px",
                    borderRadius: "14px",
                    borderLeft: "4px solid var(--gold-500)",
                  }}
                >
                  <p
                    style={{
                      fontStyle: "italic",
                      fontSize: "0.88rem",
                      color: "var(--navy-900)",
                      lineHeight: 1.55,
                      margin: "0 0 6px",
                    }}
                  >
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "var(--gold-700)",
                    }}
                  >
                    — {story.student}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Direct Action Call to Action Band */}
      <section className="section section--navy">
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--gold-400)",
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "16px",
              }}
            >
              <GraduationCap size={18} /> Be Part of the Mission
            </div>
            <h2
              style={{
                color: "var(--cream-100)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                marginBottom: "16px",
                fontFamily: "var(--serif)",
              }}
            >
              Help More Students Shine Through Education
            </h2>
            <p
              style={{
                color: "rgba(250, 247, 239, 0.78)",
                fontSize: "1.02rem",
                lineHeight: 1.75,
                margin: "0 auto 32px",
              }}
            >
              Every scholarship, library book, and mentorship session directly empowers a child from an economically disadvantaged background to stay in school and achieve academic excellence.
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/get-involved#donate" className="btn btn-gold">
                Support a Student <ArrowRight size={16} />
              </Link>
              <Link
                href="/about#founder"
                className="btn btn-outline-light"
                style={{ borderColor: "rgba(250,247,239,0.3)" }}
              >
                Learn About Our Founder
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
