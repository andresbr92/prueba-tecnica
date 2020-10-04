import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom'
//components
import UserDetail from './userDetail'
//redux
import { useSelector, useDispatch } from 'react-redux'
import { getUsersListAction} from '../../../action/usersAction'



const Users = () => {
    const history = useHistory()
    const isLoggedIn = useSelector(state => state.profile.isLoggedIn)
    
    const dispatch = useDispatch()

    useEffect(() => { 
        dispatch(getUsersListAction())

    },[])
    console.log(isLoggedIn)
    return (
        <>
            {isLoggedIn ? <p> Lista de usuarios</p> : history.push('/login')}
            <table className='table table-striped'>
                <thead className=' bg-primary table-dark' >
                    <tr>
                        <th scope='col'>Imagen</th>
                        <th scope='col'>nombre</th>
                        <th scope='col'>trabajo</th>
                    </tr>
                </thead>
                <tbody>
                    

                </tbody>

            </table>
        </>
    );
}

export default Users;