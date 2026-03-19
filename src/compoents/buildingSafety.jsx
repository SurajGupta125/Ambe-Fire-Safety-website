import {NavLink} from "react-router-dom"
import "./buildingSafety.css";

export const BuildingSafety = () => {
  return (
    <section className="building-safety">
      <div className="bs-container">

        <div className="bs-left">
          <p className="bs-subtitle">ABOUT THE INSTITUTE</p>

          <h1>
            BUILDING <span>SAFETY</span> <br /> LEADERS
          </h1>

          <p className="bs-desc">
            Ambe Technical Fire And Safety Institute is a premier training
            institute affiliated by NCVTE. We provide professional fire and
            industrial safety training with 100% placement guarantee.
          </p>


          <div className="bs-cards">
            <div className="bs-card">
              <i className="fa-solid fa-shield-halved"></i>
              <p>PRACTICAL TRAINING</p>
            </div>

            <div className="bs-card">
              <i className="fa-solid fa-users"></i>
              <p>EXPERT TRAINERS</p>
            </div>

            <div className="bs-card">
              <i className="fa-solid fa-award"></i>
              <p>JOB ORIENTED</p>
            </div>
          </div>

          <NavLink to="addmission" className="bs-btn">LEARN MORE →</NavLink>
        </div>

        <div className="bs-right">
          <img src="sroom.jpg" alt="" />
          <img className="img2" src="hero-firefighter-bg.jpg " alt="" />
          <img src=" sefety.jpg" alt="" className="big-img" />
        </div>
      </div>
    </section>
  );
};
