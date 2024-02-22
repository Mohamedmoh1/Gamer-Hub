import axios from "axios"
import { GETALLPRODUCTS, GETONEPRODUCT } from "../ActionsTypes/ProductTypes"

export const getAllProducts=()=>async(dispatch)=>{
    try {
       const res = await axios.get('/api/product/getProducts')

       dispatch(
        {
            type : GETALLPRODUCTS,
            payload : res.data.products 
        }
       )
    } catch (error) {
        console.log(error)
    }
}


export const addProduct=(newProduct,navigate)=>async(dispatch)=>{
    try {
        await axios.post('/api/product/addProduct',newProduct)
        
        dispatch(getAllProducts())

        navigate('/ProductList')
    } catch (error) {
        console.log(error)
    }
}


export const getOneProduct=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/product/getOneProduct/${id}`)

        dispatch(
            {
                type : GETONEPRODUCT,
                payload : res.data.product
            }
        )
    } catch (error) {
        console.log(error)
    }
}


export const updateProduct=(id,upProduct,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/product/updateProduct/${id}`,upProduct)

        dispatch(getOneProduct(id))

        navigate(`/DescriptionProduct/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct=(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/product/deleteProduct/${id}`)

        dispatch(getAllProducts())

        navigate('/ProductList')
    } catch (error) {
        console.log(error)
    }
}