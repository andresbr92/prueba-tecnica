import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { Link, NavLink } from 'react-router-dom'
import { Image } from 'react-bootstrap';

//redux 
import { useSelector, useDispatch } from 'react-redux'


const NavBar = () => {
    const isLoggedIn = useSelector(state => state.profile.isLoggedIn)
    const pictureLog = useSelector(state => {
       return  isLoggedIn ? state.profile.profile.picture.data.url : null
    })
    console.log(pictureLog)


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Image src={pictureLog} roundedCircle className='mr-4' />
                <Link to="/">Cloud District</Link>
                <Nav className="mr-auto">
                    <Link to="/login">Log In</Link>
                    <Link to="/users">People</Link>
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