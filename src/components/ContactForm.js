"use client";

import { useState } from "react";
import { Send, CheckCircle2, MessageSquare, Mail, Phone, RefreshCw } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "General Inquiry",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      topic: "General Inquiry",
      subject: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  const mailtoLink = `mailto:chamakfoundation23@gmail.com?subject=${encodeURIComponent(
    `[${formData.topic}] ${formData.subject || "Inquiry from Website"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "24px",
        padding: "clamp(24px, 3.5vw, 42px)",
        border: "1px solid rgba(201, 154, 58, 0.28)",
        boxShadow: "0 18px 48px rgba(11, 27, 56, 0.08)",
        position: "relative",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            background: "rgba(217, 175, 82, 0.12)",
            color: "var(--gold-700)",
            padding: "4px 14px",
            borderRadius: "20px",
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          <MessageSquare size={13} /> Direct Communication
        </div>
        <h3
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.5rem, 2.2vw, 1.9rem)",
            color: "var(--navy-900)",
            margin: "0 0 8px",
            lineHeight: 1.25,
          }}
        >
          Send Us a Message
        </h3>
        <p style={{ color: "var(--ink-500)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
          Have a question about our educational projects, rural libraries, or sponsorships? Fill out the form below and we will respond promptly.
        </p>
      </div>

      {isSubmitted ? (
        <div
          style={{
            padding: "36px 24px",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(37,211,102,0.06) 0%, rgba(217,175,82,0.06) 100%)",
            borderRadius: "16px",
            border: "1.5px solid rgba(37,211,102,0.3)",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#25D366",
              color: "#ffffff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
              boxShadow: "0 8px 20px rgba(37,211,102,0.3)",
            }}
          >
            <CheckCircle2 size={32} />
          </div>
          <h4
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.4rem",
              color: "var(--navy-900)",
              margin: "0 0 8px",
            }}
          >
            Thank You, {formData.name || "Friend"}!
          </h4>
          <p
            style={{
              color: "var(--ink-600)",
              fontSize: "0.95rem",
              lineHeight: 1.6,
              maxWidth: "460px",
              margin: "0 auto 24px",
            }}
          >
            Your message regarding <strong>{formData.topic}</strong> has been received. Our team will review your inquiry and follow up shortly.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={mailtoLink} className="btn btn-navy" style={{ padding: "10px 20px", fontSize: "0.88rem" }}>
              <Mail size={15} style={{ marginRight: "6px" }} /> Open in Email Client
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-outline-navy"
              style={{ padding: "10px 20px", fontSize: "0.88rem" }}
            >
              <RefreshCw size={14} style={{ marginRight: "6px" }} /> Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "18px" }}>
            <div className="field">
              <label htmlFor="name">
                Full Name <span style={{ color: "var(--gold-600)" }}>*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">
                Email Address <span style={{ color: "var(--gold-600)" }}>*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="e.g. rahul@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "18px" }}>
            <div className="field">
              <label htmlFor="phone">Phone / WhatsApp Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="topic">Purpose of Inquiry</label>
              <select id="topic" name="topic" value={formData.topic} onChange={handleChange}>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Student Scholarship & Sponsorship">Student Scholarship &amp; Sponsorship</option>
                <option value="Weekend Volunteering & Mentoring">Weekend Volunteering &amp; Mentoring</option>
                <option value="Rural Community Library Setup">Rural Community Library Setup</option>
                <option value="CSR & Corporate Partnership">CSR &amp; Corporate Partnership</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="subject">
              Subject <span style={{ color: "var(--gold-600)" }}>*</span>
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="e.g. Sponsorship inquiry for rural high school students"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="message">
              Your Message <span style={{ color: "var(--gold-600)" }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Please share details about your inquiry, how you'd like to collaborate, or how we can assist you..."
              value={formData.message}
              onChange={handleChange}
              required
              style={{ minHeight: "120px" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "14px", marginTop: "20px" }}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-gold"
              style={{
                padding: "13px 32px",
                fontSize: "0.95rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>

            <span style={{ fontSize: "0.82rem", color: "var(--ink-400)" }}>
              🔒 Respecting your privacy · No spam ever.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

