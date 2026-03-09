import "../styles/home_events.css";
import "bootstrap"

// Sample event data
const eventsData = [
 {
  id: 1,
  image: "/images/IMG_4743.jpg",
  badge: "Academic & Professional",
  title: "White Coat Ceremony",
  intro:
    "A milestone ceremony officially welcoming first-year medical students into the medical profession.",
  details: "September 2026 | Kenyatta University Main Campus",
  full:
    "The AKUMS White Coat Ceremony is a cherished tradition marking the formal induction of first-year medical students into the profession. Students receive their first white coats, symbolizing responsibility, compassion, and commitment to ethical medical practice. Distinguished faculty and clinicians deliver inspiring addresses that reinforce the values of integrity, service, and respect for patients.",
  sponsors: ["Sponsor Us? Contact us @ Email : akumssecretariat@gmail.com"],
},
{
  id: 2,
  image: "/images/IMG_2038.JPG",
  badge: "Sports & Social",
  title: "Football Tournament",
  intro:
    "An exciting tournament uniting medical students through teamwork, fitness, and friendly competition.",
  details: "To Be Announced | Kenyatta University Main Campus",
  full:
    "The AKUMS Football Tournament is an annual wellness and social event promoting physical fitness, teamwork, and stress relief among medical students. Teams compete in a structured knockout format officiated by certified referees. Beyond the matches, the event fosters networking, school spirit, and camaraderie, creating a vibrant and memorable experience for all.",
  sponsors: ["Sponsor Us? Contact us @ Email : akumssecretariat@gmail.com"],
},
{
  id: 3,
  image: "/images/IMG_1512.JPG",
  badge: "Community & Welfare",
  title: "Blood Donation Drive",
  intro:
    "A life-saving initiative uniting students and partners to support patients in need of blood.",
  details: "To Be Announced | Kenyatta University Main Campus",
  full:
    "The AKUMS Blood Donation Drive is a humanitarian initiative addressing the critical shortage of blood in hospitals and emergency facilities. Conducted alongside certified medical teams, the drive ensures a safe and well-supervised donation process. The event also raises awareness about the importance of voluntary blood donation and community responsibility, while inviting partners to support logistics and outreach efforts.",
  sponsors: ["Sponsor Us? Contact us @ Email : akumssecretariat@gmail.com"],
}
];

function HomeEvents() {
  return (
  <section id="upcoming-events" className="events-section py-5">
  <div className="container">
    <div className="text-center mb-5">
      <h2>UPCOMING EVENTS</h2>
      <p className="delap mb-0">
        Discover impactful events designed to inspire leadership, service, and academic excellence.
      </p>
    </div>

    <div className="events-list">
      {eventsData.map((event) => (
        <div className="event-card row align-items-center mb-4" key={event.id}>
          {/* Left Image */}
          <div className="col-md-3 text-center">
            <img
              src={event.image || "/assets/images/placeholder.png"}
              alt={event.title}
              className="event-image img-fluid rounded shadow-sm"
              onError={(e) => (e.currentTarget.src = "/assets/images/placeholder.png")}
            />
          </div>

          {/* Right Content */}
          <div className="col-md-9">
            <span className="event-badge">{event.badge}</span>
            <h3>{event.title}</h3>
            <p className="event-intro">{event.intro}</p>

            <div className="event-details mb-2">
              <i className="bi bi-calendar-event text-primary me-2"></i> {event.details}
            </div>

            <p className="event-full">{event.full}</p>

            <div className="event-section mt-2">
              <strong>Event Sponsors:</strong>
              <div className="event-sponsors mt-1">
                {event.sponsors.map((sponsor, i) => (
                  <span key={i}>{sponsor}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}

export default HomeEvents;  