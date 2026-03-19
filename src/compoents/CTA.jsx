import { NavLink } from "react-router-dom";
import "./CTA.css";

export const CTA = () => {
  return (
    <>
      <section className="cta">
        <div className="cta-content">

          <h2>
            READY TO START YOUR <span>CAREER?</span>
          </h2>

          <p>
            Enroll now and get certified in Fire & Industrial Safety. 100%
            placement guarantee.
          </p>

          <div className="cta-buttons">
            <NavLink to="addmission" className="apply-btn">APPLY NOW</NavLink>
            <a href="tel:6387235263" className="call-btn">CALL: 6387235263</a>
          </div>

        </div>
      </section>
    </>
  );
};
