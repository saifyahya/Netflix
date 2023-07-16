import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from './ModalMovie';
import { useState } from 'react';
function Movie(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.poster_path} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>
           {props.data.overview}
          </Card.Text>
          <Button variant="primary" onClick= {handleShow}>Add to Favorite</Button>
        </Card.Body>
      <ModalMovie data={props.data} handleClose={handleClose} handleShow={handleShow} show={show}/>
       
      </Card>
      
    )
}

export default Movie