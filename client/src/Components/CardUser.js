import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { deleteUser } from '../Redux/Actions/AuthActions';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
const CardUser=({el})=>{
  
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const location = useLocation()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Link to={`/UserDescription/${el._id}`}><Card.Title>{el.name}</Card.Title></Link>  
                    <Card.Text>
                    {el.email}
                    </Card.Text>             
                </Card.Body>
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
                        <Button variant="danger" onClick={()=> {dispatch(deleteUser(el._id,navigate,location));handleClose()}}>Delete</Button>
                        
                        </Modal.Footer>
                    </Modal>
                    </>
            </Card>
        </div>
    )
}

export default CardUser