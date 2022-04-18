import { useState } from "react"
import '../Home.css';
import Products from "../Components/Products";

function Home(){
    const [title,setTitle] = useState('Venta de productos')

    return(
        <>
            <h1>{title}</h1>
            <div>
                <Products/>
            </div>
        </>
    )
      
}
export default Home