//Dependecias
import React from 'react';
import { FacebookOutlined, Google } from '@mui/icons-material';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
//Componentes y funciones
import { loginWithEmailAndPass, loginWithFacebook, loginWithGoogle } from '../../redux/action/actionLogin';
//Estilos
import './styleFormLogin.css'

const FormLogin = () => {
    //Estados y Hooks
    const dispatch = useDispatch()
    //Funciones
    //Formik para validar y capturar los datos del formulario
    const formik = useFormik({
        initialValues: {
            email: '',
            clave: ''
        },
        onSubmit: async(data)=> {
            dispatch(loginWithEmailAndPass(data))
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            clave: Yup.string().required()
        })
    })

    //Inicio de sesion con google
    const loginGoogle = ()=> {
        dispatch(loginWithGoogle())
    }

    //Inicio de sesion con facebook
    const loginFacebook = ()=> {
        dispatch(loginWithFacebook())
    }

    return (
        <div className="cont-formLogin">
            <h1 className="title-formLogin">Iniciar Sesión</h1>
            <form className="form-formLogin-login" onSubmit={formik.handleSubmit}>
                <button type="button" className="btn-formLogin google" onClick={loginGoogle}><span><Google /></span> Iniciar con Google</button>
                <button type="button" className="btn-formLogin facebook" onClick={loginFacebook}><span><FacebookOutlined /></span> Iniciar con Facebook</button>
                <label className="label-formLogin-email" htmlFor="email">Email</label>
                <input name="email" onChange={formik.handleChange} className="input-formLogin-email" type="email" id="email" placeholder="hacker@example.com" required />
                <label className="label-formLogin-pass" htmlFor="pass">Contraseña</label>
                <input name="clave" onChange={formik.handleChange} className="input-formLogin-pass" type="text" id="pass" minLength="7" autoComplete="off" required />
                <Link className="link-formLogin-forgot" to="/">¿Olvidaste la contraseña?</Link>
                <button type="submit" className="btn-formLogin-login">Iniciar Sesión</button>
                <Link className="link-formLogin-crear" to="/registro">¿Aun no tienes cuenta?</Link>
            </form>
        </div>
    )
}

export default FormLogin
