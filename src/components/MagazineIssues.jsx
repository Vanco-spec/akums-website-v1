import "../styles/magazine_issues.css";

export default function IssuePage() {
  return (
    <div className="issue-page">

      {/* ====== HERO SECTION ====== */}
      <section className="publication-hero d-flex align-items-center text-center text-white">
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">
            AKUMS Medical Magazine
          </h1>

          <p className="lead mb-4">
            The AKUMS Magazine is a holistic multimedia publication platform that elevates medical student voices in healthcare discourse through five integrated content verticals: Medicine and Science, Creative and Arts, Career Progressions, Student Life, and Alumni Perspectives. We focus on delivering authentic, student-generated content that addresses critical needs within the medical education community while maintaining professional standards.
          </p>

          <a
            href="#magazine"
            className="btn btn-light btn-lg px-4 hero-cta"
            role="button"
          >
            Explore Issues
          </a>
        </div>      </section>
    
      <section className="latest-issue-section py-5" id="latest-issue">
        <div className="container text-center">

            <h2 className="section-title mb-4">
            Latest Issue — AKUMS Medical Magazine
            </h2>
            <p className="section-subtitle mb-5">
            Explore stories, research highlights, and reflections from Kenyatta University's future medical leaders.
            </p>

            <div className="row align-items-center g-4">

            {/* Magazine Preview */}
            <div className="col-md-6 text-center">
                <div className="magazine-cards">
                <img 
                    src="/images/magazinefinal.jpg" 
                    alt="AKUMS Medical Magazine Cover" 
                    className="magazine-cover" 
                    loading="lazy" 
                />
                <div className="magazine-badge">
                    <span>Volume 3, Issue 1</span>
                </div>
                </div>
            </div>

            {/* Magazine Details */}
            <div className="col-md-6 text-start">
                <h4 className="issue-title">“The Pulse of Tomorrow”</h4>
                <p className="issue-desc">
                Dive into innovations in medicine, student research breakthroughs, and inspiring journeys of young doctors shaping the health landscape.
                </p>

                <ul className="issue-meta list-unstyled">
                <li>📅 Published: March 2026</li>
                <li>👩‍⚕️ Editor-in-Chief: Student Dr. Rodney Chomba</li>
                <li>📖 48 pages of insight and inspiration</li>
                </ul>

                <div className="issue-actions mt-4 d-flex flex-wrap gap-3">
                <h2>COMING SOON</h2>
                </div>
            </div>

            </div>
        </div>
        </section>

      {/* ===== TABLE OF CONTENTS ===== */}
      <section className="issue-toc" id="toc">
        <div className="container">
          <h2 className="section-title text-center">Table of Contents</h2>

          <div className="toc-list">
            <div className="toc-item">
              <span>01</span>
              <div>
                <h4>Editorial: A New Beginning</h4>
                <p>Editorial Board</p>
              </div>
            </div>

            <div className="toc-item">
              <span>12</span>
              <div>
                <h4>Research Spotlight: Innovations in Rural Healthcare</h4>
                <p>Dr. Sarah Mitchell et al.</p>
              </div>
            </div>

            <div className="toc-item">
              <span>28</span>
              <div>
                <h4>The Art of Medicine</h4>
                <p>Creative Medical Writing Collection</p>
              </div>
            </div>

            <div className="toc-item">
              <span>45</span>
              <div>
                <h4>Life as a Clinical Student</h4>
                <p>Student Reflections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED ARTICLES ===== */}
      <section className="featured-articles">
        <div className="container">
          <h2 className="">Featured Articles</h2>

          <div className="featured-grid">
            <div className="featured-card">
              <h3>Reimagining Community Medicine</h3>
              <p>
                A discussion on sustainable public health models in Sub-Saharan Africa.
              </p>
              <button className="btn-outline-small">Coming Soon</button>
            </div>

            <div className="featured-card">
              <h3>Medical Students & Burnout</h3>
              <p>
                Examining mental health realities within competitive medical environments.
              </p>
              <button className="btn-outline-small">Coming Soon</button>
            </div>

            <div className="featured-card">
              <h3>Beyond the Stethoscope</h3>
              <p>
                Exploring identity, art, and leadership in medical training.
              </p>
              <button className="btn-outline-small">Coming Soon</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}