import React, {Component} from 'react';
import CompCabecera from './CompCabecera';
import CompListaRoles from './CompListaRoles';
import CompPiePagina from './CompPiePagina';
import CompListaUsuarios from './CompListaUsuarios';
import dataJsonListaUsuarios from '../DataJson/dataJsonListaUsuarios.json';

class PageListaUsuarios extends Component {

  render(){
    return  <div >
                <CompCabecera />
                <main role="main" className="container">      
                    <div className="row">
                        <CompListaRoles />
                        <CompListaUsuarios pListaDeUsuarios={dataJsonListaUsuarios}/>
                    </div>
                </main>
                <CompPiePagina />
            </div>
  }
}

export default PageListaUsuarios;
