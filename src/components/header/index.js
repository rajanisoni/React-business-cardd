import React from "react"



export default function Header() {
    return (
        <div>
            <div className="about-section">
                <img className="logo-img" src="/woman.png" />
                <h2>Rajani Soni</h2>
                <h4>Frontend Developer</h4>
                <a>Rajani.website</a>
                <div className="about-buttons">
                    <button className="email-btn"> <i className="fa-solid fa-envelope icons"></i> Email</button>
                    <button className="linkidin-btn"><i className="fa-brands icons fa-linkedin"></i>Linkedin</button>
                </div>
            </div>
        </div>
    )
}
