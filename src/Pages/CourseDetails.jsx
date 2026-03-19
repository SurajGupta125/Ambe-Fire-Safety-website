import { courses } from "../data/CourseData";
import { useParams } from "react-router-dom";
import { FiAward } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../Pages/CourseDetails.css";

export const CourseDetails = () => {
    const { id } = useParams();

    const course = courses.find((item) => item.id === id);

    if (!course) {
        return <h1 style={{ color: "white", textAlign: "center" }}>Course Not Found</h1>;
    }

    return (
        <section className="course-page">

            {/* TOP HEADER */}
            <div className="course-Name">
                <p className="course-detail">COURSE DETAILS</p>
                <h1 className="course-title">{course.title}</h1>
            </div>

            {/* MAIN CONTENT */}
            <div className="course-container">
                <div className="course-content">

                    {/* LEFT SIDE */}
                    <div className="left">
                        <h2>COURSE OVERVIEW</h2>
                        <p>{course.desc}</p>

                        <h3>SYLLABUS</h3>
                        <ul>
                            {course.SYLLABUS.map((item, index) => (
                                <li key={index}> <FiBookOpen /> {item}</li>
                            ))}
                        </ul>

                        <h3>CAREER OPPORTUNITIES</h3>
                        <ul>
                            {course.CAREEROPPORTUNITIES.map((item, index) => (
                                <li key={index}><IoBagHandleSharp /> {item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT SIDE CARD */}
                    <div className="right">
                        <h3>QUICK INFO</h3>

                        <p><MdOutlineWatchLater /> Duration: {course.duration}</p>
                        <p><FiAward /> Eligibility: {course.eligibility}</p>

                        {/* <button className="enroll">ENROLL NOW</button> */}
                        <Link to="/addmission">
                            <button className="enroll">ENROLL NOW</button>
                        </Link>
                        <a href="tel:6387235263">
                            <button className="download">CALL FOR INFO</button>
                        </a>
                    </div>

                </div>
            </div>

        </section >
    );
};