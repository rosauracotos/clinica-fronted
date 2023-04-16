/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';

class CompUsuarioResumen extends Component {

    render(){
        var urlImagen = "imagenes/" + this.props.pDatosDelUsuario.url;
        var urlUsuario = "usuario/" + this.props.pDatosDelUsuario.idUsuario;
        return  <div class="col mb-4">
                    <div class="card h-100">
                        <a href="producto/1">
                            <img src={urlImagen} class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body">
                            <a class="text-primary" href={urlUsuario}>
                                <h5 class="card-title">{this.props.pDatosDelUsuario.nombre}</h5>
                            </a>
                            <p class="card-text">{this.props.pDatosDelUsuario.apellido}</p>
                            <p class="text-primary">S/ {this.props.pDatosDelUsuario.sexo}</p>
                            <p class="text-primary">S/ {this.props.pDatosDelUsuario.celular}</p>
                            <p class="text-primary">S/ {this.props.pDatosDelUsuario.dni}</p>
                            <p class="text-primary">S/ {this.props.pDatosDelUsuario.loggin}</p>
                            <p class="text-primary">S/ {this.props.pDatosDelUsuario.password}</p>
                            <p class="text-primary">S/ {this.props.pDatosDelUsuario.idRol}</p>
                        </div>
                    </div>
                </div>
        
    
      }
    }
    
    export default CompUsuarioResumen;
    