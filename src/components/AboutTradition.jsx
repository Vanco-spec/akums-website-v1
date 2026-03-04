import React, { useRef, useEffect, useState } from "react";
import "./../styles/about_tradition.css";

const AkumsTraditions = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer with continuous re-triggering
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility based on intersection
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.15, // Trigger when 15% is visible
        rootMargin: "0px" // No margin for precise triggering
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup - don't disconnect, allow re-triggering
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      className={`akums-traditions py-5 ${isVisible ? 'is-visible' : ''}`} 
      ref={sectionRef}
    >
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="section-title">
            OUR COMMUNITY & ACADEMIC TRADITIONS
          </h2>

          <p className="lead text-muted mx-auto traditions-intro">
            These traditions define who we are — a community built on{" "}
            <strong>service</strong>, <strong>excellence</strong>,{" "}
            <strong>unity</strong>, and the shared journey of becoming
            future healthcare leaders.
          </p>
        </div>

        {/* ================= BLOOD DRIVE ================= */}
        <div className="row align-items-center g-4 mb-5 tradition-block">
          <div className="col-md-6">
            <img
              src="../images/IMG_1277.JPG"
              className="img-fluid rounded-4 shadow-lg tradition-image"
              alt="Blood Drive"
            />
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold text-danger tradition-title">
              <i className="bi bi-droplet-fill me-2"></i>
              BLOOD DRIVES
            </h3>

            <p className="text-muted tradition-text">
              AKUMS collaborates with the{" "}
              <strong>Kenya Tissue and Transplant Authority (KETTA)</strong>{" "}
              to host regular blood donation campaigns across the university.
            </p>

            <p className="tradition-text">
              Beyond donation, the blood drive teaches our members the true meaning of <br></br> 
              <strong>compassion</strong>, <strong>responsibility</strong>, and the real impact of medical service outside the classroom.
            </p>

            <p className="tradition-text">
              Each blood drive becomes a powerful reminder of the critical role medical students play 
              in strengthening Kenya's healthcare system long before they graduate. From mobilizing 
              fellow students to educating the public about the importance of safe blood donation, our 
              members actively participate in saving lives. The events also foster teamwork, leadership, 
              and public health advocacy — essential qualities for future doctors. Through this initiative, 
              AKUMS empowers students to appreciate the human connection behind every unit of blood donated 
              and to embrace the profound responsibility that comes with serving the community.
            </p>
          </div>
        </div>

        {/* ================= TOURNAMENT ================= */}
        <div className="row align-items-center g-4 mb-5 tradition-block flex-md-row-reverse">
          <div className="col-md-6">
            <img
              src="../images/IMG_1834.JPG"
              className="img-fluid rounded-4 shadow-lg tradition-image"
              alt="AKUMS Tournament"
            />
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold text-success tradition-title">
              <i className="bi bi-trophy-fill me-2"></i>
              AKUMS TOURNAMENT
            </h3>

            <p className="tradition-text">
              The AKUMS Tournament is more than sport — it's <strong>unity</strong>. Every year, medical students 
              come together to compete in football, basketball, volleyball, athletics and more.
            </p>

            <p className="tradition-text">
              Beyond competition, the tournament creates a vibrant atmosphere where students unwind, build 
              resilience, and support one another outside academic pressures. It becomes a space where first-years 
              mingle with finalists, departments connect, and talents are celebrated. The energy, cheering, and 
              collective spirit foster a sense of belonging that stays with students long after the games end. 
              Through sportsmanship, leadership, and collaboration, the AKUMS Tournament reinforces the idea that 
              a strong medical community is built not just in lecture halls, but also in the shared moments that 
              bring people together.
            </p>
          </div>
        </div>

        {/* ================= WHITE COAT CEREMONY ================= */}
        <div className="row align-items-center g-4 mb-5 tradition-block">
          <div className="col-md-6">
            <img
              src="/images/IMG_4743.jpg"
              className="img-fluid rounded-4 shadow-lg tradition-image"
              alt="White Coat Ceremony"
            />
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold text-primary tradition-title">
              <i className="bi bi-person-badge-fill me-2"></i>
              WHITE COAT CEREMONY
            </h3>

            <p className="text-muted tradition-text">
              A symbolic rite of passage for our new medical students. The Lab Coat Ceremony marks 
              the beginning of their professional journey — a moment of <strong>pride</strong>, <strong>dignity</strong>, and 
              commitment to ethical practice.
            </p>

            <p className="tradition-text">
              Families, faculty, and mentors join hands to welcome them into the noble fraternity 
              of medicine.
            </p>

            <p className="tradition-text">
              This ceremony represents more than simply wearing a coat; it introduces students to the 
              values and responsibilities that define the medical profession. It is a deeply emotional 
              moment, filled with hope, reflection, and the recognition of the path ahead. Students are 
              reminded that the white coat symbolizes trust, service, and the privilege of caring for 
              human life. Through inspiring speeches, mentorship, and shared celebration, the Lab Coat 
              Ceremony encourages students to carry themselves with integrity and compassion as they 
              embark on a lifelong journey of learning and healing.
            </p>
          </div>
        </div>

        {/* ================= STETHOSCOPE CEREMONY ================= */}
        <div className="row align-items-center g-4 tradition-block flex-md-row-reverse">
          <div className="col-md-6">
            <img
              src="../images/eventsample2.jpg"
              className="img-fluid rounded-4 shadow-lg tradition-image"
              alt="Stethoscope Ceremony"
            />
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold text-info tradition-title">
              <i className="bi bi-heart-pulse-fill me-2"></i>
              STETHOSCOPE CEREMONY
            </h3>

            <p className="text-muted tradition-text">
              As students transition into clinical years, the Stethoscope Ceremony celebrates 
              their readiness to meet patients, embrace <strong>empathy</strong>, and uphold professionalism.
            </p>

            <p className="tradition-text">
              It's a profound reminder that medicine is not just science — it is <strong>humanity</strong>.
            </p>

            <p className="tradition-text">
              Receiving a stethoscope symbolizes the trust society places in future doctors. It marks 
              the moment when theoretical knowledge begins to meet real patient interaction. For many 
              students, it is the first time they truly feel the weight and honor of the calling to serve. 
              Guided by mentors and inspired by clinicians who walked the path before them, students are 
              encouraged to listen not only to heartbeats, but also to the stories, fears, and hopes of 
              those they will care for. The ceremony reinforces the values of compassion, humility, and 
              ethical practice as they step into the world of clinical medicine.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AkumsTraditions;