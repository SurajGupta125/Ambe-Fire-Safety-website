import { FaFire, FaClock, FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import { courses } from "../data/CourseData";

export const Courses = () => {
   
    return (
        <section className="courses">
            <div className="About">
                <div className="about-container1">
                    <div className="about-us">
                        <p>Our Programs</p>
                    </div>
                    <div className="about-title">
                        <p>
                            ALL COURSES <span>FIRE & SAFETY</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="courses-container">
                {courses.map((course, index) => (
                    <div
                        className="course-card"
                        key={course.id}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <div className="course-title">
                            <FaFire className="fire-icon" />
                            <h3>{course.title}</h3>
                        </div>

                        <p className="course-desc">{course.desc}</p>

                        <div className="course-info">
                            <span>
                                <FaClock /> {course.duration}
                            </span>
                            <span>
                                <FaUserGraduate /> {course.eligibility}
                            </span>
                        </div>

                        <Link
                            to={`/courses/${course.id}`}
                            className="details-btn"
                        >
                            VIEW DETAILS →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};
