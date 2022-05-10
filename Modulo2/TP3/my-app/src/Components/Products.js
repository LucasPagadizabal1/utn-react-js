import { useState,useEffect } from "react"
import Product from '../Components/Product'
import Loading from '../Components/Loading'
import {Container,Row} from 'react-bootstrap'
import { getAllProducts } from '../Services/Firebase/productService'

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
            <div>
                <Container>
                    <Row xs={1} md={3}>
                        {productList.map(pl=><Product name={pl.data().name} price={pl.data().price} description={pl.data().description} id={pl.id} />)}
                    </Row>
                </Container>  
            </div>            
        )
    }
}

export default Products