import {Form} from 'react-bootstrap'

function Input(props){
    const {label,type,placeholder,name,register} = props

    return(
        <>
            <Form.Floating className="mb-3">
                    <Form.Control id={name} type={type || "text"} placeholder={placeholder} {...register} />
                    <label htmlFor={name}>{placeholder}</label>
            </Form.Floating>
        </>
    )
}
export default Input