import React, {Component} from 'react';
import CompUsuarioResumen from './CompUsuarioResumen';

class CompListaUsuarios extends Component {

  render(){
    return  <div class="col-9">
        <p class="h5 text-secondary">Usuarios</p>
                    <div class="row row-cols-1 row-cols-md-3">

                        {this.props.pListaDeUsuarios.map( lu => <CompUsuarioResumen pDatosDelUsuario={lu} key={lu.idUsuario}/>)}
                    </div>
        </div>
  }
}

export default CompListaUsuarios;

