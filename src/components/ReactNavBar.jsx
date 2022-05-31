import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function ReactNavBar() {
    return (
        <Navbar bg="danger" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">PHRAKIA | Escuela de Fotografía</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Staff</Nav.Link>
                        <NavDropdown title="Cursos" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Fotoperiodismo</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Iluminación</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                            Fotografía Analógica 
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">
                            Review
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Buscar en PHRAKIA"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default ReactNavBar