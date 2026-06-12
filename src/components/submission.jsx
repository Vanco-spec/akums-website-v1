// src/components/Submission.jsx
import React, { useEffect, useRef } from "react";
import "../styles/submissions.css";

export default function Submission() {
  const pageRef = useRef(null);

  useEffect(() => {
    const items = pageRef.current?.querySelectorAll(".sub-fade");
    if (!items?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="submission-page" ref={pageRef}>

      {/* ============ HERO ============ */}
      <div className="submission-hero">
        <div className="container">
          <span className="eyebrow sub-fade delay-1">For Writers · Researchers · Storytellers</span>
          <h1 className="hero-display">
            <span className="line-1 sub-fade delay-2">Share your</span>
            <span className="line-2 sub-fade sub-fade-rise delay-3">VOICE</span>
            <span className="line-3 sub-fade delay-4">with the world.</span>
          </h1>
          <p className="hero-sub sub-fade delay-5">
            The AKUMS Magazine is an open canvas for students, alumni, and faculty —
            submit your insights, experiences, or research, and let your story
            shape the conversation in medicine.
          </p>
        </div>
      </div>

      {/* ============ WHAT WE PUBLISH ============ */}
      <div className="streams-band">
        <div className="container streams-wrap">
        <div className="section-header">
          <span className="eyebrow eyebrow-dark sub-fade delay-1">What we publish</span>
          <h2 className="section-h2 sub-fade delay-2">
            Four streams. <em>One magazine.</em>
          </h2>
        </div>

        <div className="row g-4 mt-3">
          <div className="col-md-6 col-lg-3">
            <div className="stream-card sub-fade delay-1">
              <span className="stream-num">01</span>
              <h3 className="stream-title">Research &amp; Innovation</h3>
              <p className="stream-text">
                Case reports, study summaries, lab discoveries, and method notes.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="stream-card sub-fade delay-2">
              <span className="stream-num">02</span>
              <h3 className="stream-title">Personal Reflections</h3>
              <p className="stream-text">
                Ward stories, patient encounters, mental-health honesty, doubt and growth.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="stream-card sub-fade delay-3">
              <span className="stream-num">03</span>
              <h3 className="stream-title">Health Advocacy</h3>
              <p className="stream-text">
                Policy takes, public-health analysis, community-care stories that move people.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="stream-card sub-fade delay-4">
              <span className="stream-num">04</span>
              <h3 className="stream-title">Student Life</h3>
              <p className="stream-text">
                Campus culture, leadership, balance — the world beyond the white coat.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* ============ GUIDELINES ============ */}
      <div className="guidelines-band">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow sub-fade delay-1">The fine print</span>
            <h2 className="section-h2 section-h2-light sub-fade delay-2">
              Submission <em>guidelines</em>
            </h2>
          </div>

          <div className="row g-4 mt-3">
            <div className="col-md-6">
              <div className="guideline-item sub-fade delay-1">
                <span className="g-num">01</span>
                <div>
                  <h4>Length</h4>
                  <p>
                    Between <strong>500–1200 words</strong>, written in clear, engaging English.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="guideline-item sub-fade delay-2">
                <span className="g-num">02</span>
                <div>
                  <h4>About you</h4>
                  <p>
                    Include your <strong>full name, year of study or graduation,</strong> and a short bio (2–3 lines).
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="guideline-item sub-fade delay-3">
                <span className="g-num">03</span>
                <div>
                  <h4>Visuals</h4>
                  <p>
                    Attach <strong>high-quality photos or graphics</strong> if available — make sure you have permission to use them.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="guideline-item sub-fade delay-4">
                <span className="g-num">04</span>
                <div>
                  <h4>Originality</h4>
                  <p>
                    Submissions must be <strong>original</strong> and not previously published elsewhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ CTA ============ */}
      <div className="cta-band">
        <div className="container cta-wrap">
          <div className="cta-card sub-fade sub-fade-pop delay-1">
            <span className="eyebrow eyebrow-dark">Ready?</span>
            <h2 className="cta-headline">
              Pitch us. <em>Today.</em>
            </h2>
            <p className="cta-sub">
              Send your draft, photos, and short bio in one email — we'll take it from there.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=akumsmagazine@gmail.com&su=Magazine%20Submission"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              Submit
            </a>
            <p className="cta-note">Editorial team replies within 7–10 working days.</p>
          </div>
        </div>
      </div>

    </section>
  );
}