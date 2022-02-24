import { Card } from 'react-bootstrap';

const PokeCard = ({ name, id }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
        <Card.Body>
            <Card.Title>{name[0].toUpperCase() + name.substring(1)}</Card.Title>
        </Card.Body>
    </Card>
);

export default PokeCard;