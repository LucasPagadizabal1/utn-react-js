import firebase from "../../Config/firebase"

export async function getAllProducts(){
    const querySnapshot = await firebase.db.collection("product").get()
    return querySnapshot.docs
}
export async function getProductById(id){
    return await firebase.db.doc("product/"+id).get()
}

export async function deleteProductById(id){
    return await firebase.db.doc("product/"+id).delete()
}

export async function updateProduct(id,data){
    return await firebase.db.doc("product/"+id).set(data)
}