import React,{Component} from "react"
import './product.css';

class Product extends Component{
    render(){
        return(
            <div className="row">
                <div className="column">
                    <div className="card">
                    <p>Nombre: SMART TV SAMSUNG </p>
                    <p>Descripci&oacute;n: 55 PULGADAS 4K UHD</p>
                    <p>Precio: $106.999,00</p>
                    <p>SKU: 55AU7000</p>
                    <p>Cantidad disponible: 7</p>
                    </div>
                </div>
            </div>
        )    
    }
}

export default Product