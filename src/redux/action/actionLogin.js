//Dependencias
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, getDoc, setDoc } from '@firebase/firestore';
import Swal from 'sweetalert2';
//Componentes y funciones
import { typesLogin } from "../types/types";
import { db, facebook, google } from '../../firebase/firebase';


//Registro con email y contraseña
export const registerEmailAndPass = (data)=> {
    return async(dispatch)=> {
        const auth = getAuth()
        const newUsr = await createUserWithEmailAndPassword(auth, data.email, data.clave)
        await setDoc(doc(collection(db, 'usuarios'), newUsr.user.uid),{
            nombre: data.nombre,
            email: data.email,
            telefono: data.telefono,
            imagen: 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png?x=480&quality=20'
        })
        .then(()=> {
            Swal.fire({
                icon: 'success',
                title: 'Registro Exitoso',
                showConfirmButton: false,
                timer: 2000
            })
            dispatch(actionRegister(data, newUsr.user.uid))
        })
    }
}

const actionRegister = (data, id)=> {
    localStorage.setItem('Logueado', JSON.stringify({
        id: id,
        nombre: data.nombre,
        email: data.email,
        telefono: data.telefono,
        imagen: data.imagen
    }))
    return {
        type: typesLogin.registro,
        payload: {
            id: id,
            nombre: data.nombre,
            email: data.email,
            telefono: data.telefono,
            imagen: 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png?x=480&quality=20'
        }
    }
}

//Iniciar sesion con email y contraseña
export const loginWithEmailAndPass = (data)=> {
    return async(dispatch)=> {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, data.email, data.clave)
            .then((usr)=> {
                getDoc(doc(db, 'usuarios', usr.user.uid))
                    .then((datos)=> {
                        console.log(datos.data());
                        dispatch(actionLogin(datos.data(), usr.user.uid))
                    }).catch(e=> console.log(e))
            }).catch(()=> {
                Swal.fire({
                    icon: 'error',
                    title: 'Email o clave invalida',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
}

//Iniciar sesion o registrarse con google
export const loginWithGoogle = ()=> {
    return async(dispatch)=> {
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then(({ user })=> {
                getDoc(doc(db, 'usuarios', user.uid))
                    .then(async(resp)=> {
                        if (resp.data() === undefined) {
                            await setDoc(doc(collection(db, 'usuarios'), user.uid), {
                                nombre: user.displayName,
                                email: user.email,
                                telefono: user.phoneNumber,
                                imagen: user.photoURL
                            })
                            .then(()=> {
                                dispatch(actionLogin(user, user.uid))
                            })
                        }else {
                            dispatch(actionLogin(resp.data(), user.uid))
                        }
                    })
            })
            .catch(()=> {
                Swal.fire({
                    icon: 'warning',
                    title: 'Ventana emergente cerrada',
                    showConfirmButton: false,
                    timer: 3000
                })
            })
    }
}

//Incio o registro con Facebook
export const loginWithFacebook = ()=> {
    return async(dispatch)=> {
        const auth = getAuth();
        signInWithPopup(auth, facebook)
            .then(({ user })=> {
                getDoc(doc(db, 'usuarios', user.uid))
                    .then(async(resp)=> {
                        if (resp.data() === undefined) {
                            await setDoc(doc(collection(db, 'usuarios'), user.uid), {
                                nombre: user.displayName,
                                email: user.email,
                                telefono: user.phoneNumber,
                                imagen: user.photoURL
                            })
                            .then(()=> {
                                dispatch(actionLogin(user, user.uid))
                            })
                        }else {
                            dispatch(actionLogin(resp.data(), user.uid))
                        }
                    })
            })
            .catch(()=> {
                Swal.fire({
                    icon: 'warning',
                    title: 'Ventana emergente cerrada',
                    showConfirmButton: false,
                    timer: 3000
                })
            })
    }
}

export const actionLogin = (user, id)=> {
    localStorage.setItem('Logueado', JSON.stringify({
        id: id,
        nombre: (user?.displayName)?(user?.displayName):(user?.nombre),
        email: (user?.email)?(user?.email):(user?.email),
        telefono: (user?.phoneNumber)?(user?.phoneNumber):(user?.telefono),
        imagen: (user?.photoURL)?(user?.photoURL):(user?.imagen)
    }))
    return {
        type: typesLogin.login,
        payload: {
            id: id,
            nombre: (user?.displayName)?(user?.displayName):(user?.nombre),
            email: (user?.email)?(user?.email):(user?.email),
            telefono: (user?.phoneNumber)?(user?.phoneNumber):(user?.telefono),
            imagen: (user?.photoURL)?(user?.photoURL):(user?.imagen)
        }
    }
}

//Cierre de sesión
export const CerrarSesion = ()=> {
    return async(dispath)=> {
        const auth = getAuth()
        await signOut(auth)
            .then(()=> {
                localStorage.setItem('Logueado', JSON.stringify([]))
                dispath(actionCerrarSesion())
            })
    }
}

const actionCerrarSesion = ()=> {
    Swal.fire({
        icon: 'success',
        title: 'Te esperamos pronto',
        showConfirmButton: false,
        timer: 1500
    })
    return {
        type: typesLogin.cerrar
    }
}