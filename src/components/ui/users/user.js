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
        dispatch(getUsersListAction(page))

    }, [])
    const users = useSelector(state => state.users.users.data)
    let page = useSelector(state => state.users.page )
    const numPageNext = () => {
        page++
        dispatch(getUsersListAction(page))
        return

    }
    const numPagePrevious = () => {
        if (page === 1) {
            return
        } else {
            page--
            dispatch(getUsersListAction(page))
            return
        }

    }
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
                    {users ? users.map(user => (
                        <UserDetail
                            key={user.id}
                            user={user}
                        />
                    )) : null}
                    

                </tbody>

            </table>
            {page !== 1 ?<button
                type='button'
                className='btn btn-primary mr-2'
                onClick={numPagePrevious}
            > Anterior </button> : null}
            <button
                type='button'
                className='btn btn-primary mr-2'
                onClick={ numPageNext}
            > Siguiente </button>
        </>
    );
}

export default Users;