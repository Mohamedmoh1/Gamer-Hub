import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, useParams} from "react-router-dom"
import { current, updateProfil } from '../Redux/Actions/AuthActions';
const EditProfil
=()=>{

    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])

    const user = useSelector(state => state.AuthReducer.user)


    const [name,setName] = useState(user.name)
    const [email,setEmail] = useState(user.email) 

    useEffect(()=>{
        setName(user.name)
        setEmail(user.email)
    },[user])

    const navigate = useNavigate()

    const handleUpdate=(e)=>{
        e.preventDefault()
        dispatch(updateProfil({name,email},navigate))
    }
    return(
        <div className='posForm'> 
            <div className='sizeForm'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />   
                </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />   
                </Form.Group>

                <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        </div>
    )
}

export default EditProfil
