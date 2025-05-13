import { useState } from "react";
import "../Components/style/Testimonials.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "John Doe",
    },
    {
      quote: "This is the best product I've ever used!",
      author: "John Smith",
    },
    {
      quote: "This is the best product I've ever used!",
      author: "Bob Johnson",
    },
  ];
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((nextIndex) => (nextIndex + 1) % testimonials.length);
  };
  return (
    <div className="testimonials">
      <div className="testimonials-qoute">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonals-author">
        {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;
