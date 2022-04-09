import { useState,useEffect } from "react"
import Product from './Product'
import './Home.css';

function Home(){
    const [title,setTitle] = useState('Venta de productos')
    const [productList,setProductList] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(
        ()=>{
            setTimeout(()=>{
                setProductList([
                    {
                        name:"Moto G",
                        price:"$1000",
                        description:"Celular moto g"
                    },
                    {
                        name:"Moto X",
                        price:"$1500",
                        description:"Celular moto x"
                    },
                    {
                        name:"iPhone",
                        price:"$2000",
                        description:"Celular iPhone"
                    }
                ])
                setLoading(false)
            },2000)
        },
        []
    )

    if(loading){
        return(
            <>
                <h1>{title}</h1>
                <div>
                    Cargando...
                </div>
            </>
           
        )
    }else{
        return(
            <>
                <h1>{title}</h1>
                <div>
                    {productList.map(lp=><Product name={lp.name} price={lp.price} description={lp.description} />)}
                </div>
            </>
        )
    }    
}
export default Home