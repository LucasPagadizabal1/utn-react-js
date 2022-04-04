import React,{Component} from "react"
import './form-user.css';


class FormUser extends Component{
    render(){
        return(
            <div className="card">
                <h3 className="title">Complete los campos</h3>
                <form>
                    <div className="row">
                        <div className="container-label"><label>Nombre:</label></div>
                        <input name="userName" type="text"></input>
                    </div>
                    
                    <div className="row">
                        <div className="container-label"><label>Apellido:</label></div>
                        <input name="userLastName" type="text"></input>
                    </div>

                    <div className="row">
                        <div className="container-label"><label>Email:</label></div>
                        <input name="userEmail" type="email"></input>
                    </div>

                    <div className="row">
                    <div className="container-label"><label>Tel&eacute;fono:</label></div>
                        <input name="userPhone" type="number"></input>
                    </div>

                    <div className="row">
                    <div className="container-label"><label>Contraseña:</label></div>
                        <input name="userPass" type="password"></input>
                    </div>

                    <div className="row">
                    <div className="container-label"><label>Confirmar Contraseña:</label></div>
                        <input name="userPassConfirm" type="password"></input>
                    </div>

                    <div className="container-submit">
                        <button type="submit">Enviar</button>
                    </div>
                    
                </form>
            </div>
        )    
    }
}

export default FormUser