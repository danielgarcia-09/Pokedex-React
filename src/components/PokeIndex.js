import { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {GetPokemonBySearch, PokeService} from "../services/PokeService";
import PokeCard from "./PokeCard";
import PokeListSorted from "./PokeListSorted";
import PokeModal from "./PokeModal";
import NavbarItem from "./UI/NavbarItem";
import PaginationGroup from "./UI/PaginationGroup";

const PokeIndex = () => {
    const {
        pokemons
    } = PokeService();

    const [pagination, setPagination] = useState({
        previous: 0,
        next: 5
    });

    const { previous, next } = pagination;

    const [limit, setLimit] = useState(5);

    const [sorted, setSorted] = useState('');


    useEffect(() => {
        if(previous > 0) {
            setPagination({
                ...pagination,
                previous: previous-limit,
                next: next-limit
            });
        }
    }, [limit])


    return (
        <Fragment>
            <NavbarItem />
            <Container className="my-5 mx-auto">
                <select value={limit} onChange={e => setLimit(Number(e.target.value))}>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                </select>

                <select value={sorted} onChange={e => setSorted(e.target.value)}>
                    <option value="">----------</option>
                    <option value="a-z">Alphetical Order</option>
                    <option value="z-a">Reverse Alphetical</option>
                </select>
                <Row xs={1} md={2} xl={3} className="g-4  mb-5">
                    {(pokemons && sorted === '') && pokemons.slice(previous, next).map((poke, i) =>
                        <Col key={i}>
                            <PokeCard key={i} name={poke.name} id={poke.id} />
                        </Col>
                    )}

                    {sorted !== '' && <PokeListSorted previous={previous} next={next} sorted={sorted} pokemons={pokemons} />}
                </Row>
                <PaginationGroup pagination={pagination} setPagination={setPagination} limit={limit} />
            </Container>
        </Fragment>
    )
}

export default PokeIndex;