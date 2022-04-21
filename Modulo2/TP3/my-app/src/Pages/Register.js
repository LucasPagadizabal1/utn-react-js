import { useForm } from "react-hook-form";
import React,{useState} from "react"
import Input from "../Components/Input";

function Register(){
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [msgError,setMsgError] = useState('El campo es requerido')
    
    const onSubmit=(data)=>{
        //Save UserInfo
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Nombre" placeholder="Nombre" register={{...register("name", { required: true })}} />
                {errors.name && <span>{msgError}</span>}

                <Input label="Apellido" placeholder="Apellido" register={{...register("lastName", { required: true })}} />
                {errors.lastName && <span>{msgError}</span>}

                <Input label="Email" type="email" placeholder="Email" register={{...register("email", { required: true })}} />
                {errors.email && <span>{msgError}</span>}
                
                <Input label="Contraseña" type="password" placeholder="Contraseña" register={{...register("password", { required: true })}} />
                {errors.password && <span>{msgError}</span>}
                
                <button type="submit">Registrarme</button>
            </form>
        </>
    )
      
}
export default Register