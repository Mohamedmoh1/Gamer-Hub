import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardProducts=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={el.image} />
          <Card.Body>
            <Link to={`/DescriptionProduct/${el._id}`}><Card.Title>{el.name}</Card.Title></Link>
          
          </Card.Body>
        </Card>
    )
}

export default CardProducts