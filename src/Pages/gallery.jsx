import { useEffect, useRef } from "react";

export const Gallery = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".gallery-card");

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
    <section className="gallery-section" ref={sectionRef}>

      <div className="About">
        <div className="about-container1">
          <div className="about-us">
            <p>PHOTO GALLERY</p>
          </div>
          <div className="about-title">
            <p> OUR <span> GALLERY</span></p>
          </div>
        </div>
      </div>

      <div className="gallery-container">

        <div className="gallery-card">
          <img src="sroom.jpg" alt="sroom" />
        </div>

        <div className="gallery-card">
          <img src="fire.jpg" alt="fire" />
        </div>

        <div className="gallery-card">
          <img src="sefety.jpg" alt="safety" />
        </div>

        <div className="gallery-card">
          <img src="hero-firefighter-bg.jpg" alt="firefighter" />
        </div>

      </div>

    </section>
  );
};