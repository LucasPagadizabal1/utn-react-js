import React,{useState} from "react"
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import {Button, Form,Row,Container,Col} from 'react-bootstrap'
import firebase from "../Config/firebase"
import Alert from 'react-bootstrap/Alert'
import {useNavigate} from "react-router-dom"

function AddProduct(){

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [msgError,setMsgError] = useState('El campo es requerido')
    const navigate = useNavigate()


    const onSubmit=async (data)=>{
        try{
            const document = await firebase.firestore().collection("product")
            .add({
                name:data.name,
                price:data.price,
                description:data.description,
                sku:data.sku,
                img:data.img
            })

            if(document){
                navigate("/")
            }
        }catch(e){
            console.log(e)
        }
        
    }
    return(
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
                                        <Input label="Descripcion" placeholder="Descripcion" register={{...register("description", { required: true })}} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input label="Precio" type="number" placeholder="Precio" register={{...register("price", { required: true })}} />
                                        {errors.price && <Alert variant='danger'> {msgError} </Alert>}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input label="SKU" type="text" placeholder="SKU" register={{...register("sku")}} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input label="Imagen URL" type="text" placeholder="Imagen URL" register={{...register("img")}} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button type="submit" variant="primary">Agregar</Button>
                                    </Col>
                                </Row>
                            </Container>               
                        </Form>
                    </Col>
                </Row>
            </Container>
    )    
}

export default AddProduct 