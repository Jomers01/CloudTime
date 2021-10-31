//Dependencias
import React from 'react';
import { PersonPin, Search } from '@mui/icons-material';
//Componentes y funciones

//Estilos
import './styleNavbarCity.css'

const NavbarCity = () => {
    return (
        <div className="cont-navbarCity">
            <div></div>
            <div></div>
            <div className="cont-navbarCity-ubication">
                <button className="btn-navbarCity pin">
                    <PersonPin />
                </button>
                <input
                type="text"
                className="input-navbarCity-city"
                />
                <button className="btn-navbarCity search">
                    <Search />
                </button>
            </div>
            <div className="cont-navbarCity-options">
                <select className="select-navbarCity viento" name="viento">
                    <option value="default">°F, mph</option>
                </select>
                <select className="select-navbarCity idioma" name="idioma">
                    <option value="español">Español</option>
                </select>
            </div>
        </div>
    )
}

export default NavbarCity
