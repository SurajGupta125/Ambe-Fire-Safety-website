import { NavLink } from "react-router-dom"
import { useState } from "react"

export const Headers = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            <div className="nav-bar">

                <div className="nav-left">
                    <div className="nav-logo">
                        <img src="logo.png" alt="logo" />
                        <div>
                            <div className="nav-logo-text" id="name">
                                <NavLink to="/home">AMBE TECHNICAL</NavLink>
                            </div>

                            <div className="nav-logo-text" id="sub-name">
                                <NavLink to="/home">Fire & Safety Institute</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-toggle" onClick={() => setMenuOpen(true)}>
                    ☰
                </div>
                <div className={`nav-right ${menuOpen ? "active" : ""}`}>
                    <div className="close-btn" onClick={() => setMenuOpen(false)}>
                        ✖
                    </div>

                    <div className="nav-right-menu">
                        <NavLink to="/" onClick={() => setMenuOpen(false)}><li>HOME</li></NavLink>
                        <NavLink to="about" onClick={() => setMenuOpen(false)}><li>ABOUT</li></NavLink>
                        <NavLink to="cources" onClick={() => setMenuOpen(false)}><li>COURSES</li></NavLink>
                        <NavLink to="gallery" onClick={() => setMenuOpen(false)}><li>GALLERY</li></NavLink>
                        <NavLink to="addmission" onClick={() => setMenuOpen(false)}><li>ADMISSION</li></NavLink>
                        <NavLink to="contact" onClick={() => setMenuOpen(false)}><li>CONTACT</li></NavLink>
                    </div>
                </div>
                <div className="nav-call-now">
                    <a href="tel:6387235263"><li>CALL NOW</li></a>
                </div>

            </div>
            {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
        </nav>
    )
}