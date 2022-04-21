import { useForm } from "react-hook-form";
import React,{useState} from "react"
import Input from "../Components/Input";

function Login(){
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [msgError,setMsgError] = useState('El campo es requerido')
    
    const onSubmit=(data)=>{
        //Valid userInfo
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Input label="Email" type="email" placeholder="Email" register={{...register("email", { required: true })}} />
                {errors.email && <span>{msgError}</span>}
                
                <Input label="Contraseña" type="password" placeholder="Contraseña" register={{...register("password", { required: true })}} />
                {errors.password && <span>{msgError}</span>}
                
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
      
}
export default Login