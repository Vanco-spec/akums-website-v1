import React, { useRef, useEffect, useState } from "react";
import "../styles/about_whatwedo.css";
import FlipCard from "./FlipCard"


const AboutWhatWeDo = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // List for AbouWhatWeDo section
  const whatWeDoList = [
    {
      icon: "bi bi-mortarboard-fill",
      frontTitle: "Academic Mentorship",
      backTitle: "What We Do",
      backText: "We support students via mentorship sessions, peer-led meetings, and encourage study groups to nurture excellence."
    },
    {
      icon: "bi bi-heart-pulse-fill",
      frontTitle: "Community Health Outreach",
      backTitle: "What We Do",
      backText: "We conduct medical camps, health education drives, screenings, and awareness campaigns in underserved communities and underrepresented health conditions."
    },
    {
      icon: "bi bi-lightbulb-fill",
      frontTitle: "Leadership & Innovation",
      backTitle: "What We Do",
      backText: "We foster leadership skills and promote innovation through workshops, seminars, and collaborative projects."
    },
    {
      icon: "bi bi-globe2",
      frontTitle: "Global Partnerships",
      backTitle: "What We Do",
      backText: "We collaborate with international organizations to expand our impact and create meaningful change."

    },
      {
      icon: "bi bi-people-fill",
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

          {/* Academic Mentorship */}
          <div className="col-md-4">
            <div className="wd-block academic">
              <div className="wd-icon">
                <i className="bi bi-mortarboard-fill"></i>
              </div>
              <h4 className="wd-heading">Academic Mentorship</h4>
              <p>
                We support students via mentorship sessions,
                peer-led meetings, and encourage study groups to nurture excellence.
              </p>
            </div>
          </div>
         

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
                  <i className={item.icon}></i>
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
       
       

          {/* Leadership & Innovation */}
          <div className="col-md-4">
            <div className="wd-block leadership">
              <div className="wd-icon">
                <i className="bi bi-lightbulb-fill"></i>
              </div>
              
              <h4 className="wd-heading">Leadership & Innovation</h4> 
              <p>
                We build leadership capabilities via MSAKE seminars, innovation
                challenges, teamwork challanges and idea incubators.
              </p>
            </div>
          </div>

          {/* Global Partnerships */}
          <div className="col-md-6">
            <div className="wd-block partnerships">
              <div className="wd-icon">
                <i className="bi bi-globe2"></i>
              </div>
              <h4 className="wd-heading">Global Partnerships</h4>
              <p>
                We collaborate with international and local health bodies,
                giving students exposure to global health systems and opportunities.
              </p>
            </div>
          </div>

          {/* Student Welfare */}
          {/* Student Welfare Flip Card */}
<div className="col-md-6">
  <div className="flip-card">
    <div className="flip-card-inner">

      {/* Front */}
      <div className="flip-card-front wd-block welfare">
        <div className="wd-icon">
          <i className="bi bi-people-fill"></i>
        </div>
        <h4 className="wd-heading">Student Welfare</h4>
        <p>
          We promote well-being via advocacy, support services,
          welfare initiatives, and strong community among medical students.
        </p>
      </div>

      {/* Back */}
      <div className="flip-card-back wd-block welfare">
        <h4 className="wd-heading">Mind Over Matter</h4>
        <p>
          Mind Over Matter is a mental health and wellness club dedicated
          to supporting medical students through open conversations,
          peer support, and initiatives that promote emotional resilience,
          balance, and personal growth.
        </p>
      </div>

    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutWhatWeDo;