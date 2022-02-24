import { Col } from "react-bootstrap";
import PokeCard from "./PokeCard";

const PokeListSorted = ({previous, next, sorted, pokemons }) => {
    return (
        (sorted === 'a-z') ? 
        pokemons.slice(previous, next)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((poke, i) =>
        <Col key={i}>
                    <PokeCard key={i} name={poke.name} id={poke.id} />
                </Col>
        ) 
            : 
        pokemons.slice(previous, next)
        .sort((a, b) => a.name.localeCompare(b.name)).reverse()
            .map((poke, i) =>
                <Col key={i}>
                    <PokeCard key={i} name={poke.name} id={poke.id} />
                </Col>
            )
    )
}

export default PokeListSorted;