import React from 'react'
import '../css/footer.css'

export default function footer() {
    const myStyle1 = {
        textDecoration: "none",
        color: "black"
    }

    const myStyle2 = {
        display: "flex",
        marginTop: "10px"
    }

    const myStyle3 = {
        marginRight: "20px"
    }

    return (
    
        <div className="footer">
            <div className="quick_links">
                <h4 className="quick_link_head"> Quick Links </h4>
                <h6 style={myStyle3}> <a href="/" style={myStyle1}> Home </a> </h6>
                <h6 style={myStyle3}> <a href="/" style={myStyle1}> About Us </a> </h6>
                <h6 style={myStyle3}> <a href="/" style={myStyle1}> Services </a> </h6>
            </div>

            <div className="contact_us">
                <h4 className="contact_us_head"> Contact Us </h4>
                <div className="mail_img" style={myStyle2}>
                    <div style={myStyle3}> <i className="fa-solid fa-envelope"></i> </div>
                    <div className="mail_id">abc@gmail.com</div>
                </div>

                <div className="phone_img" style={myStyle2}>
                    <div style={myStyle3}> <i className="fa-solid fa-phone"></i> </div>
                    <div className="phone_no">+91 1234567890</div>
                </div>

                <div className="mail_img" style={myStyle2}> 
                    <div style={myStyle3}> <i className="fa-brands fa-twitter"></i> </div>
                    <div style={myStyle3}> <i className="fa-brands fa-github"></i> </div>
                    <div style={myStyle3}> <i className="fa-brands fa-instagram" /> </div>
                    <div style={myStyle3}> <i className="fa-brands fa-linkedin"></i> </div>
                    <div style={myStyle3}> <i className="fa-brands fa-discord"></i> </div>
                </div>
            </div>

            <div className="subscribe">
                <h4>Subscribe to our NewsLetter</h4>
                <form action="#">
                    <div className="footer_news">
                        <input type="email" placeholder="Enter Your Email: " />
                    </div>

                    <div className="submit">
                        <button className="btn-outline-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
