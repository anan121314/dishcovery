import React, { useRef } from 'react';
import './HorizontalCardSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const HorizontalCardSlider = ({ items }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      top: 0,
      left: -600,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      top: 0,
      left: 600,
      behavior: 'smooth',
    });
  };

  return (
    <div className="slider-wrapper">
      <button className="arrow left" onClick={scrollLeft}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="card-container" ref={scrollRef}>
        {items.map((item, index) => (
          <div className="card horizontal-card" key={index}>
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-content">
              <h4 className="card-title">{item.title}</h4>
              <p className="card-description">
                A brief description of the dish goes here. Tell something about the dish . Its origin , texture etc.
              </p>
              <div className="star-rating">
                {'★'.repeat(4)}{'☆'}
              </div>

            </div>
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={scrollRight}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default HorizontalCardSlider;
