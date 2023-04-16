import { Component } from "react";
import CompCabecera from "./CompCabecera";
//import CompListaRoles from "./CompListaRoles";
import CompFormAgregarUsuarios from './CompFormAgregarUsuarios';
import CompPiePagina from "./CompPiePagina";



class PageUsuarios extends Component{

    render(){
        return  <div >
        <CompCabecera />
        <main role="main" className="container">      
            <div className="row">
                
                <CompFormAgregarUsuarios />
                
            </div>
        </main>
        <CompPiePagina />
    </div>

    }
}

export default PageUsuarios;