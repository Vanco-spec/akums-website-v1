import "../styles/magazine_aboutinfo.css";

export default function MagazineInfo() {
  return (
    <>
{/* ===== ABOUT + STRATEGY SECTION ===== */}
<section className="magazine-overview" id="about-magazine">
  <div className="overview-container">

    {/* LEFT SIDE */}
    <div className="overview-left">
      <span className="section-tag">About AKUMS MAGAZINE</span>
      <h2 className="overview-title">
        Transforming Medical Students Into Influential Voices
      </h2>

      <p className="overview-text">
        AKUMS Medical Magazine is a student-led publication that transforms
        medical students from silent learners into active contributors to
        healthcare discourse.
      </p>

      <p className="overview-text">
        Our platform spans medicine and science, creative arts, career
        development, and student life — preserving authentic voices while
        shaping the future of healthcare.
      </p>

      <button
        className="overview-btn"
        onClick={() => window.location.href = "/issue-magazine.html"}
      >
        Read the Latest Issue
      </button>
    </div>

    {/* RIGHT SIDE IMAGE + MISSION */}
    <div className="overview-right">
      <img
        src="/images/magazinefront.jpg"
        alt="AKUMS Medical Magazine"
        className="overview-image"
      />

      <div className="mission-card">
        <h3>Our Mission</h3>
        <p>
          To provide the medical education community access to authentic,
          underrepresented student perspectives that influence healthcare’s future.
        </p>

        <ul>
          <li>Rigorous peer review process</li>
          <li>Indexed and accessible online</li>
          <li>Open access for broader visibility</li>
          <li>Student-led editorial board</li>
        </ul>
      </div>
    </div>

  </div>

  {/* VALUES GRID */}
  <div className="values-section">
    <h3 className="values-title">Our Core Values</h3>

    <div className="values-grid">
      <div className="value-box">
        <h4>Authenticity</h4>
        <p>Genuine student experiences reflecting growth, struggle and resilience.</p>
      </div>

      <div className="value-box">
        <h4>Excellence</h4>
        <p>Rigorous editorial standards ensuring clarity and professionalism.</p>
      </div>

      <div className="value-box">
        <h4>Inclusivity</h4>
        <p>Welcoming all medical students regardless of background or specialty.</p>
      </div>

      <div className="value-box">
        <h4>Holistic Vision</h4>
        <p>Recognizing scholars, artists, leaders and community builders.</p>
      </div>

      <div className="value-box">
        <h4>Community & Empowerment</h4>
        <p>Building mentorship, collaboration and professional growth.</p>
      </div>
    </div>
  </div>
</section>


{/* ===== STRATEGIC GOALS (CARD LAYOUT) ===== */}
<section className="strategy-section">
  <div className="strategy-container">

    <div className="strategy-header">
      <span className="section-tag">Strategic Direction</span>
      <h2>Building Long-Term Impact</h2>
      <p>
        Strengthening academic credibility, expanding participation,
        and growing digital influence.
      </p>
    </div>

    <div className="strategy-grid">

      <div className="strategy-card">
        <h3>Academic Excellence & Visibility</h3>
        <ul>
          <li>Strengthen editorial standards</li>
          <li>Expand peer-review participation</li>
          <li>Increase research publication frequency</li>
          <li>Enhance digital discoverability</li>
        </ul>
      </div>

      <div className="strategy-card">
        <h3>Community & Creative Expansion</h3>
        <ul>
          <li>Launch themed creative editions</li>
          <li>Feature interdisciplinary collaborations</li>
          <li>Host writing & editorial workshops</li>
          <li>Build alumni contributor network</li>
        </ul>
      </div>

    </div>
  </div>
</section>

<section className="magazine-about-section py-5" id="magazine-about">
  <div className="container">

    <div className="text-center mb-5">
      <h2 className="section-title">LEARN MORE</h2>
      <p className="section-subtitle">
        Elevating the voices of Kenyatta University medical students through creative, academic, and professional publication.
      </p>
    </div>

    <div className="row g-4">

      {/* History */}
      <div className="col-md-6 col-lg-4">
        <div className="magazine-card">
          <h4>History & Conception</h4>
          <p>
            The AKUMS Magazine was conceived in October 2025 by the executive committee of the Association of Kenyatta University Medical Students (AKUMS). Recognizing the absence of a dedicated platform for medical student voices, the leadership initiated this publication to fill a critical gap in medical education discourse.
          </p>
          <p>
            The inaugural issue is scheduled for publication in February 2026, following a successful call for submissions and assembling a 14-member editorial team.
          </p>
        </div>
      </div>

      {/* Legal Status */}
      <div className="col-md-6 col-lg-4">
        <div className="magazine-card">
          <h4>Legal Status</h4>
          <p>
            The AKUMS Magazine operates as a publication arm of AKUMS, a registered student organization. It maintains editorial independence with dedicated leadership, budget, and strategic direction.
          </p>
          <p>
            Future plans include registration as an independent entity (Community-Based Organization or Media Society) to enable partnerships, funding applications, and expanded operations beyond the university.
          </p>
        </div>
      </div>

      {/* Founders & Leadership */}
      <div className="col-md-6 col-lg-4">
        <div className="magazine-card">
          <h4>Founders & Leadership</h4>
          <p>
            The magazine was founded by the AKUMS Executive Committee in collaboration with motivated medical students committed to elevating student voices. Leadership is shared among a core editorial team, with the Editor-in-Chief providing strategic direction and the Managing Editors overseeing day-to-day operations.
Current Operations: The AKUMS Magazine currently operates virtually, leveraging digital collaboration tools to coordinate a geographically dispersed team of contributors and editors. This virtual model allows for flexibility, cost-efficiency during the start-up phase, and the ability to engage contributors from across Kenyatta University's multiple campuses. The magazine serves the Kenyatta University medical student community initially, with plans to expand to medical schools across Kenya and East Africa by Year 3.</p>
        </div>
      </div>

      {/* Current Operations */}
      <div className="col-md-6 col-lg-4">
        <div className="magazine-card">
          <h4>Product and Services</h4>
          <p>
            The AKUMS Magazine produces a holistic publication featuring content across five core verticals: Medicine and Science, Creative and Arts, Career Progressions, Student Life, and Alumni Perspectives. Content is delivered through print issues (bi-annual initially, scaling to monthly), a digital platform (website and eventual mobile app), multimedia content (podcasts, video documentaries), and community events (workshops, panels, annual conference).
Development Phase: Pre-launch/Start-up. The magazine is in its final preparation phase before the inaugural issue launch in February 2026. This phase includes team formation, content development, brand identity establishment, website creation, and initial fundraising</p>
        </div>
      </div>
      
    </div>
  </div>
</section>

      {/* ===== 5-YEAR GROWTH ROADMAP ===== */}
<section className="growth-roadmap">
  <div className="container">

    <div className="roadmap-header text-center">
      <h2>AKUMS 5-Year Growth Roadmap</h2>
      <p>
        From foundation to international influence — a strategic journey
        toward building Africa’s leading student medical publication.
      </p>
    </div>

    <div className="roadmap-track">

      {/* YEAR 1 */}
      <div className="roadmap-card">
        <span className="roadmap-year">2026</span>
        <h3>Foundation & Launch</h3>
        <ul>
          <li>Launch first issue (Feb)</li>
          <li>Establish operations</li>
          <li>Secure initial funding</li>
          <li>Build website</li>
          <li>Publish 4–6 issues</li>
        </ul>
      </div>

      {/* YEAR 2 */}
      <div className="roadmap-card">
        <span className="roadmap-year">2027</span>
        <h3>Scale & Sustainability</h3>
        <ul>
          <li>Monthly publication</li>
          <li>Launch multimedia content</li>
          <li>Expand editorial team</li>
          <li>Formalize partnerships</li>
        </ul>
      </div>

      {/* YEAR 3 */}
      <div className="roadmap-card">
        <span className="roadmap-year">2028</span>
        <h3>Regional Expansion</h3>
        <ul>
          <li>Major revenue growth</li>
          <li>Launch conferences/events</li>
          <li>Win recognition</li>
          <li>Multimedia ecosystem thriving</li>
        </ul>
      </div>

      {/* YEAR 4 */}
      <div className="roadmap-card">
        <span className="roadmap-year">2029</span>
        <h3>Pan-African Presence</h3>
        <ul>
          <li>Launch chapters</li>
          <li>Major health partnerships</li>
          <li>Launch mobile app</li>
          <li>Thought leadership established</li>
        </ul>
      </div>

      {/* YEAR 5 */}
      <div className="roadmap-card">
        <span className="roadmap-year">2030</span>
        <h3>Global Influence</h3>
        <ul>
          <li>International expansion</li>
          <li>Endowment secured</li>
          <li>AKUMS Press launched</li>
          <li>50+ medical schools reached</li>
        </ul>
      </div>

    </div>

  </div>
</section>
    </>
  );
}