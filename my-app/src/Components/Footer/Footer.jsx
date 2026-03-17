import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <h1 className="logo">SoftLand</h1>
            <p className="title">Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.
            </p>
            <div className="icon">
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-facebook" style={{ color: "white" }}></i>
                <i className="fa-brands fa-instagram" style={{ color: "white" }}></i>
                <i className="fa-brands fa-linkedin-in" style={{ color: "white" }}></i>
                <i className="fa-brands fa-skype" style={{ color: "white" }}></i>
            </div>

            <hr />
            <p>Copyright SoftLand All Rights Reserved</p>
            <p>Design by Nguyen Thuy</p>
        </footer>
    );
}

export default Footer;