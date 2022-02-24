import { useState } from "react";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap"
import { GetPokemonBySearch } from "../../services/PokeService";
import PokeModal from "../PokeModal";
import SavedPoke from "../SavedPoke";

const NavbarItem = () => {

  const { search, setSearch, setUseApi, resultPoke, savedPokemons } = GetPokemonBySearch();


  const [showSavedPokemons, setShowSavedPokemons] = useState(false);
  const [showModal, setShowModal] = useState(false);

  

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if( search.trim() === '') return;
   
    setUseApi(true);

    setTimeout(()=> {
      setUseApi(false);
      setSearch('');
      setShowModal(true);
    }, 500)
  }

  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">PokeApi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" >Home</Nav.Link>
          </Nav>
          <Button onClick={()=> setShowSavedPokemons(true)} className="mx-3" variant="outline-info">
              Saved Pokemons
          </Button>
          <Form 
            onSubmit={handleSubmit}
            className="d-flex"
          >
            <FormControl
              name="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      
      {showSavedPokemons && <SavedPoke show={showSavedPokemons} setShow={setShowSavedPokemons} pokemons={savedPokemons} />}

      {showModal && <PokeModal show={showModal} setShow={setShowModal} pokemon={resultPoke} /> }
    </Navbar>
  )
}

export default NavbarItem;