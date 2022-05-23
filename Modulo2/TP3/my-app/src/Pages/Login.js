import { useForm } from "react-hook-form";
import React,{useState,useContext} from "react"
import Input from "../Components/Input";
import {Button, Form,Container,Row,Col} from 'react-bootstrap'
import firebase from '../Config/firebase';
import Alert from 'react-bootstrap/Alert'
import AuthContext from '../Context/AuthContext'
import {useNavigate} from "react-router-dom"

function Login(){
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [msgError,setMsgError] = useState('El campo es requerido')
    const context = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit=async (data)=>{
        try{
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)

            if(responseUser.user.uid){
                context.loginUser()
                navigate("/")
            }
        }catch(e){
            console.log(e)
        }
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
                                    {errors.email && <Alert variant='danger'> {msgError} </Alert>}

                                    <Input label="Contraseña" type="password" placeholder="Contraseña" register={{...register("password", { required: true })}} />
                                    {errors.password && <Alert variant='danger'> {msgError} </Alert>}
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