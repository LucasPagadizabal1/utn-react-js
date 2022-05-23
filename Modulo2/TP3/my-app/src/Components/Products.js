import { useState,useEffect } from "react"
import Product from '../Components/Product'
import Loading from '../Components/Loading'
import {Container,Row,Button,Col} from 'react-bootstrap'
import { getAllProducts } from '../Services/Firebase/productService'
import AuthContext from '../Context/AuthContext'
import { Link } from "react-router-dom"

const styles = {
    buttonAdd:{
        margin:"2%"
    }
}

function Products(){
    const [productList,setProductList] = useState([])
    const [loading,setLoading] = useState(true)

    const getProducts = async ()=>{
        try{
            setLoading(true)
            const response = await getAllProducts();
            setProductList(response)
            setLoading(false)

        }catch(e){
            setLoading(false)
        }
    }

    useEffect(()=>{ getProducts() },[] )

    if(loading){
        return(
            <Loading/>
        )
    }else{
        return(
            <>
                <div>
                    <AuthContext.Consumer>
                        {
                            context=>
                            <>
                                {   context.userLogin &&
                                    <Container>
                                        <Row xs={1} md={3}>
                                            <Col  xs={4}>
                                            <Button variant="primary" as={Link} to={'/product/add'}>Agregar producto</Button>
                                            </Col>                        
                                        </Row>
                                    </Container>
                                }

                                <Container>
                                    <Row xs={1} md={2}>
                                        {productList.map(pl=><Product key={pl.id} name={pl.data().name} price={pl.data().price} description={pl.data().description} id={pl.id} />)}
                                    </Row>
                                </Container>  
                            </>
                        }                       
                    </AuthContext.Consumer>
                   
                    
                </div>     
            </>
                   
        )
    }
}

export default Products