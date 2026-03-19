import { useEffect, useRef } from "react";
import "./Eligibility.css";

const data = [
  "10th Pass",
  "12th Pass",
  "Graduate",
  "B.Sc",
  "B.Com",
  "BBA",
];

export const Eligibility = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".elig-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("show");
              }, index * 150); // ek-ek karke delay
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
    <section className="eligibility" ref={sectionRef}>
      <div className="eligibility-container">

        <p className="sub-title">WHO CAN APPLY</p>

        <h2>
          ELIGIBILITY <span>CRITERIA</span>
        </h2>

        <div className="eligibility-box">
          {data.map((item, index) => (
            <div className="elig-card" key={index}>
              <i className="fa-solid fa-award"></i>
              <p>{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};