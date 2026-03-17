import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="content">
        <h1>Promote Your App with SoftLand</h1>
        <p>
          We are team of talented designers making websites with Bootstrap
        </p>

        <div className="buttons">
          <button className="btn">
            <i className="fa-brands fa-google-play"></i> Google Play
          </button>
          <button className="btn">
            <i className="fa-brands fa-apple"></i> App Store
          </button>
        </div>
      </div>

      <div className="banner-image">
        <img src="../phone.png" alt="app" />
      </div>
    </section>
  );
}

export default Banner;