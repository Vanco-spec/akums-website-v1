import React from "react";
import { Link } from "react-router-dom";

import "./../styles/about_navigation.css";

const AboutNavigation = () => {
  return (
    <section className="about-navigation py-5">
      <div className="container text-center">

        <h2 className="section-title mb-4">EXPLORE MORE &gt;&gt;&gt;</h2>

        <div className="row g-4 justify-content-center">

          <div className="col-6 col-md-3">
            <Link to="/constitution" className="nav-card">
              <i className="bi bi-book"></i>
              <h5>CONSTITUTION</h5>
            </Link>
          </div>

          <div className="col-6 col-md-3">
            <Link to="/leaders" className="nav-card">
              <i className="bi bi-people"></i>
              <h5>LEADERS</h5>
            </Link>
          </div>

          <div className="col-6 col-md-3">
            <Link to="/alumni" className="nav-card">
              <i className="bi bi-award"></i>
              <h5>ALUMNI</h5>
            </Link>
          </div>

          {/* Coming Soon card */}
          <div className="col-6 col-md-3">
            <div className="nav-card coming-soon">
              <i className="bi bi-globe"></i>
              <h5>SCORP, SCORE, SCOPE, SCORA</h5>
              <span className="coming-text">Coming Soon</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutNavigation;