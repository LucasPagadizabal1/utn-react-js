import { useForm } from "react-hook-form";
import React,{useState} from "react"
import Input from "../Components/Input";
import {Button, Form,Container,Row,Col} from 'react-bootstrap'

function Login(){
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [msgError,setMsgError] = useState('El campo es requerido')
    
    const onSubmit=(data)=>{
        //Valid userInfo
    }

    return(
        <>
        <Container fluid="md">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Container>
                            <Row>
                                <Col>
                                    <Input label="Email" type="email" placeholder="Email" register={{...register("email", { required: true })}} />
                                    {errors.email && <span>{msgError}</span>}

                                    <Input label="Contraseña" type="password" placeholder="Contraseña" register={{...register("password", { required: true })}} />
                                    {errors.password && <span>{msgError}</span>}
                                </Col>
                            </Row>
                        </Container>
                        <Container>
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
export default Login