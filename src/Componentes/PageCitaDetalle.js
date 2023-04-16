import React, { Component } from 'react';
import CompCabecera from './CompCabecera';
import CompListaRoles from './CompListaRoles';
import CompCitaDetalle from './CompCitaDetalle';
import CompPiePagina from './CompPiePagina';

import dataJsonCita from '../DataJson/dataJsonCita.json';

class PageCitaDetalle extends Component {

    state = {
        miCita: dataJsonCita,
        
    }

    render() {
        return <div >
            <CompCabecera />
            <main role="main" className="container">
                <div className="row">
                    <CompListaRoles />
                    <CompCitaDetalle pCita={this.state.miCita} />
                </div>
            </main>
            <CompPiePagina />

        </div>

    }
}

export default PageCitaDetalle;
