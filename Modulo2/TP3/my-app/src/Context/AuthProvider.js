import React,{useState} from "react"
import AuthContext from "./AuthContext"
import {useNavigate} from "react-router-dom"

function AuthProvider(props){

    const [userLogin,setUserLogin] = useState(localStorage.getItem("login")||false)
    const navigate = useNavigate()

    const loginUser = ()=>{
        setUserLogin(true)
        localStorage.setItem("login",true)
    }

    const logoutUser = ()=>{
        setUserLogin(false)
        localStorage.removeItem("login")
        navigate("/")
    }

    return(
        <AuthContext.Provider
            value={{
                userLogin,
                loginUser,
                logoutUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider