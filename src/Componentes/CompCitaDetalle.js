import React, { Component } from 'react';


class CompCitaDetalle extends Component {

    render() {
        return <div className="col-9">
            <p className="h5 text-secondary">miCita</p>
            <div className="card border-primary">

                <div className="card-header bg-transparent border-secondary h4 text-primary">
                    <span style={{ float: "left" }}>Número: {this.props.pCita.id}</span>
                    <span style={{ float: "right" }}>Total S/ {this.props.pCita.total}</span>
                </div>
                <div className="card-body text-secondary">
                    <h5 className="card-title">Citas:</h5>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" className="text-center">#</th>
                                <th scope="col" className="text-center">idPaciente</th>
                                <th scope="col" className="text-center">idMedico</th>
                                <th scope="col" className="text-center">Fecha-Hora</th>
                                <th scope="col" className="text-center">idAseguradora</th>
                                <th scope="col" className="text-center">Numero Poliza</th>
                                <th scope="col" className="text-center">ID-Uusario</th>
                                <th scope="col" className="text-center">Estado</th>
                                <th scope="col" className="text-center"></th>
                            </tr>
                        </thead>
                      
                    </table>
                </div>
                <div className="card-footer bg-transparent border-secondary h4 text-secondary text-right">
                    <button type="submit" className="btn btn-primary my-1">Finalizar compra</button>
                </div>
            </div>
        </div>
    }
}


export default CompCitaDetalle;
