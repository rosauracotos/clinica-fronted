import React, {Component} from 'react';
import CompCabecera from './CompCabecera';
import CompListaRoles from './CompListaRoles';
import CompPiePagina from './CompPiePagina';
import CompListaComprobantes from './CompListaComprobantes.js';
import dataJsonComprobante from '../DataJson/dataJsonComprobante.json';

class PageListaComprobantes extends Component {

  render(){
    return  <div >
                <CompCabecera />
                <main role="main" className="container">      
                    <div className="row">
                        <CompListaRoles />
                        <CompListaComprobantes pListaDeComprobantes={dataJsonComprobante}/>
                    </div>
                </main>
                <CompPiePagina />
            </div>
  }
}

export default PageListaComprobantes;
