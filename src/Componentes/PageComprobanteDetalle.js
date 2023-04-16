import React, { Component } from 'react';
import CompCabecera from './CompCabecera';
import CompListaRoles from './CompListaRoles';
import CompComprobanteDetalle from './CompComprobanteDetalle';
import CompPiePagina from './CompPiePagina';

import dataJsonComprobante from '../DataJson/dataJsonComprobante.json';
import dataJsonDetalleComprobante from '../DataJson/dataJsonDetalleComprobante.json';

class PageComprobanteDetalle extends Component {

    state = {
        miComprobante: dataJsonComprobante,
        miComprobanteDetalle: dataJsonDetalleComprobante
    }
    agregarComprobanteAlUsuario = (cIdDetalle, cCantidad, cPrecioUnitario) => {
        
        const nuevoItemDetalle = {
            
            "id": cIdDetalle,
            "idComprobante": 385,
            "cantidad": cCantidad,
            "precioUnitario": cPrecioUnitario,
            "subTotal": cCantidad * cPrecioUnitario,
            "igv": 0.18*cPrecioUnitario,
            "valorTotal":cCantidad * cPrecioUnitario,
            "idTarifa":4
            
            
        };
        let nuevoComprobanteDetalle =  [...this.state.miComprobanteDetalle, nuevoItemDetalle];
        this.setState({
            miComprobanteDetalle: nuevoComprobanteDetalle
        })

        this.recalcularTotal(nuevoComprobanteDetalle);
    }


    eliminarComprobanteDeCita = (id) => {
        let nuevoComprobanteDetalle = this.state.miComprobanteDetalle.filter(itemDetalle => itemDetalle.idDetalle!== id);
        this.setState({
            miComprobanteDetalle: nuevoComprobanteDetalle
        });
        this.recalcularTotal(nuevoComprobanteDetalle);
    }

        //recalcular el total del pedido
     recalcularTotal=(cDetalle)=>{
        let total = 0;
        let comprobante = this.state.miComprobante;
        cDetalle.map(itemDetalle => total = total + itemDetalle.subTotal);
        comprobante.total = total;
        this.setState({
            miComprobante: comprobante
        })
    }

    render() {
        return <div >
            <CompCabecera pCantidadComprobantes={this.state.miComprobanteDetalle.length} pTotal={this.state.miComprobante.valorTotal}/>
            <main role="main" className="container">
                <div className="row">
                    <CompListaRoles />
                    <CompComprobanteDetalle pComprobante={this.state.miComprobante}
                        pComprobanteDetalle={this.state.miComprobanteDetalle}
                        pFuncionEliminarComprobante={this.eliminarComprobanteDeCita} 
                        pFuncionAgregarComprobante={this.agregarComprobanteAlUsuario}/>
                </div>
            </main>
            <CompPiePagina />
        </div>
    }
}


export default PageComprobanteDetalle;
