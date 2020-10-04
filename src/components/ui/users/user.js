import React from 'react';
import {useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
const Users = () => {
    const history = useHistory()
    const isLoggedIn = useSelector(state => state.profile.isLoggedIn)

    console.log(isLoggedIn)
    return (
        <>
            {isLoggedIn ? <p> bienvenido</p> : history.push('/login')}
        </>
    );
}

export default Users;