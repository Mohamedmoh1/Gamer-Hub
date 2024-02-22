import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ErrorReducer from './ErrorReducer'
import ProductReducer from './ProductReducer'
const rootReducer = combineReducers({AuthReducer,ErrorReducer,ProductReducer})

export default rootReducer