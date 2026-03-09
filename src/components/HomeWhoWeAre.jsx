import "./../styles/home_about.css"; // Create a CSS file for this section

// Optional: image import if stored in src/assets
// import whoImage from "../assets/images/IMG_1283.JPG";

function HomeWhoWeAre() {
  return (
    <section
      className="who-we-are py-5"
      id="about-us"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Image Side */}
          <div className="col-md-6 fade-on-scroll-left">
            <div className="about-img-wrapper">
              <img
                src="/images/IMG_1283.JPG"
                // src={whoImage} // Uncomment if you imported image from src/assets
                alt="AKUMS Members - Future Healthcare Professionals"
                className="img-fluid rounded-3 shadow about-img"
                loading="lazy"
              />
              {/* Optional DNA overlay */}
              <div className="dna-overlay"></div>
            </div>
          </div>

          {/* Text Side */}
          <div className="col-md-6 fade-on-scroll-right py-5">
            <h2
              id="about-title"
              className="section-titles mb-4"
              style={{ color: "#081F33" }}
            >
              WHO WE ARE
            </h2>

            <p className="lead fade-item delay-1">
              The{" "}
              <strong style={{ color: "#1F4FA3" }}>
                Association of Kenyatta University Medicine Students (AKUMS)
              </strong>{" "}
              is a student-led organization uniting future healthcare professionals with a
              shared purpose of service, leadership, and academic excellence.
            </p>

            <p className="fade-item delay-2">
              We are passionate about improving community health, supporting one another through
              medical training, and creating a positive impact within and beyond Kenyatta University.
              Our members are committed to advancing knowledge, fostering collaboration, and
              embracing innovation in medical education.
            </p>

            <p className="fade-item delay-3">
              Through mentorship, peer support, and community outreach programs, we cultivate a culture
              of empathy, resilience, and professionalism among aspiring healthcare leaders.
              We believe that by empowering our members today, we shape a healthier and more compassionate
              society tomorrow.
            </p>

            <p className="fade-item delay-4">
              AKUMS also provides opportunities for personal and professional growth through workshops, 
              seminars, and research initiatives. By engaging with experts, alumni, and the wider medical 
              community, our members gain practical skills, broaden their perspectives, and prepare to become 
              influential leaders in healthcare both locally and globally.
            </p>

            {/* Inspirational Quote */}
            <blockquote className="quote fade-item delay-4">
              <em>“Empowering future medics, transforming community health.”</em>
            </blockquote>

            {/* Call to Action */}
            <a
              href="/about"
              className="btn fade-item delay-5 mt-4"
              aria-label="Learn more about AKUMS"
              style={{ backgroundColor: "#1F4FA3", color: "#fff" }}
            >
              Discover Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeWhoWeAre;
