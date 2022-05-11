import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "slides inactive"}
        >
          <div className="slide-wrapper">

            <div className="img-wrapper">
              <img className="slide-image" src={slide.urls} alt="" />
            </div>
            <div className="info-wrapper">
              <h2 className="slide-title">{slide.title}</h2>
              <h3 className="slide-text">{slide.description}</h3>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
