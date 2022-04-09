import { useState,useEffect } from "react"
import Product from '../Components/Product'
import '../Home.css';
import {getAllProducts} from '../Services/productService'   
import Loading from "../Components/Loading";

function Home(){
    const [title,setTitle] = useState('Venta de productos')
    const [productList,setProductList] = useState([])
    const [loading,setLoading] = useState(true)

    const getProducts = async ()=>{
        try{
            setLoading(true)
            const response = await getAllProducts()
            setProductList(response.data.results)
            setLoading(false)

        }catch(e){
            setLoading(false)
        }
    }

    useEffect(()=>{ getProducts() }, [] )

    if(loading){
        return(
            <>
                <h1>{title}</h1>
                <Loading/>
            </>
           
        )
    }else{
        return(
            <>
                <h1>{title}</h1>
                <div>
                    {productList.map(lp=><Product name={lp.title} price={lp.price} description={lp.description} />)}
                </div>
            </>
        )
    }    
}
export default Home