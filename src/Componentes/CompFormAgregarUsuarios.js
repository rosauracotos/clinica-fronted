/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { Component } from 'react';

class CompFormAgregarUsuarios extends Component {

    state = {
        idUsuario: 0,
        nombre: "",
        apellido: "",
        sexo:"",
        celular: "",
        dni: "",
        login:"",
        password:"",
        idRol:"",
        mensajeErrorNombres: "",
        mensajeErrorApellidos: "",
        mensajeErrorDni: "",
        mensajeErrorCorreo: ""
    }
    validarDatosCliente = e => {
        let valido = false;
        this.setState({
            mensajeErrorNombres: "",
            mensajeErrorApellidos: "",
            mensajeErrorDni: "",
            mensajeErrorCorreo: ""
        })

        if (this.state.nombre == null || this.state.nombre.length == 0 || /^\s+$/.test(this.state.nombre)){
            this.setState({
                mensajeErrorNombres: "Campo obligatorio"
            })
        } else if (this.state.apellido == null || this.state.apellido.length == 0 || /^\s+$/.test(this.state.apellido)) {
            this.setState({
                mensajeErrorApellidos: "Campo obligatorio"
            })
        } else if (this.state.dni == null || this.state.dni.length == 0 || /^\s+$/.test(this.state.dni)) {
            this.setState({
                mensajeErrorDni: "Campo obligatorio"
            })
        } else if (!(/^\d{8}$/.test(this.state.dni))) {
            this.setState({
                mensajeErrorDni: "Ingrese ocho números"
            })
        } else if (this.state.correo.length > 0 && !(/\S+@\S+\.\S+/.test(this.state.correo))) {
            this.setState({
                mensajeErrorCorreo: "Ingrese un correo correcto"
            })
        } else {
            alert("Datos correctos.");
        }   
        e.preventDefault();
    }

    actualizarEstado = e => {
        if (e.target.name == "txtNombres"){
            this.setState({
                nombre: e.target.value
            })
        }else if(e.target.name == "txtApellidos"){
            this.setState({
                apellido: e.target.value
            })
        }else if(e.target.name == "txtSexo"){
            this.setState({
                sexo: e.target.value
            })
        }else if(e.target.name == "txtCelular"){
            this.setState({
                celular: e.target.value
            })
        }else if(e.target.name == "txtDni"){
            this.setState({
                dni: e.target.value
            })
        
        }else if(e.target.name == "txtCorreo"){
            this.setState({
                correo: e.target.value
            })
        }else if(e.target.name == "txtLogin"){
            this.setState({
                login: e.target.value
            })


        }else if(e.target.name == "txtPassword"){
            this.setState({
                password: e.target.value
            })
        }
    }
    render() {
        return <form onSubmit={this.validarDatosCliente}>
            <p className="h5 text-secondary">Datos del Cliente</p>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="txtNombres">*Nombres:</label>
                    <input type="text" className="form-control" name="txtNombres" id="txtNombres"  
                        value={this.state.nombres} onChange={this.actualizarEstado}/>
                    <div className="badge badge-danger">{this.state.mensajeErrorNombres}</div>
                </div>
                <div className="form-group col-md-6">
                    <label for="txtTelefono">Teléfono:</label>
                    <input type="text" className="form-control" name="txtTelefono" id="txtTelefono" 
                        value={this.state.telefono} onChange={this.actualizarEstado}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="txtApellidos">*Apellidos:</label>
                    <input type="text" className="form-control" name="txtApellidos" id="txtApellidos" 
                        value={this.state.apellidos} onChange={this.actualizarEstado}/>
                    <div className="badge badge-danger">{this.state.mensajeErrorApellidos}</div>
                </div>
                <div className="form-group col-md-6">
                    <label for="txtCorreo">Correo:</label>
                    <input type="text" className="form-control" name="txtCorreo" id="txtCorreo" 
                        value={this.state.correo} onChange={this.actualizarEstado}/>
                    <div className="badge badge-danger">{this.state.mensajeErrorCorreo}</div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="txtDni">*Dni:</label>
                    <input type="text" className="form-control" name="txtDni" id="txtDni" 
                        value={this.state.dni} onChange={this.actualizarEstado}/>
                    <div className="badge badge-danger">{this.state.mensajeErrorDni}</div>
                </div>
                <div className="form-group col-md-6">
                    <label for="txtDireccion">Dirección:</label>
                    <input type="text" className="form-control" name="txtDireccion" id="txtDireccion" 
                        value={this.state.direccion} onChange={this.actualizarEstado}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12 text-right">
                    <button type="submit" className="btn btn-primary">Agregar</button>
                </div>
            </div>
        </form>
    }
}

export default CompFormAgregarUsuarios;

