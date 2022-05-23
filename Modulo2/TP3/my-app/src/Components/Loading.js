import Spinner from 'react-bootstrap/Spinner'

const styles = {
    spinner:{
        position:"absolute",
        left: "50%",
        top: "50%",
        zIndex: "9999"
    }
}

function Loading(){
    return(
        <div style={styles.spinner}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>        
    )
}

export default Loading 