const styles = {
    img:{
        width:'100px'
    }
}

function ProductImage(props){
    const {src} = props

    return (
        <>
            <image src={src} style={styles.img}></image>
        </>
    )
}

export default ProductImage