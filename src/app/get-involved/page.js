"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { 
  Heart, 
  Users, 
  Compass, 
  Building2, 
  Share2, 
  Sparkles, 
  Check, 
  Copy, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Send
} from "lucide-react";

export default function GetInvolvedPage() {
  const [donationFrequency, setDonationFrequency] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState(1200);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);
  
  // Volunteer form state
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "tutoring",
    availability: "weekends",
    message: "",
  });

  const donationTiers = [
    {
      amount: 500,
      label: "₹500",
      desc: "Books, notebook bundle, and school bag kit for 1 student.",
    },
    {
      amount: 1200,
      label: "₹1,200",
      desc: "1 month of complete after-school remedial tutoring & supplies.",
      popular: true,
    },
    {
      amount: 3000,
      label: "₹3,000",
      desc: "1 semester of institutional examination fees & science lab costs.",
    },
    {
      amount: 6000,
      label: "₹6,000",
      desc: "Full annual academic sponsorship for a high school scholar.",
    },
  ];

  const currentAmount = isCustom ? (parseInt(customAmount, 10) || 0) : selectedAmount;

  const getImpactDescription = (amt) => {
    if (amt >= 6000) {
      return `Generates transformational impact: Covers a child's complete annual tuition, books, uniform, and mentor guidance for a full academic year.`;
    } else if (amt >= 3000) {
      return `Sponsors an entire semester of board examination fees, lab charges, and core textbooks for a high school student.`;
    } else if (amt >= 1200) {
      return `Provides 1 full month of comprehensive daily remedial coaching in mathematics, science, and English for an underprivileged child.`;
    } else if (amt >= 500) {
      return `Equips a student with an annual school bag, stationery sets, notebooks, and essential writing supplies.`;
    }
    return `Every single rupee directly aids learning materials and student welfare across our communities.`;
  };

  const copyBankDetails = () => {
    const details = `Chamak Foundation\nAccount Number: [Official Trust Account]\nIFSC Code: [Official Bank IFSC]\nBank: Hyderabad Main Branch\nContact: +91 91000 07768\nEmail: info@chamakfoundation.org`;
    navigator.clipboard.writeText(details);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Join Us"
        title="You Can Create a Chamak."
        subtitle="Your time, skills, support, or voice can ignite a lifetime of possibilities for a child."
      />

      {/* 5 Ways to Engage Quick Grid */}
      <section className="section" style={{ paddingBottom: "32px" }}>
        <div className="container">
          <div className="grid grid--3 reveal" id="ways-to-help">
            <div className="involve" id="donate">
              <div className="involve__icon"><Heart size={22} /></div>
              <h3>Donate</h3>
              <p>Your contribution funds merit scholarships and classroom supplies.</p>
              <a href="#donate-section" className="btn btn-outline-navy btn-sm" style={{ marginTop: "14px" }}>
                Support a Child
              </a>
            </div>

            <div className="involve" id="volunteer">
              <div className="involve__icon"><Users size={22} /></div>
              <h3>Volunteer</h3>
              <p>Give your weekends to tutor math, science, or English at local centres.</p>
              <a href="#volunteer-section" className="btn btn-outline-navy btn-sm" style={{ marginTop: "14px" }}>
                Apply as Volunteer
              </a>
            </div>

            <div className="involve">
              <div className="involve__icon"><Compass size={22} /></div>
              <h3>Mentor</h3>
              <p>Guide high schoolers through career options and college choices.</p>
              <a href="#volunteer-section" className="btn btn-outline-navy btn-sm" style={{ marginTop: "14px" }}>
                Become a Mentor
              </a>
            </div>

            <div className="involve">
              <div className="involve__icon"><Building2 size={22} /></div>
              <h3>School Partnerships</h3>
              <p>Collaborate with Chamak to bring libraries and remedial classes to your campus.</p>
              <Link href="/contact" className="btn btn-outline-navy btn-sm" style={{ marginTop: "14px" }}>
                Partner With Us
              </Link>
            </div>

            <div className="involve">
              <div className="involve__icon"><Share2 size={22} /></div>
              <h3>Spread the Word</h3>
              <p>Share our student stories and organize book donation drives in your network.</p>
              <Link href="/contact" className="btn btn-outline-navy btn-sm" style={{ marginTop: "14px" }}>
                Get Book Kit
              </Link>
            </div>

            <div className="involve" style={{ background: "var(--navy-900)", borderColor: "var(--navy-900)" }}>
              <div className="involve__icon" style={{ background: "rgba(250,247,239,0.1)", color: "var(--gold-400)" }}>
                <Sparkles size={22} />
              </div>
              <h3 style={{ color: "var(--cream-100)" }}>Every Bit Matters</h3>
              <p style={{ color: "rgba(250,247,239,0.72)" }}>Not sure where to begin? Have a conversation with our trustee team.</p>
              <Link href="/contact" className="btn btn-gold btn-sm" style={{ marginTop: "14px" }}>
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Donation Calculator & Details */}
      <section className="section section--cream2" id="donate-section">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Make a Direct Donation</div>
            <h2>Sponsor a Student&apos;s Education</h2>
            <p style={{ color: "var(--ink-400)", maxWidth: "56ch", margin: "10px auto 0" }}>
              100% of educational donations go directly toward school fees, books, and verified student provisions.
            </p>
          </div>

          <div 
            className="card reveal" 
            style={{ 
              maxWidth: "760px", 
              margin: "0 auto", 
              padding: "48px 40px", 
              boxShadow: "0 16px 40px rgba(11,27,56,0.08)",
              borderColor: "rgba(201,154,58,0.25)"
            }}
          >
            {/* Frequency Toggle */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
              <div style={{ background: "var(--cream-200)", padding: "4px", borderRadius: "30px", display: "inline-flex" }}>
                <button
                  type="button"
                  onClick={() => setDonationFrequency("one-time")}
                  style={{
                    padding: "10px 24px",
                    borderRadius: "26px",
                    border: "none",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    background: donationFrequency === "one-time" ? "var(--navy-900)" : "transparent",
                    color: donationFrequency === "one-time" ? "var(--cream-100)" : "var(--navy-900)",
                  }}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setDonationFrequency("monthly")}
                  style={{
                    padding: "10px 24px",
                    borderRadius: "26px",
                    border: "none",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    background: donationFrequency === "monthly" ? "var(--navy-900)" : "transparent",
                    color: donationFrequency === "monthly" ? "var(--cream-100)" : "var(--navy-900)",
                  }}
                >
                  Monthly Champion
                </button>
              </div>
            </div>

            {/* Tier Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "14px", marginBottom: "24px" }}>
              {donationTiers.map((tier) => {
                const isSelected = !isCustom && selectedAmount === tier.amount;
                return (
                  <button
                    key={tier.amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(tier.amount);
                      setIsCustom(false);
                    }}
                    style={{
                      padding: "18px 12px",
                      borderRadius: "14px",
                      border: isSelected ? "2px solid var(--gold-500)" : "1.5px solid rgba(11,27,56,0.12)",
                      background: isSelected ? "rgba(201,154,58,0.12)" : "white",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all 0.2s ease",
                      position: "relative",
                    }}
                  >
                    {tier.popular && (
                      <span style={{ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)", background: "var(--navy-900)", color: "var(--gold-400)", fontSize: "0.68rem", fontWeight: 700, padding: "2px 8px", borderRadius: "10px", textTransform: "uppercase" }}>
                        Popular
                      </span>
                    )}
                    <div style={{ fontFamily: "var(--num)", fontSize: "1.45rem", fontWeight: 800, color: "var(--navy-900)", letterSpacing: "-0.02em" }}>
                      {tier.label}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom Amount Field */}
            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ fontSize: "0.88rem", color: "var(--ink-400)", fontWeight: 600 }}>Custom Amount:</span>
                <div style={{ position: "relative", flexGrow: 1, maxWidth: "260px" }}>
                  <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", fontWeight: 700, color: "var(--navy-900)" }}>₹</span>
                  <input
                    type="number"
                    placeholder="Enter other amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setIsCustom(true);
                    }}
                    onFocus={() => setIsCustom(true)}
                    style={{
                      width: "100%",
                      padding: "10px 12px 10px 28px",
                      borderRadius: "10px",
                      border: isCustom ? "2px solid var(--gold-500)" : "1px solid rgba(11,27,56,0.2)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      outline: "none",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Dynamic Impact Callout Box */}
            <div style={{ background: "rgba(201,154,58,0.08)", border: "1px solid rgba(201,154,58,0.25)", borderRadius: "14px", padding: "20px 24px", marginBottom: "32px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <Sparkles size={22} style={{ color: "var(--gold-600)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <div style={{ fontWeight: 700, color: "var(--navy-900)", fontSize: "0.95rem", marginBottom: "4px" }}>
                  Your {donationFrequency === "monthly" ? "Monthly" : "One-Time"} Impact of ₹{currentAmount.toLocaleString("en-IN")}:
                </div>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--ink-500)", lineHeight: 1.55 }}>
                  {getImpactDescription(currentAmount)}
                </p>
              </div>
            </div>

            {/* Bank Transfer Details & Copy */}
            <div style={{ background: "white", padding: "24px", borderRadius: "14px", border: "1px solid rgba(11,27,56,0.1)", marginBottom: "28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "var(--navy-900)", fontSize: "0.92rem" }}>
                  <ShieldCheck size={18} style={{ color: "var(--gold-600)" }} />
                  <span>Direct Trust Bank Transfer &amp; UPI</span>
                </div>
                <button
                  type="button"
                  onClick={copyBankDetails}
                  className="btn btn-sm btn-outline-navy"
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", padding: "6px 12px" }}
                >
                  {copiedBank ? <Check size={14} style={{ color: "green" }} /> : <Copy size={14} />}
                  <span>{copiedBank ? "Details Copied!" : "Copy Details"}</span>
                </button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "0.88rem" }}>
                <div>
                  <div style={{ color: "var(--ink-400)", fontSize: "0.78rem", textTransform: "uppercase" }}>Account Name</div>
                  <strong style={{ color: "var(--navy-900)" }}>Chamak Foundation</strong>
                </div>
                <div>
                  <div style={{ color: "var(--ink-400)", fontSize: "0.78rem", textTransform: "uppercase" }}>Location</div>
                  <strong style={{ color: "var(--navy-900)" }}>Hyderabad, Telangana</strong>
                </div>
                <div>
                  <div style={{ color: "var(--ink-400)", fontSize: "0.78rem", textTransform: "uppercase" }}>Helpline Phone</div>
                  <strong style={{ color: "var(--navy-900)" }}>+91 91000 07768</strong>
                </div>
                <div>
                  <div style={{ color: "var(--ink-400)", fontSize: "0.78rem", textTransform: "uppercase" }}>Email Receipt</div>
                  <strong style={{ color: "var(--navy-900)" }}>info@chamakfoundation.org</strong>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <a 
                href={`https://wa.me/919100007768?text=${encodeURIComponent(`Hello Chamak Foundation, I would like to support your educational mission with a ${donationFrequency} pledge of INR ${currentAmount}. Please share transfer instructions.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: "1rem" }}
              >
                Connect on WhatsApp to Confirm Donation (₹{currentAmount.toLocaleString("en-IN")})
              </a>
              <p style={{ fontSize: "0.82rem", color: "var(--ink-400)", marginTop: "12px", margin: "12px 0 0" }}>
                Tax receipts and direct donor verification are dispatched promptly upon transfer confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="section" id="volunteer-section">
        <div className="container">
          <div className="split reveal">
            <div>
              <div className="eyebrow">Volunteer With Us</div>
              <h2 className="hdg-oneline hdg-oneline--split">Share Your Knowledge, Transform a Life</h2>
              <p style={{ fontSize: "1.02rem", color: "var(--ink-500)", lineHeight: 1.7, marginBottom: "20px" }}>
                We are actively looking for enthusiastic tutors, career mentors, and field organizers across Hyderabad. Whether you have 2 hours a week or want to lead a monthly workshop, your presence matters.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gold-600)" }} />
                  <span style={{ fontSize: "0.92rem", color: "var(--navy-900)", fontWeight: 500 }}>Weekend remedial tutoring in Math, Science, Spoken English</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gold-600)" }} />
                  <span style={{ fontSize: "0.92rem", color: "var(--navy-900)", fontWeight: 500 }}>High school career guidance and college entrance mentorship</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gold-600)" }} />
                  <span style={{ fontSize: "0.92rem", color: "var(--navy-900)", fontWeight: 500 }}>Community library book cataloguing & reading circles</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gold-600)" }} />
                  <span style={{ fontSize: "0.92rem", color: "var(--navy-900)", fontWeight: 500 }}>Volunteer certificate and verified social impact credit</span>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: "40px 36px" }}>
              {volunteerSubmitted ? (
                <div style={{ textAlign: "center", padding: "32px 16px" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(37,211,102,0.15)", color: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", color: "var(--navy-900)", marginBottom: "10px" }}>
                    Thank You for Stepping Forward!
                  </h3>
                  <p style={{ color: "var(--ink-500)", lineHeight: 1.6, marginBottom: "24px" }}>
                    We have received your volunteer application. A Chamak Foundation coordinator will reach out to you within 48 hours to align on your preferred role and centre location.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setVolunteerSubmitted(false);
                      setVolunteerForm({ name: "", email: "", phone: "", interest: "tutoring", availability: "weekends", message: "" });
                    }}
                    className="btn btn-navy btn-sm"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleVolunteerSubmit}>
                  <h3 style={{ marginBottom: "20px", color: "var(--navy-900)" }}>Volunteer Sign-Up</h3>
                  
                  <div className="field">
                    <label htmlFor="vol-name">Full Name *</label>
                    <input 
                      id="vol-name" 
                      type="text" 
                      required 
                      value={volunteerForm.name}
                      onChange={e => setVolunteerForm({...volunteerForm, name: e.target.value})}
                      placeholder="e.g. Ayesha Khan" 
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div className="field">
                      <label htmlFor="vol-email">Email Address *</label>
                      <input 
                        id="vol-email" 
                        type="email" 
                        required 
                        value={volunteerForm.email}
                        onChange={e => setVolunteerForm({...volunteerForm, email: e.target.value})}
                        placeholder="you@domain.com" 
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="vol-phone">Phone / WhatsApp *</label>
                      <input 
                        id="vol-phone" 
                        type="tel" 
                        required 
                        value={volunteerForm.phone}
                        onChange={e => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                        placeholder="+91 98765 43210" 
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div className="field">
                      <label htmlFor="vol-interest">Area of Interest</label>
                      <select 
                        id="vol-interest" 
                        value={volunteerForm.interest}
                        onChange={e => setVolunteerForm({...volunteerForm, interest: e.target.value})}
                        style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid rgba(11,27,56,0.18)", background: "white", fontSize: "0.95rem" }}
                      >
                        <option value="tutoring">Remedial Tutoring</option>
                        <option value="mentorship">Career Mentorship</option>
                        <option value="library">Community Library</option>
                        <option value="events">Event &amp; Field Support</option>
                      </select>
                    </div>

                    <div className="field">
                      <label htmlFor="vol-avail">Availability</label>
                      <select 
                        id="vol-avail" 
                        value={volunteerForm.availability}
                        onChange={e => setVolunteerForm({...volunteerForm, availability: e.target.value})}
                        style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid rgba(11,27,56,0.18)", background: "white", fontSize: "0.95rem" }}
                      >
                        <option value="weekends">Weekends (Sat/Sun)</option>
                        <option value="weekdays">Weekday Evenings</option>
                        <option value="flexible">Flexible / Remote</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="vol-msg">Short Note / Experience</label>
                    <textarea 
                      id="vol-msg" 
                      rows={3}
                      value={volunteerForm.message}
                      onChange={e => setVolunteerForm({...volunteerForm, message: e.target.value})}
                      placeholder="Tell us briefly about your background or why you'd like to get involved..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-navy" style={{ width: "100%", display: "flex", justifyContent: "center", gap: "8px" }}>
                    <Send size={16} />
                    <span>Submit Volunteer Application</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Together Banner */}
      <section className="section section--navy">
        <div className="container">
          <div className="cta-band reveal" style={{ background: "transparent", border: "none" }}>
            <h2>Together, we can create more Chamaks!</h2>
            <p>Every individual contribution transforms an educational aspiration into an undeniable reality.</p>
            <div className="cta-band__ctas">
              <Link href="/contact" className="btn btn-gold">Contact Us Today</Link>
              <Link href="/programmes" className="btn btn-outline-cream">Explore Programmes</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
