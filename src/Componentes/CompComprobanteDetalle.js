import React, { Component } from 'react';
import CompComprobanteDetalleItem from './CompComprobanteDetalleItem';
import CompFormAgregarComprobante from "./CompFormAgregarComprobante";

class CompComprobanteDetalle extends Component {

    render() {
        return <div className="col-9">
            <CompFormAgregarComprobante pFuncionAgregarComprobante={this.props.pFuncionAgregarComprobante} />
            <p className="h5 text-secondary">Comprobante</p>
            <div className="card border-primary">

                <div className="card-header bg-transparent border-secondary h4 text-primary">
                    <span style={{ float: "left" }}>Número: {this.props.pComprobante.idComprobante}</span>
                    <span style={{ float: "right" }}>Total S/ {this.props.pComprobante.valorTotal}</span>
                </div>
                <div className="card-body text-secondary">
                    <h5 className="card-title">Citas:</h5>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" className="text-center">#</th>
                                <th scope="col" className="text-center">idComprobante</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio unitario</th>
                                <th scope="col" className="text-center">SubtotalLL</th>
                                <th scope="col" className="text-center">Igv</th>
                                <th scope="col" className="text-center">Valor Total</th>
                                <th scope="col" className="text-center">Id Tarifa</th>
                                <th scope="col" className="text-center"></th>
                            </tr>
                        </thead>
                        {
                            this.props.pComprobanteDetalle.map((item, indice) => {
                                return (
                                <CompComprobanteDetalleItem pItem={item} pIndice={indice} key={indice} pFuncEliminarComprobante={this.props.pFuncionEliminarComprobante}
                                />
                                );
                            })
                        }
                    </table>
                </div>
                <div className="card-footer bg-transparent border-secondary h4 text-secondary text-right">
                    <button type="submit" className="btn btn-primary my-1">Finalizar compra</button>
                </div>
            </div>
        </div>
    }
}

export default CompComprobanteDetalle;