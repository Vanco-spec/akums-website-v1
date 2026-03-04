import React from "react";
import "../styles/alumni_updates.css";

const updates = [
  {
    tag: "Milestone",
    title: "Celebrating Our Growing Global Network",
    description:
      "Our alumni community continues to expand across multiple countries and specialties. We are building a truly global network of healthcare leaders.",
    date: "Ongoing",
  },
  {
    tag: "Opportunity",
    title: "Mentorship Program Opening Soon",
    description:
      "We are preparing to launch a structured mentorship platform connecting alumni with current students for career guidance and leadership development.",
    date: "Launching 2026",
  },
  {
    tag: "Community",
    title: "Annual Alumni Reunion Planning",
    description:
      "Plans are underway for our next alumni reunion event. Stay connected and be part of meaningful conversations and collaborations.",
    date: "Coming Soon",
  },
  {
    tag: "Spotlight",
    title: "Nominate an Alumni Achiever",
    description:
      "Know an alumnus doing exceptional work? Nominate them to be featured in our Alumni Spotlight section.",
    date: "Open Submission",
  },
];

function AlumniUpdates() {
  return (
    <section className="alumni-updates py-5">
      <div className="container text-center">
        <h2 className="section-title mb-3">
          Alumni Highlights & Opportunities
        </h2>

        <p className="lead text-muted mx-auto mb-5 updates-subtitle">
          Stay connected with the progress, initiatives, and opportunities shaping
          the AKUMS Alumni Network.
        </p>

        <div className="row g-4">
          {updates.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="update-card h-100 text-start">
                <span className="update-tag">{item.tag}</span>
                <h5 className="mt-3">{item.title}</h5>
                <p>{item.description}</p>
                <small className="text-muted">{item.date}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AlumniUpdates;