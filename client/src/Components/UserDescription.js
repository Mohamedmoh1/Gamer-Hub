import {useParams} from 'react-router-dom' 
import {useDispatch, useSelector} from 'react-redux' 
import { useEffect } from 'react'
import { getOneuser } from '../Redux/Actions/AuthActions'
import Card from 'react-bootstrap/Card';

const UserDescription=()=>{
    const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneuser(id))
    },[])

    const oneUser = useSelector(state=> state.AuthReducer.oneUser)
    return(
        <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{oneUser.name}</Card.Title>                  
                    <Card.Text>
                    {oneUser.email}
                    </Card.Text>
                </Card.Body>
                </Card>
        </div>
    )
}

export default UserDescription