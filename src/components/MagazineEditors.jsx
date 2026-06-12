import { useEffect, useRef } from "react";
import "../styles/editorialTeam.css";
import rodneyImg from "../assets/team/rodney-shomba.jpeg";
import orinaImg from "../assets/team/orina-mitchel.jpg";
import ellenImg from "../assets/team/ellen-bahati.jpg";
import collinsImg from "../assets/team/collins-wanjau.jpg";
import manassehImg from "../assets/team/mannaseh-mwangi.jpg";
import fridahImg from "../assets/team/fridah-maina.jpg";
import nicoleImg from "../assets/team/nicole-noah.jpg";
import solomonImg from "../assets/team/solomon.jpg";
import waitaImg from "../assets/team/waita-maina.jpg";

const teamGroups = [
  {
    label: "Editorial Leadership",
    members: [
      { name: "Rodney Shomba", role: "Editor-in-Chief", image: rodneyImg },
      { name: "Solomon Mulili", role: "Managing Editor" },
      { name: "Ellen Bahati", role: "Deputy Managing Editor", image: ellenImg },
    ],
  },
  {
    label: "Editorial Team",
    members: [
      { name: "Keith", role: "Science Editor" },
      { name: "Leon", role: "Medical Editor" },
      { name: "Manasseh Mwangi", role: "Creative Arts Director", image: manassehImg },
      { name: "Orina Mitchel", role: "Alumni Editor", image: orinaImg },
      { name: "Waita Maina", role: "Student Life Editor", image: waitaImg },
      { name: "Jesse", role: "Events Editor" },
    ],
  },
  {
    label: "Design",
    members: [
      { name: "Solomon", role: "Designer", image: solomonImg },
      { name: "Fridah Maina", role: "Designer", image: fridahImg },
    ],
  },
  {
    label: "Marketing",
    members: [
      { name: "Nicole Noah", role: "Marketing Officer", image: nicoleImg },
      { name: "Vincent Macharia", role: "Marketing Officer" },
    ],
  },
  {
    label: "Media",
    members: [
      { name: "Collins Wanjau", role: "Photographer", image: collinsImg },
    ],
  },
];

const totalMembers = teamGroups.reduce((sum, g) => sum + g.members.length, 0);
const totalGroups = teamGroups.length;

const getInitials = (name) =>
  name
    .trim()
    .split(/\s+/)
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function EditorialTeam() {
  const pageRef = useRef(null);

  useEffect(() => {
    const items = pageRef.current?.querySelectorAll(".ed-fade");
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
    <section className="editorial-page" ref={pageRef} id="editorial-team">

      {/* ============ HERO ============ */}
      <div className="editorial-hero">
        <div className="container">
          <span className="ed-eyebrow ed-fade delay-1">AKUMS Magazine · Issue I</span>
          <h1 className="ed-display">
            <span className="ed-line-1 ed-fade delay-2">Meet the</span>
            <span className="ed-line-2 ed-fade ed-fade-rise delay-3">EDITORS</span>
            <span className="ed-line-3 ed-fade delay-4">behind every word.</span>
          </h1>
          <p className="ed-hero-sub ed-fade delay-5">
            {totalMembers} students. One mission — to build a magazine that
            sounds like medical school actually feels.
          </p>
        </div>
      </div>

      {/* ============ STATS ============ */}
      <div className="stats-band">
        <div className="container stats-wrap">
          <div className="row g-4 text-center justify-content-center">
            <div className="col-4">
              <div className="stat-item ed-fade delay-1">
                <span className="stat-num">{totalMembers}</span>
                <span className="stat-label">Members</span>
              </div>
            </div>
            <div className="col-4">
              <div className="stat-item ed-fade delay-2">
                <span className="stat-num">{totalGroups}</span>
                <span className="stat-label">Departments</span>
              </div>
            </div>
            <div className="col-4">
              <div className="stat-item ed-fade delay-3">
                <span className="stat-num">6</span>
                <span className="stat-label">Year Levels</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ TEAM ============ */}
      <div className="team-band">
        <div className="container team-wrap">
          <div className="section-header">
            <span className="ed-eyebrow ed-fade delay-1">The roster</span>
            <h2 className="ed-h2 ed-h2-light ed-fade delay-2">
              Thirteen minds. <em>One magazine.</em>
            </h2>
          </div>

          {teamGroups.map((group, gi) => (
            <div className="team-group" key={group.label}>
              <div className="group-header ed-fade delay-1">
                <span className="group-num">{String(gi + 1).padStart(2, "0")}</span>
                <h3 className="group-label">{group.label}</h3>
                <span className="group-line" aria-hidden="true"></span>
              </div>

              <div className="row g-4 justify-content-start">
                {group.members.map((member, mi) => (
                  <div
                    className="col-6 col-md-4 col-lg-3"
                    key={`${group.label}-${mi}`}
                  >
                    <div
                      className={`team-card ed-fade delay-${(mi % 4) + 1}`}
                    >
                      <div className="photo-ring">
                        <div className="photo-circle">
                          {member.image ? (
                            <img src={member.image} alt={member.name} className="photo-img" />
                          ) : (
                            <span className="photo-initials">
                              {getInitials(member.name)}
                            </span>
                          )}
                        </div>
                      </div>
                      <h4 className="team-name">{member.name}</h4>
                      <p className="team-role">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}