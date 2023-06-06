import { useState } from "react";
import styles from "./TestimonialsSlider.module.css";

const TestimonialsSlider = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.testimonialContainer}>
        <p>{testimonials[activeIndex].testimonial}</p>
        <p className={styles.userInfo}>{testimonials[activeIndex].name} - <span>{`${testimonials[activeIndex].age} years old`} </span></p>
      </div>
      <div className={styles.navigation}>
        <button className={styles.button} onClick={handlePrevSlide}>&lt;</button>
        <button className={styles.button} onClick={handleNextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
