import { GETALLPRODUCTS, GETONEPRODUCT } from "../ActionsTypes/ProductTypes"

const initialState= {
    products : [],
    product : {}
}

const ProductReducer=(state = initialState,action)=>{
    switch (action.type) {
        case GETALLPRODUCTS : return {...state , products : action.payload} 
        case GETONEPRODUCT : return {...state, product : action.payload}
        default: return state
    }
}

export default ProductReducer