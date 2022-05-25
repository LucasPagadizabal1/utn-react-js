import { useForm } from "react-hook-form";
import React,{useState} from "react"
import Input from "../Components/Input";
import {Button, Form,Container,Row,Col} from 'react-bootstrap'
import firebase from '../Config/firebase'
import Alert from 'react-bootstrap/Alert'
import {useNavigate} from "react-router-dom"

function Register(){
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [msgError] = useState('El campo es requerido')
    const navigate = useNavigate()

    const onSubmit= async (data)=>{
        try{
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
            
            if(responseUser.user.uid){
                await firebase.db.collection("user")
                .add({
                    name:data.name,
                    lastName:data.lastName,
                    userId:responseUser.user.uid
                })

                navigate("/")
            }
        }catch(e){
            console.log(e)
        }
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
                                        {errors.name && <Alert variant='danger'> {msgError} </Alert>}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input label="Apellido" placeholder="Apellido" register={{...register("lastName", { required: true })}} />
                                        {errors.lastName && <Alert variant='danger'> {msgError} </Alert>}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input label="Email" type="email" placeholder="Email" register={{...register("email", { required: true })}} />
                                        {errors.email && <Alert variant='danger'> {msgError} </Alert>}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input label="Contraseña" type="password" placeholder="Contraseña" register={{...register("password", { required: true })}} />
                                        {errors.password && <Alert variant='danger'> {msgError} </Alert>}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button type="submit" variant="primary">Registrarse</Button>
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