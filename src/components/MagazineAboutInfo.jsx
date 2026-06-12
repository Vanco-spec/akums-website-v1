import { useEffect, useRef } from "react";
import "../styles/magazine_aboutinfo.css";

const coreValues = [
  {
    label: "Authenticity",
    body: "Genuine student experiences reflecting growth, struggle, and resilience.",
  },
  {
    label: "Excellence",
    body: "Rigorous editorial standards ensuring clarity and professionalism.",
  },
  {
    label: "Inclusivity",
    body: "Welcoming all medical students regardless of background or specialty.",
  },
  {
    label: "Holistic Vision",
    body: "Recognizing scholars, artists, leaders, and community builders.",
  },
  {
    label: "Community & Empowerment",
    body: "Building mentorship, collaboration, and professional growth.",
  },
];

const strategy = [
  {
    title: "Academic Excellence & Visibility",
    items: [
      "Strengthen editorial standards",
      "Expand peer-review participation",
      "Increase research publication frequency",
      "Enhance digital discoverability",
    ],
  },
  {
    title: "Community & Creative Expansion",
    items: [
      "Launch themed creative editions",
      "Feature interdisciplinary collaborations",
      "Host writing & editorial workshops",
      "Build alumni contributor network",
    ],
  },
];

const roadmap = [
  {
    year: "2026",
    title: "Foundation & Launch",
    items: [
      "Launch first issue (February)",
      "Establish operations",
      "Secure initial funding",
      "Build website",
      "Publish 4–6 issues",
    ],
  },
  {
    year: "2027",
    title: "Scale & Sustainability",
    items: [
      "Monthly publication",
      "Launch multimedia content",
      "Expand editorial team",
      "Formalize partnerships",
    ],
  },
  {
    year: "2028",
    title: "Regional Expansion",
    items: [
      "Major revenue growth",
      "Launch conferences & events",
      "Win recognition",
      "Multimedia ecosystem thriving",
    ],
  },
  {
    year: "2029",
    title: "Pan-African Presence",
    items: [
      "Launch chapters",
      "Major health partnerships",
      "Launch mobile app",
      "Thought leadership established",
    ],
  },
  {
    year: "2030",
    title: "Global Influence",
    items: [
      "International expansion",
      "Endowment secured",
      "AKUMS Press launched",
      "50+ medical schools reached",
    ],
  },
];

