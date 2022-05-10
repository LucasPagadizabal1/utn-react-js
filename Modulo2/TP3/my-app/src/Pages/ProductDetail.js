import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import { getProductById } from "../Services/Firebase/productService"
import Loading from "../Components/Loading";
import { Card } from "react-bootstrap";

const styles = {
    img:{
        width:'100px'
    }
}

function ProductDetail(){
    const {id} = useParams()
    const [loading,setLoading] = useState(true)
    const [product,setProduct] = useState({})

    useEffect(()=>
        {
            const request = async ()=>{

                try{
                    setLoading(true)
                    const response = await getProductById(id)
                    setProduct(response)
                    setLoading(false)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }

            }
            request()
        }, [id]
    )


    if(loading){
        return(
            <>
                <Loading/>
            </>

        )
    }else{
        return(
            <>
                <Card>
                    <Card.Img style={styles.img} variant="top" src={product.data().img} />
                    <Card.Body>
                        <Card.Title>{product.data().name}</Card.Title>
                        <Card.Text>
                            {product.data().description}
                        </Card.Text>
                        <Card.Text>
                            ${product.data().price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        SKU: {product.data().sku}
                    </Card.Footer>
                </Card>
            </>
        )
    }
}

export default ProductDetail