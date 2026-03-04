import "../styles/editorialTeam.css";

export default function EditorialTeam() {
  const placeholder = "/images/placeholder.png"; // placeholder image path

  const teamMembers = [
    { name: "Rodney Shomba", role: "Editor-in-Chief" },
    { name: "Solomon Mulili", role: "Managing Editor" },
    { name: "Eileen Bahati", role: "Deputy Managing Editor" },
    { name: "Keith", role: "Science Editor" },
    { name: "Leon", role: "Medical Editor" },
    { name: "Manasseh", role: "Creative Arts Director" },
    { name: "Mitchel", role: "Alumni Editor" },
    { name: "Waita", role: "Student Life Editor" },
    { name: "Jesse", role: "Events Editor" },
    { name: "Solomon ", role: "Designer" },
    { name: "Fridah", role: "Designer" },
    { name: "Nicole Noah", role: "Marketing Officer" },
    { name: "Vincent Macharia", role: "Marketing Officer" },
    // Add more members here
  ];

  return (
    <section className="editorial-team-section py-5" id="editorial-team">
  <div className="container">
    {/* Congratulatory Header */}
    <div className="text-center mb-5">
      <h2 className="section-title">EDITORIAL TEAM</h2>
      <p className="section-subtitle">
        Congratulations to our dedicated editorial team! Your passion, creativity,
        and hard work make AKUMS Magazine possible.
      </p>

      {/* Team Vision / Excitement */}
      <p className="team-vision mt-4">
        What excites this team about AKUMS is the opportunity to create something unprecedented at Kenyatta University—a platform that recognizes medical students as multidimensional individuals with voices that matter beyond their academic performance. Each team member brings unique skills while sharing a common commitment: ensuring that future generations of medical students have a space to be heard, celebrated, and connected.
      </p>

      <p className="team-vision">
        The team's strength lies in its diversity of perspectives (spanning 1st to 6th year students), complementary skill sets (editorial, creative, technical, marketing), and shared values of authenticity and excellence. This combination positions AKUMS to deliver professional-quality content while maintaining the genuine student voice that makes the publication unique.
      </p>
    </div>

    {/* Team Grid */}
    <div className="row g-4 justify-content-center">
      {teamMembers.map((member, index) => (
        <div className="col-6 col-md-4 col-lg-3" key={index}>
          <div className="team-card">
            <img
              src={placeholder}
              alt={member.name}
              className="team-photo"
            />
            <h5 className="team-name">{member.name}</h5>
            <p className="team-role">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    
  );
}