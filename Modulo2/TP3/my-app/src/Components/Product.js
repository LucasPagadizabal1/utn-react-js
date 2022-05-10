import { Link } from "react-router-dom"
import {Card,Button,Col} from 'react-bootstrap'

const styles ={
    card:{
        height:"150px",
        width:"300px",
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

    return (
        <>
            <Col xs={4} style={styles.col}>
                <Card style={styles.card}>
                    <Card.Body>
                        <Card.Title style={styles.card.body.title}>{name}</Card.Title>
                        <Card.Text style={styles.card.body.text}> ${price} </Card.Text>
                        <Button variant="primary" as={Link} to={'/product/'+id}>Ver Detalle</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}
export default Product