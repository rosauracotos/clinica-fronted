/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';

class CompComprobanteResumen extends Component {

    render(){
        var urlImagen = "imagenes/" + this.props.pDatosDelComprobante.url;
        var urlComprobante = "producto/" + this.props.pDatosDelComprobante.id;
        return  <div class="col mb-4">
                    <div class="card h-100">
                        <a href="producto/1">
                            <img src={urlImagen} class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body">
                            <a class="text-primary" href={urlComprobante}>
                                <h5 class="card-title">{this.props.pDatosDelComprobante.cantidad}</h5>
                            </a>
                            
                            <p class="text-primary">S/ {this.props.pDatosDelComprobante.precio}</p>
                        </div>
                    </div>
                </div>
        
    
      }
    }
    
    export default CompComprobanteResumen;
    