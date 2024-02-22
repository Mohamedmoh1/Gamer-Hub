import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current, deleteUser } from "../Redux/Actions/AuthActions"
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
const Profil=()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])
    const user = useSelector(state=> state.AuthReducer.user)

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const location = useLocation()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <div>
            {
                user && 
                
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>
                    {user.email}
                    </Card.Text>
                    <Card.Link  as={Link} to="/EditProfil">Edit Profil</Card.Link>
                    <>
                    <Button variant="danger" onClick={handleShow}>
                        Delete
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={()=> {dispatch(deleteUser(user._id,navigate,location));handleClose()}}>Delete</Button>
                        
                        </Modal.Footer>
                    </Modal>
                    </>
                    
                </Card.Body>
                </Card>
            }
            
           
        </div>
    )
}

export default Profil