import { getProductById } from "../Services/Firebase/productService";
import {Button, Form,Row,Container,Col} from 'react-bootstrap'
import React,{useState,useEffect} from "react"
import { useForm } from "react-hook-form";
import {useParams} from "react-router-dom"
import Input from "../Components/Input";
import Alert from 'react-bootstrap/Alert'
import {useNavigate} from "react-router-dom"
import {updateProduct} from "../Services/Firebase/productService"

function EditProduct(){

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const {id} = useParams()
    const [msgError,setMsgError] = useState('El campo es requerido')
    const navigate = useNavigate()

    useEffect(
        ()=>{
            const request = async ()=>{
                
                try{
                    const response = await getProductById(id)

                    setValue("name",response.data().name)
                    setValue("price",response.data().price)
                    setValue("description",response.data().description)
                    setValue("sku",response.data().sku)
                    setValue("img",response.data().img)
                    
                }catch(e){
                    console.log(e)
                }
                
            }
            request()
        },
        [id,setValue]
    )

    const onSubmit=async (data)=>{
        try{
            const document = await updateProduct(id,data)

            navigate("/")
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
                                        <Button type="submit" variant="primary">Editar</Button>
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

export default EditProduct