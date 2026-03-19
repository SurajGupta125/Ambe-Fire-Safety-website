import { NavLink } from "react-router-dom"
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailLock } from "react-icons/md";
export const Footer = () => {
    const CourcesArr = ["DFS", "ADIS", 'DIFSM', 'DHSE', 'NEBOSH', 'IOSH', 'B.sc Fire & Sefety']

    const ContactArr = [
        {
            icon: <IoCallOutline />,
            data: "6387235263",
        },
        {
            icon: <IoLocationOutline />,
            data: "Baikunthpur Market, Pandey Katra, Baikunthpur, Deoria (UP)"
        },
        {
            icon: <MdOutlineMailLock />,
            data: "info@ambetechnical.com"
        }
    ]
    return (
        <footer>
            <div className="footer-sec">
                <div className="footer-box1">

                    <div className="footer-top">
                        <img src="logo.png" alt="AMBE TECHNICAL" />

                        <div className="footer-text">
                            <div style={{ color: "#bababa", fontWeight: "bolder" }}>AMBE TECHNICAL</div>
                            <div style={{ color: "#b3b304", padding: "5px 0px" }}>Fire & Safety Institute</div>
                        </div>
                    </div>

                    <p className="footer-reg" >
                        Regd No UPYDM (UP) 210036916 | UP/NCVTE/N1047657 <br />
                        | Affiliated by NCVTE Authorized NCT New Delhi
                    </p>

                </div>
                <div className="footer-box2">
                    <h2>QUICK LINK</h2>
                    <div>
                        <NavLink to="home"><li>Home</li></NavLink>
                        <NavLink to="about"><li>About</li></NavLink>
                        <NavLink to="cources"><li>Cources</li></NavLink>
                        <NavLink to="gallery"><li>Gallery</li></NavLink>
                        <NavLink to="addmission"><li>Admission</li></NavLink>
                        <NavLink to="contact"><li>Contact</li></NavLink>
                    </div>
                </div>
                <div className="footer-box3">
                    <h2>COURCES</h2>
                    <ul>
                        {
                            CourcesArr.map((curElem, index) => {
                                return <li key={index}>
                                    {curElem}
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="footer-box4">
                    <h2>CONTACT</h2>
                    <ul>
                        {
                            ContactArr.map((curElem, index) => {
                                const { icon, data } = curElem
                                return <li key={index}>
                                    <span>{icon}</span> <NavLink to="addmission" style={{color:"white"}}>{data}</NavLink>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="Reserved-copy">
                <p>
                    © 2026 Ambe Technical Fire And Safety Institute. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}