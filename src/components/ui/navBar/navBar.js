import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import FormControl from 'react-bootstrap/FormControl'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Link to="/">Cloud District</Link>
                <Nav className="mr-auto">
                    <Link to="/login">Log In</Link>
                    <Link to="/people">People</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </>
    );
}

export default NavBar;