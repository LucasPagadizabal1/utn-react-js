import { useForm } from "react-hook-form";
import React,{useState} from "react"
import Input from "../Components/Input";
import {Button, Form,Container,Row,Col} from 'react-bootstrap'

function Register(){
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [msgError,setMsgError] = useState('El campo es requerido')
    
    const onSubmit=(data)=>{
        //Save UserInfo
    }

    return(
        <>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Container>
                                <Row>
                                    <Col>
                                        <Input label="Nombre" placeholder="Nombre" register={{...register("name", { required: true })}} />
                                        {errors.name && <span>{msgError}</span>}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input label="Apellido" placeholder="Apellido" register={{...register("lastName", { required: true })}} />
                                        {errors.lastName && <span>{msgError}</span>}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input label="Email" type="email" placeholder="Email" register={{...register("email", { required: true })}} />
                                        {errors.email && <span>{msgError}</span>}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input label="Contraseña" type="password" placeholder="Contraseña" register={{...register("password", { required: true })}} />
                                        {errors.password && <span>{msgError}</span>}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button type="submit" variant="primary">Ingresar</Button>
                                    </Col>
                                </Row>
                            </Container>               
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
      
}
export default Register