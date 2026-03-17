import React, { useState } from "react";
import "./Header.css";

function Header() {
    const titles = ["SoftLand", "Appland", "My portfolio", "Squadfree", "Rapid", "Bocor", "NewBiz"];
    const [index, setIndex] = useState(0);

    const prev = () => {
        setIndex((index - 1 + titles.length) % titles.length);
    };

    const next = () => {
        setIndex((index + 1) % titles.length);
    };
    return (
        <>
            < header className="header">
                <div className="header-left">
                    <div className="logo1">
                        <img src="https://bootstrapmade.com/assets/img/logo.png" alt="logo" height={30} />
                    </div>

                    <div className="icon1">
                        <i className="fa-solid fa-desktop"></i>
                        <i className="fa-solid fa-tablet-screen-button"></i>
                        <i className="fa-solid fa-mobile-screen"></i>
                    </div>
                </div>

                <div className="header-center">
                    <i className="fa-solid fa-chevron-left" onClick={prev}></i>
                    <span>{titles[index]}</span>
                    <i className="fa-solid fa-chevron-right" onClick={next}></i>
                </div>

                <div className="header-right">
                    <i className="fa-solid fa-arrow-up-right-from-square"><a href="#"></a></i>
                    <button className="download-btn">
                        <i className="fa-solid fa-download"></i> DOWNLOAD
                    </button>
                </div>
            </header>
        </>
    );
}
export default Header;