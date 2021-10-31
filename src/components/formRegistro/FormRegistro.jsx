//Dependencias
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
//Componentes y funciones
import { registerEmailAndPass } from '../../redux/action/actionLogin';
//Estilos
import './styleFormRegistro.css'

const FormRegistro = () => {
    //Estados y Hooks
    const dispatch = useDispatch()
    //Funciones
    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            telefono: '',
            clave: ''
        },
        onSubmit: async(data)=> {
            dispatch(registerEmailAndPass(data))
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required(),
            email: Yup.string().email().required(),
            telefono: Yup.string().required(),
            clave: Yup.string().required()
        })
    })

    return (
        <div className="cont-formRegistro">
            <h1 className="title-formRegistro">Registro</h1>
            <form className="form-formRegistro" onSubmit={formik.handleSubmit}>
                <label htmlFor="nombre" className="label-formRegistro Lnombre">Nombre</label>
                <input onChange={formik.handleChange} name="nombre" type="text" className="input-formRegistro nombre" id="nombre" required autoComplete="off" />
                <label htmlFor="email" className="label-formRegistro Lemail">Email</label>
                <input onChange={formik.handleChange} name="email" type="email" className="input-formRegistro email" id="email" required />
                <label htmlFor="telefono" className="label-formRegistro Ltelefonoefono">Telefono</label>
                <input onChange={formik.handleChange} name="telefono" type="tel" className="input-formRegistro telefono" id="telefono" required />
                <label htmlFor="clave" className="label-formRegistro Lclave">Contraseña</label>
                <input onChange={formik.handleChange} name="clave" type="password" className="input-formRegistro clave" id="clave" minLength="7" required />
                <button type="submit" className="btn-formRegistro">Registrarme</button>
            </form>
        </div>
    )
}

export default FormRegistro
