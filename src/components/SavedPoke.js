import { Button, Card, ListGroup, ListGroupItem, Modal } from "react-bootstrap";

const SavedPoke = ({ show, setShow, pokemons }) => (
    <Modal
        show={show}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton onClick={() => setShow(false)}>
            <Modal.Title>Saved Pokemons</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {pokemons.map(pokemon => (
                <Card key={pokemon.id} className="mx-auto" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pokemon.sprites['front_default']} />
                    <Card.Body>
                        <Card.Title>{pokemon.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Height: {pokemon.height}</ListGroupItem>
                        <ListGroupItem>Weight : {pokemon.weight}</ListGroupItem>
                    </ListGroup>


                    <ListGroup>
                        {pokemon.abilities.map(a =>
                            <ListGroupItem>{a.ability.name}</ListGroupItem>
                        )}
                    </ListGroup>
                </Card>
            ))}
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => setShow(false)} variant="secondary" >
                Close
            </Button>
        </Modal.Footer>
    </Modal>
)


export default SavedPoke;