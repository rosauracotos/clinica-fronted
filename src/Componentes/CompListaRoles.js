/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
//import dataJsonListaRoles from '../DataJson/dataJsonListaRoles.json';

class CompListaRoles extends Component {

  state = {
    dataJsonListaRoles: []
  }

  async componentDidMount() {
    const respuestaGet = await fetch('http://localhost:62641/api/rol');
    console.log(respuestaGet)
    const respuestaJson = await respuestaGet.json();
    console.log(respuestaJson)
    this.setState({
      dataJsonListaRoles: respuestaJson
    })
    //const respuestaGet = await fetch('http://localhost:62641/api/rol');
    //console.log(respuestaGet)
    //const respuestaJson = await respuestaGet.json();
    //console.log(respuestaGet)
    //this.setState({
      ///dataJsonListaRoles: respuestaJson
    //})
  }

  render(){
    return  <div className="col-3">
    <p className="h5 text-secondary">Roles </p>
    <div className="card">
        <p>Tipo de roles</p>
        <ul className="list-group list-group-flush">
        
                  {
                    this.state.dataJsonListaRoles.map((rol) => {
                      var url = "api/rol" + rol.IdRold;
                    return <li className="list-group-item" key={rol.idRol}><a href={url} className="text-secondary">{rol.descripcion}</a></li>
                    })
                  }

            
        </ul>
    </div>
</div>
}
}

export default CompListaRoles;
