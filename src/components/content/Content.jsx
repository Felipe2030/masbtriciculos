import React from "react";
import Banner from "../banner/Banner";
import Header from "./../header/Header";
import Footer from "./../footer/Footer";

function Content(props) {
    return <div className="content">
        <Header />
        <Banner />
        {props.children}
        <Footer />
    </div>
}

export default Content;