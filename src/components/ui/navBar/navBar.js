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
        switch (state.profile.social) {
            case 'facebook':
                return state.profile.profile.picture.data.url
            case 'google':
                return state.profile.profile.profileObj.imageUrl
            default:
                return null
        }
    // return  isLoggedIn ? state.profile.profile.picture.data.url : null
    })
    const nameLog = useSelector(state => {
        switch (state.profile.social) {
            case 'facebook':
                return state.profile.profile.name
            case 'google':
                return state.profile.profile.profileObj.name
            default:
                return null
        }
        // return  isLoggedIn ? state.profile.profile.picture.data.url : null
    })
    console.log(nameLog)
    const page = useSelector(state => state.users.page)


    return (
        <>
            
            <Navbar bg="dark" variant="dark">
                
                
                <Link className='my-link' to="/">Cloud District</Link>
                <Nav className="mr-auto">
                    <Link className='my-link' to="/login">Log In</Link>
                    <Link className='my-link' to={`/users/${page}`}>People</Link>
                </Nav>
                <Form inline>
                    {isLoggedIn ? <Link className='my-link' to="/">{nameLog}</Link> : null}
                    {isLoggedIn ? <Image src={pictureLog} roundedCircle className='mr-4' /> : null}
                </Form>
            </Navbar>
        </>
    );
}

export default NavBar;