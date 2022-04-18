import axios from "../Config/axios"

export async function getProductsByFilter(search){
    return axios.get("/sites/MLA/search?q="+search) 
}

export async function getProductById(id){
    return axios.get("/items/"+id)
}