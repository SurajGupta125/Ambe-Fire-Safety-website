import { useEffect, useRef } from "react";
import "./Job.css";

export const JobSection = () => {
  const sectionRef = useRef(null);

  const jobs = [
    { title: "Safety Officer", icon: "fa-shield-halved" },
    { title: "Industrial Safety Officer", icon: "fa-industry" },
    { title: "Fire Safety Engineer", icon: "fa-fire-extinguisher" },
    { title: "Construction Safety Officer", icon: "fa-helmet-safety" },
    { title: "Oil & Gas Safety Supervisor", icon: "fa-oil-can" },
  ];

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".job-card");

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
    <section className="job" ref={sectionRef}>
      <div className="job-container">

        <div className="badge">100% PLACEMENT GUARANTEE</div>

        <h2>
          JOB WITHIN <span>45 DAYS</span>
        </h2>

        <p className="job-desc">
          Career opportunities across industries after course completion
        </p>

        <div className="job-cards">
          {jobs.map((item, index) => (
            <div className="job-card" key={index}>
              <i className={`fa-solid ${item.icon}`}></i>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};