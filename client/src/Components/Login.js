import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login } from '../Redux/Actions/AuthActions';


const Login=()=>{

   
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        dispatch(login({email,password},navigate))
    }

    return(
        <div className='posForm'> 
            <div className='sizeForm'>
                <Form>
            

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter password" />        
                    </Form.Group>
            
                
                    <Button onClick={(e)=> handleLogin(e)}  variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login