import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../Redux/Actions/ProductActions"
import CardProducts from "./CardProducts"

const ProductList=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllProducts())
    },[])

    const products = useSelector(state=> state.ProductReducer.products)
    return(
        <div className="cardsM">
            {
               products.length == 0 ? <h1>No products</h1> :  products.map((el,i,t)=> <CardProducts el={el}/>)
            }
        </div>
    )
}

export default ProductList