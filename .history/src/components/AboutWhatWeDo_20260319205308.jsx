import React, { useRef, useEffect, useState } from "react";
import "../styles/about_whatwedo.css";
import image from "../assets/MOMlogo.jpg";


const AboutWhatWeDo = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // List for AbouWhatWeDo section
  const whatWeDoList = [
    {
      icon: <i className='bi bi-mortarboard-fill' style={{ color: "black" }}></i>,
      frontTitle: "Academic Mentorship",
      backTitle: "What We Do",
      backText: "We support students via mentorship sessions, peer-led meetings, and encourage study groups to nurture excellence."
    },
    {
      icon: <i className='bi bi-heart-pulse-fill' style={{ color: "#ad1818" }}></i>,
      frontTitle: "Community Health Outreach",
      backTitle: "What We Do",
      backText: "We conduct medical camps, health education drives, screenings, and awareness campaigns in underserved communities and underrepresented health conditions."
    },
    {
      icon: <i className='bi bi-lightbulb-fill' style={{ color: "#5927b8" }}></i>,
      frontTitle: "Leadership & Innovation",
      backTitle: "What We Do",
      backText: "We foster leadership skills and promote innovation through workshops, seminars, and collaborative projects."
    },
    {
      icon:<i className='bi bi-globe2' style={{ color: "#1a73e8" }}></i>,
      frontTitle: "Global Partnerships",
      backTitle: "What We Do",
      backText: "We collaborate with international organizations to expand our impact and create meaningful change."

    },
      {
      icon:  <img src={image} alt="Mind Over Matter" style={{ borderRadius: "50%", width: "100px", height: "100px" }} />,
      frontTitle: "Student Welfare",
      backTitle: "Mind Over Matter",
      backText: "Mind Over Matter is a mental health and wellness club dedicated to supporting medical students through open conversations, peer support, and initiatives that promote emotional resilience, balance, and personal growth."
    }
  ];


  // Intersection Observer to trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.15 } // Trigger when 15% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      className={`what-we-do py-5 ${isVisible ? 'is-visible' : ''}`} 
      ref={sectionRef}
    >
      <div className="container text-center">

        <h2 className="section-title mb-4 text-center">WHAT WE DO</h2>

        <p className="intro-text mb-5">
          AKUMS offers a broad spectrum of programs and initiatives to help
          medical students grow academically, professionally, and socially.
        </p>

        <div className="row gy-4">
          
         

          {/* Community Health Outreach */}
          {whatWeDoList.map((item, index) => (
            
        <div className="col-md-4" key={index}>
          <div
            className="ui-flip-card"
            onClick={(e) => e.currentTarget.classList.toggle("ui-active")}
          >
            <div className="ui-flip-inner">

              {/* Front */}
              <div className="ui-flip-front">
                <div className="ui-icon-circle">
                  {item.icon}
                </div>

                <h4 className="ui-card-title">{item.frontTitle}</h4>
              </div>

              {/* Back */}
              <div className="ui-flip-back">
                <h3>{item.backTitle}</h3>
                <p>
                  {item.backText}
                </p>
              </div>

            </div>
          </div>
        </div>

          )) }
          


        </div>
      </div>
    </section>
  );
};

export default AboutWhatWeDo;