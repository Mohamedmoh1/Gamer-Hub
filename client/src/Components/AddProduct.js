import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { addProduct } from '../Redux/Actions/ProductActions';


const AddProduct=()=>{

   
    const [name,setName] = useState('')
    const [image,setImage] = useState('')
    const [description,setDescription] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAdd=(e)=>{
        e.preventDefault()
        dispatch(addProduct({name,image,description},navigate))
    }
  
    return(
        <div className='posForm'> 
            <div className='sizeForm'>
                <Form>
            

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter description" />        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control onChange={(e)=>setImage(e.target.value)} type="text" placeholder="Enter image" />        
                    </Form.Group>
            
                
                    <Button onClick={(e)=> handleAdd(e)} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default AddProduct