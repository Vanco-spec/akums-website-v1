import "../styles/home_hero.css";

function HomeHero() {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center justify-content-center text-center"
    >
      <div className="hero-overlay"></div>

      <div className="container position-relative hero-content">
        <h1 className="hero-titles mb-3">
          Welcome to the Association of Kenyatta University Medicine Students
        </h1>

        <p className="hero-subtitles mb-4">
          Empowering Kenyatta University student doctors with knowledge,
          leadership, and professional growth.
        </p>

        <a href="#about-us" className="btn hero-cta">
          <i className=" me-2"></i>
          Learn More
        </a>
      </div>
    </section>
  )
}

export default HomeHero
