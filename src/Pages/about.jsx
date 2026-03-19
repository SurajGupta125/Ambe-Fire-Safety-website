export const About = () => {
    const AboutInfo = [
        {
            num: "500+",
            dept: "Trained",
        },
        {
            num: "7+",
            dept: "Courses",
        }, {
            num: "95%",
            dept: "Placement",
        }
    ]
    return (
        <section>
            <div className="About">
                <div className="about-container1">
                    <div className="about-us">
                        <p>ABOUT US</p>
                    </div>
                    <div className="about-title">
                        <p><span>AMBE TECHNICAL  </span>FIRE & SAFETY</p>
                    </div>
                </div>
            </div>
            <div className="about-container2">
                <div className="about-sub-cant">
                    <div className="about-left-box">

                        <div className="cont-2-txt">
                            <p>
                                Ambe Technical Fire And Safety Institute is a premier training institute
                                affiliated by NCVTE, authorized by NCT New Delhi. We provide professional
                                fire and industrial safety training with 100% placement guarantee.
                            </p>
                        </div>

                        <div className="about-stats">
                            {AboutInfo.map((curElem, index) => {
                                const { num, dept } = curElem;
                                return (
                                    <div key={index} className="resource">
                                        <h2>{num}</h2>
                                        <p>{dept}</p>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                    <div className="about-right-box">

                        <div className="top-images">
                            <img src="sroom.jpg" alt="sroom" />
                            <img src="fire.jpg" alt="fire" style={{ position: "relative", bottom: "25px" }} />
                        </div>

                        <div className="bottom-image">
                            <img src="sefety.jpg" alt="safety" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-container3">
                <div className="about-cont3">
                    <div className="about-cont3-left">
                        <div style={{color:"#dea430", fontSize:"2rem"}}><i class="fas fa-bullseye"></i></div>
                        <div className="left-text-cont3"><h2>OUR MISSION</h2></div>
                        <div><p>To provide world-class fire and safety training that empowers students with practical skills and industry-recognized certifications for successful careers in safety management.</p>
                        </div>
                    </div>
                    <div className="about-cont3-left">
                        <div style={{color:"#dea430", fontSize:"1.9rem"}}><i class="fas fa-eye"></i></div>
                        <div className="left-text-cont3"><h2>OUR VISION</h2></div>
                        <div>
                            <p>
                                To be the leading fire and safety training institute in India, producing highly skilled safety professionals who make workplaces safer across all industries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section class="why-choose">
                <h2>WHY <span>CHOOSE US</span></h2>

                <div class="choose-container">

                    <div class="choose-card">
                        <i class="fa-solid fa-shield-halved"></i>
                        <h3>NCVTE Affiliated</h3>
                        <p>Recognized by NCVTE, authorized by NCT New Delhi with government registration.</p>
                    </div>

                    <div class="choose-card">
                        <i class="fa-solid fa-user-group"></i>
                        <h3>Expert Faculty</h3>
                        <p>Industry-experienced trainers with decades of practical safety experience.</p>
                    </div>

                    <div class="choose-card">
                        <i class="fa-solid fa-award"></i>
                        <h3>100% Placement</h3>
                        <p>Guaranteed job placement within 45 days of course completion.</p>
                    </div>

                    <div class="choose-card">
                        <i class="fa-solid fa-book-open"></i>
                        <h3>Practical Training</h3>
                        <p>Hands-on fire drills, safety equipment operation, and real-world scenarios.</p>
                    </div>

                    <div class="choose-card">
                        <i class="fa-solid fa-circle-dot"></i>
                        <h3>Modern Infrastructure</h3>
                        <p>State-of-the-art training facility with latest safety equipment.</p>
                    </div>

                    <div class="choose-card">
                        <i class="fa-solid fa-eye"></i>
                        <h3>International Certs</h3>
                        <p>NEBOSH and IOSH internationally recognized certifications available.</p>
                    </div>

                </div>
            </section>
        </section>
    )
}