import axios from "../Config/axios"

export async function getAllProducts(){
    return axios.get("/sites/MLA/search?q=ipod") 
}