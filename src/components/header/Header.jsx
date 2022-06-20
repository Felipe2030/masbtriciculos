import React from "react";
import "./header.style.css";
import logo from './../../assets/img/logo_size-removebg-preview.png';
import photoUserDefault from './../../assets/img/default-user.jpeg';

function Header() {
    return <div className="header">
        <div className="header-container">
            <div className="header-logo">
                <a href="/">
                   <img src={logo} alt="logo" />
                </a>
            </div>
            <div className="header-search">
                <input type="text" name="search" id="search" placeholder="O que você procura ?" />
                <button type="button">
                    <i class="tiny material-icons">search</i>
                </button>
            </div>
            <div className="header-login">
                <div className="header-login-user">
                    <img src={photoUserDefault} />
                </div>
                <div className="header-login-link">
                    <a href="#">Entrar</a>
                    <a href="#">Criar conta</a>
                </div>
            </div>
        </div>
    </div>
}

export default Header;