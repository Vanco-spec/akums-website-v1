import React from "react";
import "./../styles/home_newsletter.css"; // Ensure you have CSS for styling

const HomeNewsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the email. You can integrate with API/Firebase later
    const email = e.target.email.value;
    console.log("Newsletter subscription:", email);
    alert(`Thank you for subscribing with ${email}!`);
    e.target.reset();
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-card mx-auto p-5 text-center">

        <span className="newsletter-badge mb-3 d-inline-block">
          From Our Inbox
        </span>

        <h2 className="newsletter-title mb-3">
          AKUMS Newsletter
        </h2>
        <h3 className="soon">Coming Soon</h3>

        <p className="newsletter-text mb-4">
          A glimpse of what our subscribers receive — concise updates, opportunities,
          and stories shaping the future of healthcare.
        </p>

        {/* Sample Newsletters */}
        <div className="newsletter-samples row g-3 mb-4">

          <div className="col-md-4">
            <div className="sample-card">
              <span className="sample-tag">EVENTS</span>
              <h5>Upcoming Medical Camps</h5>
              <p>
                Join our outreach team this November as we serve underserved
                communities through free screenings and health education.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="sample-card">
              <span className="sample-tag">SOCIAL</span>
              <h5>Students Social Events</h5>
              <p>
                Meet up with KU student doctors presenting innovative research at the Annual
                Medical Symposium and beyond.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="sample-card">
              <span className="sample-tag">OPPORTUNITIES</span>
              <h5>Mentorship & Leadership</h5>
              <p>
                New mentorship openings with clinicians, alumni, and healthcare
                leaders — apply early.
              </p>
            </div>
          </div>

        </div>

        {/* Newsletter Form */}
        <form 
          className="newsletter-form d-flex flex-column flex-sm-row gap-3 justify-content-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            className="newsletter-input"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" className="newsletter-btn">
            Subscribe
          </button>
        </form>

        <small className="newsletter-note d-block mt-3" style={{color: "#000"}}>
          No spam. Only meaningful updates from AKUMS.
        </small>

      </div>
    </section>
  );
};

export default HomeNewsletter;
