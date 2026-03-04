// src/components/Carousel.jsx
import React, { useState } from "react";
import "../styles/home_carousel.css"; // make sure your CSS is imported

const slides = [
{
  title: "White Ceremony",
  description: "A landmark event welcoming first-year medical students into the profession, symbolizing responsibility, compassion, and the beginning of their medical journey.",
  image: "/images/20250912_183459.jpg",
},
{
  title: "Blood Drive",
  description: "A life-saving initiative bringing students and partners together to donate blood and support hospitals in critical need.",
  image: "/images/IMG_1423.JPG",
},
{
  title: "AKUMS Tournament",
  description: "An engaging inter-class competition designed to promote teamwork, leadership, and unity within the medical student community.",
  image: "/images/IMG_2223.JPG",
},
{
  title: "BLOOD DRIVE",
  description: "A reflective and impactful session highlighting resilience, shared experiences, and the bonds formed throughout the medical journey.",
  image: "/images/IMG_1582.JPG",
},
{
  title: "Football Tournament",
  description: "An energetic sporting event encouraging fitness, camaraderie, and friendly competition among students.",
  image: "/images/IMG_2097.JPG",
},
{
  title: "Reward Session",
  description: "A celebratory gathering recognizing outstanding achievements, dedication, and excellence within the AKUMS community.",
  image: "/images/IMG_2038.JPG",
},
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const getSlidePosition = (index) => {
    const position = (index - currentIndex + slides.length) % slides.length;
    return position;
  };

  return (
    <section id="carousel-section">
      <ul className="slider">
        {slides.map((slide, index) => {
          const position = getSlidePosition(index);
          return (
            <li
              className={`item item-pos-${position}`}
              key={index}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="content">
                <h2 className="title">{slide.title}</h2>
                <p className="description">{slide.description}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <nav className="nav">
        <span className="btn prev" onClick={handlePrev}>&lt;</span>
        <span className="btn next" onClick={handleNext}>&gt;</span>
      </nav>
    </section>
  );
}

export default Carousel;
