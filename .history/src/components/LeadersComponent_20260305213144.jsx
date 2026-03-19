import React, { useState } from "react";
import "../styles/leaders.css";

const leaders2025 = [
  {
    role: "President",
    name: "James Mvoi",
    description:
      "Provides strategic leadership, represents AKUMS externally, and chairs executive meetings.",
    email: "john.mwangi@ku.ac.ke",
    linkedin: "https://linkedin.com/in/johnmwangi",
    featured: true,
  },
  {
    role: "Vice President",
    name: "Karen Gitau",
    description:
      "Supports the President, oversees programs, and coordinates cross-department collaboration.",
    email: "mary.wambui@ku.ac.ke",
    linkedin: "https://linkedin.com/in/marywambui",
    featured: true,
  },
  {
    role: "Organizing Secretary",
    name: "Airo Emmanuel",
    description:
      "Supports the President, oversees programs, and coordinates cross-department collaboration.",
    email: "mary.wambui@ku.ac.ke",
    linkedin: "https://linkedin.com/in/marywambui",
    featured: true,
  },  
  {
    role: "Assistant Organizing Secretary",
    name: "Lawrence Chomba",
    description:
      "Supports the President, oversees programs, and coordinates cross-department collaboration.",
    email: "mary.wambui@ku.ac.ke",
    linkedin: "https://linkedin.com/in/marywambui",
    featured: true,
  },
  {
    role: "Finance - Officer",
    name: "Brian Wari",
    description:
      "Manages budgets, dues and financial reporting for AKUMS activities.",
    email: "cynthia.njoroge@ku.ac.ke",
    linkedin: "https://linkedin.com/in/cynthianjoroge",
  },
  {
    role: "Assistant Finance - Officer",
    name: "Sam Zeddy",
    description:
      "Manages budgets, dues and financial reporting for AKUMS activities.",
    email: "cynthia.njoroge@ku.ac.ke",
    linkedin: "https://linkedin.com/in/cynthianjoroge",
  },
  {
    role: "ICT Manager",
    name: "Mulili Mathaya",
    description:
      "Maintains the website, manages online tools and supports digital events.",
    email: "ict@akums.org",
    linkedin: "https://linkedin.com",
  },
  {
    role: "Assistant ICT Manager",
    name: "Vincent Murithi",
    description:
      "Maintains the website, manages online tools and supports digital events.",
    email: "ict@akums.org",
    linkedin: "https://linkedin.com",
  },
  {
    role: "Publicity Manager",
    name: "Ivy Kamotho",
    description:
      "Supports the President, oversees programs, and coordinates cross-department collaboration.",
    email: "mary.wambui@ku.ac.ke",
    linkedin: "https://linkedin.com/in/marywambui",
    featured: true,
  },
  {
    role: "Sports Representative",
    name: "Lewis Moronya",
    description:
      "Maintains the website, manages online tools and supports digital events.",
    email: "ict@akums.org",
    linkedin: "https://linkedin.com",
  },
  {
    role: "Assistant Sports Representative",
    name: "Grievance Kiptoo",
    description:
      "Maintains the website, manages online tools and supports digital events.",
    email: "ict@akums.org",
    linkedin: "https://linkedin.com",
  },
  {
    role: "6TH YEAR CLASS REP",
    name: "Caroline Gakinya",
    description:
      "Supports the President, oversees programs, and coordinates cross-department collaboration.",
    email: "mary.wambui@ku.ac.ke",
    linkedin: "https://linkedin.com/in/marywambui",
    featured: true,
  },
  {
    role: "6TH YEAR CLASS REP",
    name: "Eustace King'athia",
    description:
      "",
    email: "mary.wambui@ku.ac.ke",
    linkedin: "https://linkedin.com/in/marywambui",
    featured: true,
  },
  {
    role: "4TH YEAR CLASS REP",
    name: "Faith Okwaro",
    description:
      "",
    email: "mary.wambui@ku.ac.ke",
    linkedin: "https://linkedin.com/in/marywambui",
    featured: true,
  },
  {
    role: "3RD YEAR CLASS REP",
    name: "Jacktone Aguaya",
    description:
      "",
    email: "mary.wambui@ku.ac.ke",
    linkedin: "https://linkedin.com/in/marywambui",
    featured: true,
  },
  {
    role: "2ND YEAR CLASS REP",
    name: "Patrick Obat",
    description:
      "",
    email: "mary.wambui@ku.ac.ke",
    linkedin: "https://linkedin.com/in/marywambui",
    featured: true,
  },
  {
    role: "1ST YEAR CLASS REP",
    name: "Theo Walcott ",
    description:
      "",
    email: "mary.wambui@ku.ac.ke",
    linkedin: "https://linkedin.com/in/marywambui",
    featured: true,
  },

];

const LeadersComponent = () => {
  const [openYear, setOpenYear] = useState(null);

  const toggleYear = (year) => {
    // If clicked year is already open, close it
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <section id="leaders-section" className="py-5">
      <div className="container">
        <h2
          className="section-title text-center mb-4"
          style={{ color: "#081F33" }}
        >
          LEADERSHIP SPOTLIGHT
        </h2>

        <p className="lead text-center mb-5 fw-normal">
          Meet the dedicated team leading the{" "}
          <strong>
            Association of Kenyatta University Medicine Students (AKUMS)
          </strong>{" "}
          — inspiring growth, service, and unity within the medical fraternity.
        </p>

        <div className="accordion" id="leadersAccordion">
          {/* ===== 2025 ===== */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading2025">
              <button
                className={`accordion-button ${
                  openYear === 2025 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleYear(2025)}
              >
                OFFICIALS OF 2025
              </button>
            </h2>

            <div
              className={`accordion-collapse collapse ${
                openYear === 2025 ? "show" : ""
              }`}
            >
              <div className="accordion-body">
                <div className="row g-4 justify-content-center">
                  {leaders2025.map((leader, index) => (
                    <div
                      key={index}
                      className={
                        leader.featured
                          ? "col-12 col-md-4"
                          : "col-6 col-md-4 col-lg-3"
                      }
                    >
                     <div className="leader-card p-4 text-center shadow-sm">
                      <img
                        src={leader.photo || "/images/placeholder.png"}
                        alt={`${leader.name} — ${leader.role}`}
                        className="leader-photo mb-3"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/assets/images/placeholder.png";
                        }}
                      />

                      <h5 className="fw-bold mb-1">{leader.name}</h5>
                      <p className="text-muted small mb-2">{leader.role}</p>

                      <p className="leader-function mb-3">{leader.description}</p>

                      <div className="leader-contact">
                        <a href={`mailto:${leader.email}`} className="me-3">
                          <i className="bi bi-envelope"></i>
                        </a>

                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                      </div>
                    
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ===== 2024 ===== */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading2024">
              <button
                className={`accordion-button ${
                  openYear === 2024 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleYear(2024)}
              >
                OFFICIALS OF 2024
              </button>
            </h2>

            <div
              className={`accordion-collapse collapse ${
                openYear === 2024 ? "show" : ""
              }`}
            >
              <div className="accordion-body">
                <ul className="list-unstyled">
                  <li>
                    <strong>COMING SOON BE PATIENT, THANK YOU FOR UNDERSTANDING</strong> 
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadersComponent;