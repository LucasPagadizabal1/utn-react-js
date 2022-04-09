import { useState } from "react"

function Product(props){
    const {name,price,description} = props
    const [messageBuyed,setMessageBuyed] = useState('')

    const handleClick=()=>{
        setMessageBuyed('Gracias por su compra!')
    }

    return(
        <>
            <div className="product">
                <p>{name}</p>
                <p>{price}</p>
                <p>{description}</p>
                <button onClick={handleClick}>Comprar</button>
                <p>{messageBuyed}</p>
            </div>
            
        </>
    )
}
export default Product