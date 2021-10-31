//Componentes
import { typesLogin } from "../types/types";

const loginReducer = (state = {}, action)=> {
    switch (action.type) {
        //Registro de nuevo usuario
        case typesLogin.registro:
            return action.payload
        //Inicio de sesion
        case typesLogin.login:
            return action.payload
        //Cierre de sesión
        case typesLogin.cerrar:
            return {}
        default:
            return state;
    }
}

export default loginReducer;