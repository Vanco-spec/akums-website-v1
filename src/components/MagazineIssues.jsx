import { useEffect, useRef } from "react";
import "../styles/magazine_issues.css";
import magazinePdf from "../assets/pdfs/AKUMS MAGAZINE ISSUE 1.pdf";

const magazines = [
  {
    title: "Volume 1 Issue 1",
    pdf: magazinePdf,
    cover: "/images/magazinefinal.jpg",
    issueLabel: "Issue I",
    issueMonth: "June 2026",
    description:
      "A premium debut issue with medicine, research, student life, and alumni storytelling.",
    pages: [
      {
        type: "hard",
        title: "AKUMS Magazine",
        subtitle: "Volume 1 Issue 1",
        body: [
          "The official digital magazine of the Association of Kenyatta University Medical Students.",
          "Experience premium writing, visual clarity, and page-turn animations built for modern readers.",
        ],
      },
      {
        section: "Editor's Note",
        title: "Welcome to AKUMS Magazine",
        body: [
          "This inaugural issue is designed for curious minds in medicine, research, and student leadership.",
          "Inside these pages you will find investigative reporting, reflective essays, and practical ideas for the future of healthcare.",
        ],
      },
      {
        section: "Feature",
        title: "When Hospitals Go Silent",
        body: [
          "A medical student traces the strain on Kenya's public hospitals and the human stories behind each silent ward.",
          "From broken referral systems to resilient health workers, this feature reveals the urgent case for better hospital care.",
        ],
      },
      {
        section: "Insight",
        title: "Healing Beyond Diagnosis",
        body: [
          "Clinical care begins with listening. This article explores how compassion and context shape better outcomes.",
          "Read stories from students who discovered that medicine is as much about understanding people as it is about reading lab sheets.",
        ],
      },
      {
        section: "Research",
        title: "From Campus to Clinic",
        body: [
          "Discover how student research at Kenyatta University is moving from lab benches to patient rooms.",
          "Highlights include a new study on community health, diagnostic innovation, and collaborative learning.",
        ],
      },
      {
        section: "Alumni",
        title: "Expectations vs. Reality",
        body: [
          "An alumni reflection on the promise of medical school and the real pace of practice at Kenyatta National Hospital.",
          "Advice for the next generation of medical students, straight from the front lines of care.",
        ],
      },
      {
        section: "Creative",
        title: "Medical Moments",
        body: [
          "Poetry, photography, and micro essays that capture the emotional landscape of a medical career.",
          "A quiet reminder that medicine is part science, part story.",
        ],
      },
      {
        type: "hard",
        title: "Back Cover",
        subtitle: "AKUMS Magazine",
        body: [
          "Thank you for reading the AKUMS Magazine debut issue.",
          "Download the full PDF to keep the issue, or return soon for the next volume.",
        ],
      },
    ],
  },
];

const tocItems = [
  {
    page: "08",
    title: "When Hospitals Go Silent",
    author: "AKUMS Magazine",
  },
  {
    page: "15",
    title: "Healing Beyond Diagnosis",
    author: "AKUMS Magazine",
  },
  {
    page: "21",
    title: "Book Balance & Bae",
    author: "AKUMS Magazine",
  },
  {
    page: "24",
    title: "The People's Choice",
    author: "AKUMS Magazine",
  },
  {
    page: "35",
    title: "Jong Enterprise Feature",
    author: "AKUMS Magazine",
  },
  {
    page: "39",
    title: "Inside KU's Blood Drive",
    author: "AKUMS Magazine",
  },
  {
    page: "42",
    title: "KUMREC Feature",
    author: "AKUMS Magazine",
  },
  {
    page: "43",
    title: "TB Article",
    author: "AKUMS Magazine",
  },
  {
    page: "51",
    title: "Med School Life",
    author: "AKUMS Magazine",
  },
  {
    page: "55",
    title: "Kaefkaesque",
    author: "AKUMS Magazine",
  },
  {
    page: "58",
    title: "Love and Attachment",
    author: "AKUMS Magazine",
  },
  {
    page: "60",
    title: "History Taking and the Economies of Explanation",
    author: "AKUMS Magazine",
  },
  {
    page: "62",
    title: "Poetry",
    author: "AKUMS Magazine",
  },
];

const featuredArticles = [
  {
    tag: "Hospital Care",
    title: "When Hospitals Go Silent",
    excerpt:
      "A medical student's powerful confrontation with a broken healthcare system. This gripping narrative takes you into the reality of Kenyan hospitals struggling to function—where the smell of decay lingers in hallways and patients wait endlessly for care. The author witnesses the collapse of TB care systems and meets a father traveling alone to find the specialized treatment his county hospital cannot provide. A plea for system-wide change wrapped in personal empathy and urgent call to action.",
    details: "Page 8 | By Wamba Leon",
  },
  {
    tag: "Listening",
    title: "Diagnosis in the Refrain: What \"Stella\" Taught Me About Listening",
    excerpt:
      "What began as an ordinary patient encounter becomes a lesson in the art of listening. A patient arrives humming Stella, and through his family's melody—their love story, their trauma, their collapse—the author discovers that patients don't give us information; they give us their whole lives. Watch how a single song unravels the hidden narrative within a diagnosis, reminding us that medicine is as much about understanding the human story as it is about reading lab sheets. A beautiful meditation on chronic illness, loss, and what it means to truly hear.",
    details: "Page 13 | By Terry Neema Waswa, 5th Year Medical Student",
  },
  {
    tag: "Reflection",
    title: "Expectations vs. Reality: Alumni Reflection",
    excerpt:
      "From medical school idealism to the grueling reality of Kenyatta National Hospital—this alumni's honest reflection shatters myths about what medicine actually demands. Expecting balanced work-life harmony and organized learning, Dr. Kotieno instead discovered medicine is a marathon requiring resilience, adaptability, and unwavering determination. Get real advice on building fundamentals, trusting the process, and pacing yourself for the long haul. Essential reading for current medical students.",
    details: "Page 19 | By Dr. Fredrick Kotieno",
  },
];

