import {getProductsByFilter} from '../Services/productService' 
import { useState,useEffect } from "react"
import Product from '../Components/Product'
import Loading from '../Components/Loading'

function Products(){
    const [productList,setProductList] = useState([])
    const [loading,setLoading] = useState(true)
    const [search,setSearch] = useState('ipod')

    const getProducts = async ()=>{
        try{
            setLoading(true)
            const response = await getProductsByFilter(search)
            setProductList(response.data.results)
            setLoading(false)

        }catch(e){
            setLoading(false)
        }
    }

    useEffect(()=>{ getProducts() }, [search] )

    if(loading){
        return(
            <Loading/>
        )
    }else{
        return(
            <div>
                {productList.map(pl=><Product name={pl.title} price={pl.price} description={pl.description} id={pl.id} />)}
            </div>            
        )
    }
}

export default Products