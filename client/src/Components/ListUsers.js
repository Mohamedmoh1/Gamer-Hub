import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CardUser from './CardUser'
import { getAllUsers } from '../Redux/Actions/AuthActions'

const ListUser=()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])

    const users = useSelector(state => state.AuthReducer.users)
    return(
        <div className='cardsM'>
            {
                users.map((el,i,t)=> <CardUser  el={el}/>)
            }
        </div>
    )
}

export default ListUser