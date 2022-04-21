import { Link } from "react-router-dom"

function Product(props){
    const {name,price,description,id} = props

    return(
        <>
            <div className="product">
                <p>{name}</p>
                <p>${price}</p>
                <p>{description}</p>
                <Link to={'/product/'+id}>Ver Detalle</Link>
            </div>
        </>
    )
}
export default Product