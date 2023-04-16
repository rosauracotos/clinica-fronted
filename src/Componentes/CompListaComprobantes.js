import React, {Component} from 'react';
import CompComprobanteResumen from './CompComprobanteResumen';

class CompListaComprobantes extends Component {

  render(){
    return  <div class="col-9">
        <p class="h5 text-secondary">Ropa</p>
                    <div class="row row-cols-1 row-cols-md-3">

                        {this.props.pListaDeComprobantes.map( lp => <CompComprobanteResumen pDatosDelComprobante={lp} key={lp.id}/>)}
                    </div>
        </div>
  }
}

export default CompListaComprobantes;

