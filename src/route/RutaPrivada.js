//Dependencias
import React from 'react'
import { Route, Redirect } from 'react-router'

function RutaPrivada({isAuthh, component: Component, ...rest}){
    return (
        <Route {...rest}
            component={(props)=> (
                (isAuthh)
                ? (<Component {...props} />)
                : (<Redirect to="/iniciar_sesion" />)
            )}
        />
    )
}

export default RutaPrivada

