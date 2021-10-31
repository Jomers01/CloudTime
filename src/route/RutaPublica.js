//Dependencias
import React from 'react'
import { Route, Redirect } from 'react-router'

function RutaPublica({isAuthh, component: Component, ...rest}){
    return (
        <Route {...rest}
            component={(props)=> (
                (isAuthh)
                ? (<Redirect to="/perfil" />)
                : (<Component {...props} />)
            )}
        />
    )
}

export default RutaPublica