export default function IssuePage() {
  const pageRef = useRef(null);

  const currentMagazine = magazines[0];

  useEffect(() => {
    document.title = "AKUMS Magazine";
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content =
        "AKUMS Magazine delivers premium medical storytelling with a responsive digital page-turn reader.";
    }
  }, []);

  useEffect(() => {
    const items = pageRef.current?.querySelectorAll(".iss-fade");
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
    <section className="issue-page" ref={pageRef}>

      {/* ============ HERO BANNER ============ */}
      <div className="issue-hero hero-banner">
        <div className="container preview-wrap">
          <div className="hero-banner-grid">
            <span className="iss-eyebrow iss-fade delay-1">AKUMS Magazine · Volume 1 Issue 1</span>
            <h2 className="hero-banner-title iss-fade delay-2">
              White Coat <em>Diaries</em>
            </h2>
            <p className="hero-banner-copy iss-fade delay-3">
              A premium debut issue bringing together student-led stories from medicine, research, alumni life, and clinical culture.
            </p>
            <div className="hero-banner-note iss-fade delay-4">
              Explore the preview below to feel the rhythm, voices, and moments that define AKUMS Magazine’s first issue.
            </div>
          </div>
        </div>
      </div>

      {/* ============ HERO PREVIEW ============ */}
      <div className="issue-hero preview-hero">
        <div className="container preview-wrap">
          <div className="hero-grid">
            <div className="hero-copy iss-fade delay-1">
              <span className="iss-eyebrow">AKUMS Magazine · Issue I</span>
              <div className="hero-chip iss-fade delay-2">The inaugural issue is on the way.</div>
              <h1 className="hero-title iss-fade delay-3">
                White Coat <em>Diaries.</em>
              </h1>
              <p className="preview-desc iss-fade delay-4">
                An anthology of student-led storytelling across medicine, research,
                student life, and alumni voices — wrapped in a premium debut issue.
              </p>
              <div className="hero-brief iss-fade delay-5">
                What You Ordered vs. What You Got — a fresh editorial take on the
                expectations and realities of medical training in Kenya.
              </div>
              <ul className="preview-meta iss-fade delay-6">
                <li>
                  <span className="meta-label">Editor-in-Chief</span>
                  <span className="meta-value">Rodney Shomba</span>
                </li>
                <li>
                  <span className="meta-label">Publication</span>
                  <span className="meta-value">June 2026</span>
                </li>
                <li>
                  <span className="meta-label">Format</span>
                  <span className="meta-value">72 pages · digital + print</span>
                </li>
              </ul>
              <div className="preview-actions iss-fade delay-7">
                <a href="/magazine/read" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read Magazine</a>
                <a href={currentMagazine.pdf} download className="btn btn-outline-secondary">Download PDF</a>
              </div>
            </div>

            <div className="hero-visual iss-fade delay-4">
              <div className="cover-frame">
                <div className="cover-tilt">
                  <img
                    src="/images/magazinecover.jpg"
                    alt="AKUMS Medical Magazine — Issue I cover"
                    className="cover-img"
                    loading="lazy"
                  />
                  <span className="cover-badge">Issue I</span>
                </div>
              </div>
              <div className="hero-note">
                <strong>Issue I</strong>
                <p>72 pages of stories, reflections, and medical culture.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ TABLE OF CONTENTS ============ */}
      <div className="toc-band">
        <div className="container toc-wrap">
          <div className="section-header">
            <span className="iss-eyebrow iss-fade delay-1">Inside the issue</span>
            <h2 className="iss-h2 iss-h2-light iss-fade delay-2">
              Table of <em>contents</em>
            </h2>
          </div>

          <div className="toc-list">
            {tocItems.map((item, i) => (
              <div className={`toc-item iss-fade delay-${(i % 4) + 1}`} key={item.title}>
                <span className="toc-page">{item.page}</span>
                <div className="toc-body">
                  <h4 className="toc-title">{item.title}</h4>
                  <p className="toc-author">{item.author}</p>
                </div>
                <span className="toc-arrow" aria-hidden="true"></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ FEATURED ============ */}
      <div className="featured-band">
        <div className="container featured-wrap">
          <div className="section-header">
            <span className="iss-eyebrow iss-eyebrow-dark iss-fade delay-1">Featured stories</span>
            <h2 className="iss-h2 iss-fade delay-2">
              Three pieces. <em>One preview.</em>
            </h2>
          </div>

          <div className="row g-4 mt-3">
            {featuredArticles.map((article, i) => (
              <div className="col-md-6 col-lg-4" key={article.title}>
                <article className={`feature-card iss-fade delay-${i + 1}`}>
                  <span className="feature-tag">{article.tag}</span>
                  <h3 className="feature-title">{article.title}</h3>
                  <p className="feature-details">{article.details}</p>
                  <p className="feature-excerpt">{article.excerpt}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}