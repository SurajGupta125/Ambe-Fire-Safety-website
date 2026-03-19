import { useEffect, useRef } from "react";
import "./review.css";

export const Review = () => {
  const sectionRef = useRef(null);

  const reviews = [
    {
      text: "Got placed within 30 days of completing my course. The practical training was excellent!",
      name: "Ravi Kumar",
      course: "CFO",
    },
    {
      text: "Best fire safety institute in Deoria. The trainers are industry experts.",
      name: "Priya Singh",
      course: "ADIS",
    },
    {
      text: "The practical certification helped me get a job in the Gulf region. Highly recommended!",
      name: "Amit Pandey",
      course: "NEBOSH",
    },
  ];

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".review-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("show");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="review" ref={sectionRef}>
      <div className="review-container">

        <h2>
          STUDENT <span>REVIEWS</span>
        </h2>

        <div className="review-cards">
          {reviews.map((item, index) => (
            <div className="review-card" key={index}>

              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              <p className="review-text">{item.text}</p>

              <h4>{item.name}</h4>
              <span>{item.course}</span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};