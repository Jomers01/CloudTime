//Dependencias
import React from 'react';
import { Link } from 'react-router-dom';
//Componentes y funciones
//Estilos
import './styleNavbar.css'

const NavBar = () => {
    //Estados y Hooks

    //Funciones

    return (
        <div className="cont-home-navbar">
            <nav className="nav-navbar-navTop">
                <Link to="/">
                    <img className="img-navbar-logo" src="https://darksky.net/images/darkskylogo.png" alt="logo" />
                    <span className="span-home-titleLogo">CloudTime</span>
                </Link>
                <Link to="/">
                    <span className="span-home-titleLogo">App</span>
                </Link>
                <Link to="/">
                    <span className="span-home-titleLogo">Maps</span>
                </Link>
                <Link to="/iniciar_sesion">
                    <span className="span-home-titleLogo">Dark Sky API</span>
                </Link>
                <Link to="/">
                    <span className="span-home-titleLogo">Help</span>
                </Link>
            </nav>
        </div>
    )
}

export default NavBar
