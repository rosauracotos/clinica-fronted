/* eslint-disable eqeqeq */
import React, { Component } from 'react';

class CompFormAgregarComprobante extends Component {

    state = {

        idDetalle:1,
        idComprobante: 385,
        cantidad:"",
        precioUnitario:"",
        subTotal: "",
        igv:"",
        valorTotal:"",
        idTarifa: 3
        
    }

    agregarComprobante = e => {
        this.setState({
            id: this.state.idDetalle + 1
        });
        this.props.pFuncionAgregarComprobante( this.state.cantidad,this.state.precioUnitario );

        e.preventDefault();
    }

    actualizarEstado = e => {
        if (e.target.name == "txtCantidad"){
            this.setState({
                cantidad: e.target.value
            })
        }else if(e.target.name == "txtPrecioUnitario"){
            this.setState({
                precioUnitario: e.target.value
            })
        }

    }
    


    render() {
        return <form onSubmit={this.agregarComprobante}>
            <p className="h5 text-secondary"> Comprobante</p>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" name="txtCantidad" placeholder="Cantidad" value={this.state.cantidad} onChange={this.actualizarEstado} />
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" name="txtPrecioUnitario" placeholder="Precio unitario" value={this.state.precioUnitario} onChange={this.actualizarEstado} />
                </div>
            </div>
           
            <div className="form-row">
                <div className="form-group col-md-12 text-right">
                    <button type="submit" className="btn btn-secondary">Agregar Comprobante</button>
                </div>
            </div>
        </form>
    }}

export default CompFormAgregarComprobante;
