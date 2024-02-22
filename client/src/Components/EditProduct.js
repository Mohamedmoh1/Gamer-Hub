import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import { getOneProduct, updateProduct } from '../Redux/Actions/ProductActions';



const EditProduct=()=>{
    const {id} = useParams()
   
   const dispatch = useDispatch()

   useEffect(()=>{
      dispatch(getOneProduct(id))
   },[])

   const product = useSelector(state=>state.ProductReducer.product)
   
    const [name,setName] = useState(product.name)
    const [image,setImage] = useState(product.image)
    const [description,setDescription] = useState(product.description)

    useEffect(()=>{
        setName(product.name)
        setImage(product.image)
        setDescription(product.description)
    },[])

    const navigate = useNavigate()

    const handleUpdate=(e)=>{
        e.preventDefault()
        dispatch(updateProduct(id,{name,image,description},navigate))
    }
  
    return(
        <div className='posForm'> 
            <div className='sizeForm'>
                <Form>
            

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter description" />        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control value={image} onChange={(e)=>setImage(e.target.value)} type="text" placeholder="Enter image" />        
                    </Form.Group>
            
                
                    <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default EditProduct