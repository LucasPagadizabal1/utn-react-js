import { useState } from "react"

function Product(props){
    const {name,price,description} = props

    const handleClick=()=>{
        
    }

    return(
        <>
            <div className="product">
                <p>{name}</p>
                <p>{price}</p>
                <p>{description}</p>
                <button onClick={handleClick}>Ver detalles</button>
            </div>
        </>
    )
}
export default Product