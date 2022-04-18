import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import { getProductById } from "../Services/productService"
import Loading from "../Components/Loading";

const styles = {
    img:{
        width:'100px'
    }
}


function Product(){
    const {id} = useParams()
    const [loading,setLoading] = useState(true)
    const [product,setProduct] = useState({})

    useEffect(()=>
        {
            const request = async ()=>{
                
                try{
                    setLoading(true)
                    const response = await getProductById(id)
                    console.log(response.data)
                    setProduct(response.data)
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
                <div>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <img src={product.thumbnail} style={styles.img}></img>
                </div>
            </>
        )
    }    

}

export default Product