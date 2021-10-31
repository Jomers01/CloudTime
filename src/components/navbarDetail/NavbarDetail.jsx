//Depenencias
import React from 'react';
//Componentes y funciones

//Estilos
import './styleNavbarDetail.css'


const NavbarDetail = () => {
    return (
        <div className="cont-navbarDetail">
            <div className="cont-navbarDetail-detail">
                <span className="span-navbarDetail-details "><strong>Eólico:</strong> 7 mph</span>
                <span className="span-navbarDetail-details "><strong>Humedad:</strong> 100%</span>
                <span className="span-navbarDetail-details "><strong>Punto de rocío:</strong> 69°</span>
                <span className="span-navbarDetail-details "><strong>Índice UV:</strong> 0</span>
                <span className="span-navbarDetail-details "><strong>Visibilidad:</strong> 10mi</span>
                <span className="span-navbarDetail-details "><strong>Presión:</strong> 1014 mb</span>
            </div>
        </div>
    )
}

export default NavbarDetail
