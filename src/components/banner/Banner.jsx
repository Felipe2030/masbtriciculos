import React from "react";
import "./banner.style.css";
import bannerWhatsapp from "./../../assets/img/banner-whatsApp.jpeg";

function Banner() {
    return <div className="banner">
        <a href="https://api.whatsapp.com/send?phone=5544991761212">
            <img src={bannerWhatsapp} />
        </a>
    </div>
}

export default Banner;