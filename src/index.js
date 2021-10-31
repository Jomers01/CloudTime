//Dependencias
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//Componentes y funciones
import Rutas from './route/Rutas';
import { store } from './redux/storage/store';
//Estilos

ReactDOM.render(
  <Provider store={store}>
    <Rutas />
  </Provider>,
  document.getElementById('root')
);