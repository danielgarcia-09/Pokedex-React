import { Button, Card, ListGroup, ListGroupItem, Modal } from 'react-bootstrap';

const PokeModal = ({ show, setShow, pokemon }) => {

    const { id, name, abilities, height, weight, sprites } = pokemon;
    return (
        <>

            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton onClick={() => setShow(false)}>
                    <Modal.Title>{name[0].toUpperCase() + name.substring(1)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card key={id} className="mx-auto" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sprites['front_default']} />
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Height: {height}</ListGroupItem>
                            <ListGroupItem>Weight : {weight}</ListGroupItem>
                        </ListGroup>

                        
                        <ListGroup>
                        {abilities.map(a => 
                                <ListGroupItem>{a.ability.name}</ListGroupItem>
                            )}
                        </ListGroup>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShow(false)} variant="secondary" >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PokeModal;