export default function MagazineInfo() {
  const pageRef = useRef(null);

  useEffect(() => {
    const items = pageRef.current?.querySelectorAll(".abt-fade");
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
    <section className="about-page" ref={pageRef} id="about-magazine">

      {/* ============ HERO ============ */}
      <div className="about-hero">
        <div className="container">
          <span className="abt-eyebrow abt-fade delay-1">About · AKUMS Magazine</span>
          <h1 className="abt-display">
            <span className="abt-line-1 abt-fade delay-2">An academic &amp; creative</span>
            <span className="abt-line-2 abt-fade abt-fade-rise delay-3">PUBLICATION</span>
            <span className="abt-line-3 abt-fade delay-4">by Kenyatta University medical students.</span>
          </h1>
          <p className="abt-hero-sub abt-fade delay-5">
            Documenting the ideas, discoveries, and stories shaping the future of healthcare —
            written by the people training to deliver it.
          </p>
        </div>
      </div>

      {/* ============ MISSION ============ */}
      <div className="mission-band">
        <div className="container mission-wrap">
          <div className="row g-5 align-items-center">

            <div className="col-lg-7">
              <span className="abt-eyebrow abt-eyebrow-dark abt-fade delay-1">Our mission</span>
              <h2 className="abt-h2 abt-fade delay-2">
                Transforming medical students into <em>influential voices.</em>
              </h2>
              <p className="mission-text abt-fade delay-3">
                AKUMS Medical Magazine is a student-led publication that turns medical
                students from silent learners into active contributors to healthcare discourse.
              </p>
              <p className="mission-text abt-fade delay-4">
                Our platform spans medicine and science, creative arts, career development,
                and student life — preserving authentic voices while shaping the future of
                healthcare.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="mission-card abt-fade abt-fade-pop delay-1">
                <span className="mission-card-tag">Promise</span>
                <h3 className="mission-card-title">
                  To provide access to <em>authentic, underrepresented</em> student perspectives.
                </h3>
                <ul className="mission-card-list">
                  <li>Rigorous peer-review process</li>
                  <li>Indexed and accessible online</li>
                  <li>Open access for broader visibility</li>
                  <li>Student-led editorial board</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ============ CORE VALUES ============ */}
      <div className="values-band">
        <div className="container values-wrap">
          <div className="section-header">
            <span className="abt-eyebrow abt-fade delay-1">Core values</span>
            <h2 className="abt-h2 abt-h2-light abt-fade delay-2">
              Five values. <em>One standard.</em>
            </h2>
          </div>

          <div className="values-grid">
            {coreValues.map((v, i) => (
              <div className={`value-card abt-fade delay-${(i % 4) + 1}`} key={v.label}>
                <span className="value-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="value-label">{v.label}</h3>
                <p className="value-body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ STRATEGY ============ */}
      <div className="strategy-band">
        <div className="container strategy-wrap">
          <div className="section-header">
            <span className="abt-eyebrow abt-eyebrow-dark abt-fade delay-1">Strategic direction</span>
            <h2 className="abt-h2 abt-fade delay-2">
              Building <em>long-term</em> impact.
            </h2>
            <p className="strategy-sub abt-fade delay-3">
              Strengthening academic credibility, expanding participation,
              and growing digital influence.
            </p>
          </div>

          <div className="row g-4 mt-3">
            {strategy.map((s, i) => (
              <div className="col-md-6" key={s.title}>
                <div className={`strategy-card abt-fade delay-${i + 1}`}>
                  <h3 className="strategy-title">{s.title}</h3>
                  <ul className="strategy-list">
                    {s.items.map((item) => (
                      <li key={item}>
                        <span className="check" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ ROADMAP ============ */}
      <div className="roadmap-band">
        <div className="container roadmap-wrap">
          <div className="section-header">
            <span className="abt-eyebrow abt-fade delay-1">The next five years</span>
            <h2 className="abt-h2 abt-h2-light abt-fade delay-2">
              From foundation to <em>global influence.</em>
            </h2>
          </div>

          <div className="roadmap-track">
            {roadmap.map((stage, i) => (
              <div className={`roadmap-card abt-fade delay-${(i % 4) + 1}`} key={stage.year}>
                <span className="roadmap-year">{stage.year}</span>
                <h3 className="roadmap-title">{stage.title}</h3>
                <ul className="roadmap-list">
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ LEARN MORE ============ */}
      <div className="learnmore-band">
        <div className="container learnmore-wrap">
          <div className="section-header">
            <span className="abt-eyebrow abt-fade delay-1">Learn more</span>
            <h2 className="abt-h2 abt-fade delay-2">Elevating Kenyatta University medical student voices</h2>
            <p className="abt-fade delay-3">
              Elevating the voices of Kenyatta University medical students through creative,
              academic, and professional publication — a modern platform for ideas that shape
              the future of healthcare.
            </p>
          </div>

          <div className="row g-4 mt-3">
            <div className="col-lg-6 abt-fade delay-1">
              <h3>History &amp; Conception</h3>
              <p>
                The AKUMS Magazine was conceived in October 2025 by the AKUMS executive
                committee to fill a gap in medical student representation. The inaugural issue
                is scheduled for February 2026 after a successful call for submissions and
                the formation of a 14-member editorial team.
              </p>

              <h3>Legal Status</h3>
              <p>
                Operating as the publication arm of AKUMS, the magazine maintains editorial
                independence with dedicated leadership, budget, and strategy. Plans include
                formal registration as an independent community or media society to broaden
                partnerships and funding opportunities.
              </p>
            </div>

            <div className="col-lg-6 abt-fade delay-2">
              <h3>Founders &amp; Leadership</h3>
              <p>
                Founded by the AKUMS Executive Committee and a group of committed medical
                students, leadership is shared across a core editorial team. The Editor-in-
                Chief drives strategy while Managing Editors oversee daily operations. The
                magazine currently operates virtually, enabling collaboration across campuses.
              </p>

              <h3>Development Phase</h3>
              <p>
                Pre-launch / start-up: final preparations for the inaugural issue include
                team formation, content development, brand identity, website creation, and
                initial fundraising.
              </p>
            </div>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6 abt-fade delay-3">
              <h3>Product &amp; Services</h3>
              <p>
                A holistic publication spanning five core verticals: Medicine &amp; Science,
                Creative &amp; Arts, Career Progressions, Student Life, and Alumni Perspectives.
              </p>
              <ul className="strategy-list">
                <li>Print issues (bi-annual initially, scaling to monthly)</li>
                <li>Digital platform and eventual mobile app</li>
                <li>Multimedia content: podcasts and video documentaries</li>
                <li>Community events: workshops, panels, and an annual conference</li>
              </ul>
            </div>

            <div className="col-md-6 abt-fade delay-4">
              <h3>Future Vision</h3>
              <p>
                Starting within Kenyatta University, the magazine aims to expand to other
                Kenyan and East African medical schools by Year 3 and grow into a regional
                and eventually global voice for student-led healthcare discourse.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}