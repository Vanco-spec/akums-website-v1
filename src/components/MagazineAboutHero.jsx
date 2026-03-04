import "../styles/magazine_abouthero.css";
import { useEffect, useState } from "react";

export default function PublicationHero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation once after mount
    setAnimate(true);
  }, []);

  return (
    <section className={`magazine-hero ${animate ? "visible" : ""}`}>
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-grid">
          
          {/* LEFT CONTENT */}
          <div className={`hero-text fade-zoom ${animate ? "visible" : ""}`}>
            <div className="badge-wrapper">
              <img
                src="/images/asset1.png"
                alt="AKUMS Logo"
                className="badge-logo"
              />
            </div>

            <span className="badge">Current Issue</span>

            <h1 className="hero-title">AKUMS MAGAZINE</h1>
            <p className="hero-subtitle">Volume 1, Issue 1 • Soon</p>

            <div className="hero-article">
              <h2 className="text-white">First issue in history of AKUMS</h2>
              <p>
                AKUMS Medical Magazine is the official academic and creative
                publication of Kenyatta University medical students —
                documenting ideas, discoveries, and stories shaping the future of healthcare.
              </p>
            </div>

            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => window.location.href = "/issue-magazine.html"}
              >
                Read Current Issue
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={`hero-image-wrapper fade-zoom ${animate ? "visible" : ""}`}>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1631543722888-01f8a17ebf3f?auto=format&fit=crop&w=1080&q=80"
                alt="Current Issue Cover"
              />
            </div>

            <div className="hero-featured">
              <p className="featured-label">Featured Article</p>
              <p>Dr. Sarah Mitchell et al.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}