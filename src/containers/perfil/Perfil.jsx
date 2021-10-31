//Dependencias
import { Api, ContentCopy, Logout, Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import ClipboardJS from 'clipboard';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Componentes y funciones
import NavBar from '../../components/navbar/NavBar';
import { CerrarSesion } from '../../redux/action/actionLogin';
//Estilos
import './stylePerfil.css'

const Perfil = () => {
    //Estados y Hooks
    const Logueado = useSelector(state => state.Logueado)
    const { imagen, nombre } = Logueado
    const [view, setview] = useState(false)
    const dispatch = useDispatch()
    //Funciones
    useEffect(() => {
        new ClipboardJS('#api')
    }, [])

    const handleCerrarSesion = ()=> {
        dispatch(CerrarSesion())
    }

    return (
        <>
            <NavBar />
            <div className="cont-perfil">
                <div className="cont-perfil-perfil">
                    <div className="cont-perfil-imagen">
                        <img className="img-perfil-usuario" src={imagen} alt="..." />
                        <h3 className="title-perfil-nombre">{nombre}</h3>
                        <button className="btn-perfil-actualizar">Actualizar perfil</button>
                    </div>
                    <div className="cont-perfil-seccion">
                        <Api />
                        <h3 className="title-perfil-api">API Dark Sky</h3>
                    </div>
                    <Button
                    startIcon={<Logout />}
                    variant="contained"
                    className="btn-perfil-logout"
                    onClick={handleCerrarSesion}
                    >
                        Cerrar Sesión
                    </Button>
                </div>

                <div className="cont-perfil-detalle">
                    <label className="label-perfil-apiDetalle">ApiKey:</label>
                    <input
                    className="input-perfil-api"
                    type={view ? 'text': 'password'}
                    value="https://api.darksky.net/forecast/88030114c5e47763a011a75e7a10c633/LAT,LONG"
                    readOnly
                    />
                    <IconButton
                    id="api"
                    data-clipboard-text="https://api.darksky.net/forecast/88030114c5e47763a011a75e7a10c633/LAT,LONG"
                    >
                        <ContentCopy />
                    </IconButton>
                    <IconButton onClick={()=> setview(!view)}>{view ?<VisibilityOff /> :<Visibility />}</IconButton>
                </div>
            </div>
        </>
    )
}

export default Perfil
