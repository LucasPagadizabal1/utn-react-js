import { Link } from "react-router-dom"
import {Card,Button,Col} from 'react-bootstrap'
import AuthContext from '../Context/AuthContext'
import { deleteProductById } from '../Services/Firebase/productService'
import {useNavigate} from "react-router-dom"

const styles ={
    card:{
        height:"200px",
        width:"400px",
        body:{
            title:{
                height:"30%"
            },
            text:{
                height:"20%"
            }
        }
    },
    col:{
        marginBottom:"2%"
    }
}

function Product(props){
    const {name,price,description,id} = props
    const navigate = useNavigate()

    const handlerDelete = async()=>{
        try {
            const response = await deleteProductById(id);
            navigate("/home")
        } catch (e) {
            console.log(e)
        }
        
    }

    return (
        <>
            <AuthContext.Consumer>
                {
                    context=>
                        <Col xs={4} style={styles.col}>
                            <Card style={styles.card}>
                                <Card.Body>
                                    <Card.Title style={styles.card.body.title}>{name}</Card.Title>
                                    <Card.Text style={styles.card.body.text}> ${price} </Card.Text>
                                    <Button variant="primary" as={Link} to={'/product/'+id}>Ver Detalle</Button>
                                    {
                                        context.userLogin &&
                                        <>
                                            <Button variant="warning" as={Link} to={'/product/edit/'+id}>Editar</Button>
                                            <Button type="submit" variant="danger" onClick={handlerDelete}>Borrar</Button>
                                        </>                                        
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                }
            </AuthContext.Consumer>            
        </>
    )
}
export default Product