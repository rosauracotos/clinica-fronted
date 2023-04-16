import React, { Component } from 'react';

class CompComprobanteDetalleItem extends Component {

    render() {
        return <tbody>
            <tr>
                <th scope="row">{this.props.pIndice + 1}</th>
                <td>{this.props.pItem.idComprobante}</td>
                <td className="text-right">{this.props.pItem.cantidad}</td>
                <td className="text-right">{this.props.pItem.precioUnitario}</td>
                <td className="text-right">{this.props.pItem.subTotal}</td>
                <td>{this.props.pItem.igv}</td>
                <td>{this.props.pItem.valorTotal}</td>
                <td>{this.props.pItem.idTarifa}</td>
                <td className="text-center">
                    <button type="button" className="btn btn-outline-danger btn-sm"
                    onClick={this.props.pFuncEliminarComprobante.bind(this,this.props.pItem.id)}>X</button>
                </td>
            </tr>
        </tbody>
    }
}

export default CompComprobanteDetalleItem;
