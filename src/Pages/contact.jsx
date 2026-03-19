import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_yeyiri8",   
                "template_v7j212c",  
                form.current,
                "F7BtSSvEnBcllsz06"  
            )
            .then(() => {
                alert("Enquiry Sent Successfully!");
                form.current.reset();
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                alert("Failed to send.");
                setLoading(false);
            });
    };

    return (
        <div className="contact-page">

        
            <div className="About">
                <div className="about-container1">
                    <div className="about-us">
                        <p>GET IN TOUCH</p>
                    </div>
                    <div className="about-title">
                        <p>
                            CONTACT <span>US</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="contact-container">

            
                <div className="contact-left">
                    <div className="contact-box">
                        <h4>PHONE</h4>
                        <p>6387235263</p>
                    </div>

                    <div className="contact-box">
                        <h4>ADDRESS</h4>
                        <p>
                            Baikunthpur Market, Pandey Katra,
                            <br />
                            Baikunthpur, Deoria (UP)
                        </p>
                    </div>

                    <div className="contact-box">
                        <h4>EMAIL</h4>
                        <p>info@ambetechnical.com</p>
                    </div>

                    <div className="map-box">
                        <iframe
                            title="map"
                            src="https://maps.google.com/maps?q=deoria&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

            
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <h2>
                        SEND <span>ENQUIRY</span>
                    </h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Name *"
                        required
                    />

                    <input
                        type="tel"
                        name="mobile"   
                        placeholder="Phone *"
                        required
                    />

                    <select name="course" required>
                        <option value="">Select Course</option>
                        <option value="DFS">DFS</option>
                        <option value="ADIS">ADIS</option>
                        <option value="DIFSM">DIFSM</option>
                        <option value="DHSE">DHSE</option>
                        <option value="NEBOSH">NEBOSH</option>
                        <option value="IOSH">IOSH</option>
                        <option value="B.Sc Fire & Safety">B.Sc Fire & Safety</option>
                    </select>

                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required
                    ></textarea>

                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "SUBMIT ENQUIRY"}
                    </button>
                </form>
            </div>
        </div>
    );
};
