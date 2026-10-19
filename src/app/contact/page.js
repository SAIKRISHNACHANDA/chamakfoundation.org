"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare,
  Clock,
  HelpCircle
} from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "How does a student apply for a Chamak Foundation scholarship?",
      a: "Students or their guardians can apply directly by reaching out via our contact email or phone with academic transcripts and proof of family income. Our welfare committee reviews applications twice yearly before school terms commence.",
    },
    {
      q: "How can I verify how my donation is utilized?",
      a: "Chamak Foundation operates with radical financial transparency. 100% of educational donations are disbursed directly to accredited educational institutions and certified book vendors. Donors receive student progress reports and audit confirmation statements.",
    },
    {
      q: "Can working professionals and college students volunteer on weekends?",
      a: "Yes! The majority of our tutoring and library sessions occur on Saturday mornings and Sunday afternoons to accommodate corporate employees and university students. We provide tutor training and structured workbooks.",
    },
    {
      q: "How can our school or basti community partner with Chamak?",
      a: "Government and low-income private schools can write to info@chamakfoundation.org. We evaluate pupil strength, infrastructural readiness, and teacher availability before rolling out remedial coaching or a community library nook.",
    },
    {
      q: "Can I sponsor a specific child or community library?",
      a: "Yes. Donors can choose to sponsor a specific high school scholar or fund an entire community library unit. You will receive direct periodic updates on the student's academic marks or the library's daily footfall.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Create More Chamaks."
        subtitle="We would love to hear from you. Reach out with questions, collaboration ideas, or sponsorship inquiries."
      />

      {/* Main Split: Contact Details & Interactive Form */}
      <section className="section">
        <div className="container">
          <div className="split reveal">
            {/* Left: Direct Contact Information */}
            <div>
              <h2 style={{ marginBottom: "24px" }}>Contact Details</h2>
              <p style={{ color: "var(--ink-500)", marginBottom: "32px", fontSize: "1.02rem", lineHeight: 1.65 }}>
                Our leadership and coordinator team are based in Hyderabad, Telangana. We welcome visits, phone conversations, and direct emails.
              </p>

              <div className="info-row">
                <div className="info-row__icon"><MapPin size={20} /></div>
                <div>
                  <h4>Registered Location</h4>
                  <p>Hyderabad, Telangana, India</p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-row__icon"><Phone size={20} /></div>
                <div>
                  <h4>Phone &amp; WhatsApp</h4>
                  <p><a href="tel:+919100007768" style={{ color: "inherit", textDecoration: "none" }}>+91 91000 07768</a></p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-row__icon"><Mail size={20} /></div>
                <div>
                  <h4>Official Email</h4>
                  <p><a href="mailto:info@chamakfoundation.org" style={{ color: "inherit", textDecoration: "none" }}>info@chamakfoundation.org</a></p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-row__icon"><Globe size={20} /></div>
                <div>
                  <h4>Website</h4>
                  <p>www.chamakfoundation.org</p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-row__icon"><Clock size={20} /></div>
                <div>
                  <h4>Operating Hours</h4>
                  <p>Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                </div>
              </div>

              <h4 style={{ marginTop: "32px", fontFamily: "var(--sans)", fontSize: "0.82rem", letterSpacing: "0.06em", color: "var(--ink-400)", textTransform: "uppercase", fontWeight: 700 }}>
                Social Channels
              </h4>
              <div className="social-row">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z" fill="currentColor"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6"/><path d="M7.5 10v6.5M7.5 7.5v.01M11.5 16.5V13c0-1.4 1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="1.6"/><path d="M11 10l4 2-4 2v-4z" fill="currentColor"/></svg>
                </a>
              </div>

              {/* Hyderabad Location Aesthetic Card */}
              <div 
                style={{
                  marginTop: "32px",
                  padding: "24px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, var(--navy-900) 0%, var(--navy-950) 100%)",
                  color: "var(--cream-100)",
                  border: "1px solid rgba(201,154,58,0.25)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--gold-400)", marginBottom: "8px", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>
                  <MapPin size={16} />
                  <span>Headquarters &amp; Field Hub</span>
                </div>
                <div style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", marginBottom: "4px" }}>
                  Hyderabad, Telangana, India
                </div>
                <p style={{ color: "rgba(250,247,239,0.7)", fontSize: "0.88rem", margin: 0, lineHeight: 1.5 }}>
                  Centrally coordinating scholarship verifications, community libraries, and volunteer tutor centres across the twin cities.
                </p>
              </div>
            </div>

            {/* Right: Message Form with state */}
            <div className="card" style={{ padding: "40px 36px" }}>
              {formSubmitted ? (
                <div style={{ textAlign: "center", padding: "36px 16px" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(37,211,102,0.15)", color: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.7rem", color: "var(--navy-900)", marginBottom: "12px" }}>
                    Message Received
                  </h3>
                  <p style={{ color: "var(--ink-500)", lineHeight: 1.6, marginBottom: "24px", fontSize: "0.98rem" }}>
                    Thank you for reaching out, <strong>{formState.name}</strong>. A representative from Chamak Foundation will respond to <strong>{formState.email}</strong> within 24 hours.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px", margin: "0 auto" }}>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormState({ name: "", email: "", phone: "", subject: "general", message: "" });
                      }}
                      className="btn btn-outline-navy btn-sm"
                    >
                      Send Another Message
                    </button>
                    <a
                      href="https://wa.me/919100007768"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold btn-sm"
                    >
                      Instant WhatsApp Chat
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ marginBottom: "8px", color: "var(--navy-900)", fontSize: "1.5rem" }}>Send Us a Message</h3>
                  <p style={{ color: "var(--ink-400)", fontSize: "0.9rem", marginBottom: "24px" }}>
                    Have a question or proposal? Fill out the form below and we will get back to you swiftly.
                  </p>

                  <div className="field">
                    <label htmlFor="name">Your Full Name *</label>
                    <input 
                      id="name" 
                      type="text" 
                      required 
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                      placeholder="e.g. Dr. A. K. Rao" 
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div className="field">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        id="email" 
                        type="email" 
                        required 
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                        placeholder="you@domain.com" 
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        id="phone" 
                        type="tel" 
                        value={formState.phone}
                        onChange={e => setFormState({...formState, phone: e.target.value})}
                        placeholder="+91 91000 00000" 
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="subject">Subject / Purpose of Inquiry *</label>
                    <select
                      id="subject"
                      value={formState.subject}
                      onChange={e => setFormState({...formState, subject: e.target.value})}
                      style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid rgba(11,27,56,0.18)", background: "white", fontSize: "0.95rem" }}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="scholarship">Student Scholarship Application</option>
                      <option value="volunteer">Volunteering &amp; Mentorship</option>
                      <option value="donation">Donation &amp; Sponsorship Support</option>
                      <option value="school-partner">Institutional / School Partnership</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="message">Your Message *</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      required
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                      placeholder="Please describe how we can assist or collaborate..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-gold" style={{ width: "100%", display: "flex", justifyContent: "center", gap: "8px", padding: "14px" }}>
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>

                  <p className="form-note" style={{ textAlign: "center", marginTop: "12px" }}>
                    Prefer direct communication? Call us at <strong>+91 91000 07768</strong> or email <strong>info@chamakfoundation.org</strong>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="section section--cream2">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>FAQ</div>
            <h2>Frequently Asked Questions</h2>
            <p style={{ color: "var(--ink-400)", maxWidth: "56ch", margin: "10px auto 0" }}>
              Quick answers about student eligibility, donor accountability, and our community programs.
            </p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "14px" }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="card"
                  style={{
                    padding: "24px 28px",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    border: isOpen ? "1.5px solid var(--gold-500)" : "1px solid rgba(11,27,56,0.1)",
                    background: isOpen ? "#FFFFFF" : "rgba(255,255,255,0.7)",
                  }}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                    <h3 style={{ fontSize: "1.08rem", color: "var(--navy-900)", margin: 0, fontFamily: "var(--sans)", fontWeight: 600 }}>
                      {faq.q}
                    </h3>
                    <div style={{ color: isOpen ? "var(--gold-600)" : "var(--ink-400)", flexShrink: 0 }}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {isOpen && (
                    <div style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid rgba(11,27,56,0.06)", color: "var(--ink-500)", lineHeight: 1.65, fontSize: "0.93rem" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
