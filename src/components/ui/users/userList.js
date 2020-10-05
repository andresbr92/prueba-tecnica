import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
//components
import UserCard from './userCard'
//redux
import { useSelector, useDispatch } from 'react-redux'
import { getUsersListAction } from '../../../action/usersAction'




const UserList = () => {

    const history = useHistory()
    const isLoggedIn = useSelector(state => state.profile.isLoggedIn)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersListAction(page))

    }, [])
    const users = useSelector(state => state.users.users)
    let page = useSelector(state => state.users.page)
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
            
            
            
            <Link
                className='btn btn-success mr-2 mb-2'
                to={'/users/new'}

            >Add user</Link>
            {isLoggedIn ? null : history.push('/login')}
            {users ? users.map(user => (
                <UserCard
                    key={user.id}
                    user={user}
                />
            )) : null}
            
            {page !== 1 ? <button
                type='button'
                className='btn btn-primary mr-2'
                onClick={numPagePrevious}
            > Previous </button> : null}
            <button
                type='button'
                className='btn btn-primary mr-2'
                onClick={numPageNext}
            > Next </button>
        </>
    );
}

export default UserList;