import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteProduct, getOneProduct } from "../Redux/Actions/ProductActions"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { current } from "../Redux/Actions/AuthActions";

const DescriptionProduct=()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(current())
  },[])

  const user = useSelector(state => state.AuthReducer.user)

   const {id} = useParams()
   


   useEffect(()=>{
      dispatch(getOneProduct(id))
   },[])

   const product = useSelector(state=>state.ProductReducer.product)

   const navigate = useNavigate()
 return(
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={product.image} />
   <Card.Body>
     <Card.Title>{product.name}</Card.Title>
     <Card.Text>
       {product.description}
     </Card.Text>

     {
     user && user.role == "admin" &&
      <>
     <Button as={Link} to={`/EditProduct/${product._id}`} variant="primary">Edit</Button>
     <Button onClick={()=>dispatch(deleteProduct(id,navigate))} variant="danger">Delete</Button>
     </>
     }
     
 
   </Card.Body>
 </Card>
 )   
}

export default DescriptionProduct