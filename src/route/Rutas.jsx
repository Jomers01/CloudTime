//Dependencias
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
//Componentes y funciones
import Login from '../containers/inicioSesion/Login'
import Registro from '../containers/registro/Registro'
import Home from '../containers/inicio/Home'
import RutaPublica from './RutaPublica'
import { useDispatch } from 'react-redux';
import { actionLogin } from '../redux/action/actionLogin';
import RutaPrivada from './RutaPrivada'
import Perfil from '../containers/perfil/Perfil';
//Estilos


const Rutas = () => {
    //Estados y Hooks
    const [isAuth, setIsAuth] = useState(false)
    const auth = getAuth()
    const dispatch = useDispatch()
    //Funciones
    useEffect(() => {
        onAuthStateChanged(auth, async(usr)=> {
            if (usr?.uid) {
                const user = JSON.parse(localStorage.getItem('Logueado'))
                setIsAuth(true)
                dispatch(actionLogin(user, user?.id))
            }else{
                setIsAuth(false)
            }
        })
    }, [auth, dispatch])

    return (
        <Router>
            <Switch>
                <Route
                exact
                path="/"
                component={Home}
                />

                <RutaPublica
                exact
                path="/iniciar_sesion"
                isAuthh={isAuth}
                component={Login}
                />

                <RutaPublica
                exact
                path="/registro"
                isAuthh={isAuth}
                component={Registro}
                />

                <RutaPrivada
                exact
                path="/perfil"
                isAuthh={isAuth}
                component={Perfil}
                />

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default Rutas