import { BuildingSafety } from "../compoents/buildingSafety";
import { CTA } from "../compoents/CTA";
import { Eligibility } from "../compoents/Eligibility";
import { JobSection } from "../compoents/Job";
import { Review } from "../compoents/review";
import { Courses } from "./Courses";
import { Gallery } from "./gallery";
import { NavLink } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="hero-container">

                    <div className="hero-left">

                        <span className="admission">ADMISSIONS OPEN 2024-25</span>

                        <h1>
                            JOIN NOW <br />
                            <span className="yellow">FIRE AND</span> <br />
                            <span className="yellow">SAFETY</span> <br />
                            <span className="yellow">COURSES</span>
                        </h1>

                        <p>
                            Professional Fire and Industrial Safety Training Institute.
                            Get certified. Get placed within 45 days.
                        </p>
                        <div className="hero-buttons">
                            <NavLink to="/addmission" className="btn-enroll">
                                <i className="fa-solid fa-user-plus"></i> Enroll Now
                            </NavLink>

                            <a href="tel:6387235263" className="btn-call">
                                <i className="fa-solid fa-phone"></i> Call Now
                            </a>

                            <a href="/brochure.pdf" download className="btn-brochure">
                                <i className="fa-solid fa-file"></i> Brochure
                            </a>
                        </div>

                    </div>

                </div>
            </section>
            <BuildingSafety />
            <Courses />
            <Eligibility />
            <JobSection />
            <Gallery />
            <Review />
            <CTA />
        </>
    );
};