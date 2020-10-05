import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { getUserToEditAction, deleteUserAction } from '../../../action/usersAction'
import { useHistory } from 'react-router-dom';



const UserDetail = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector(state => state.users.getOneUser.data)

    const getTheUser = user => {
        dispatch(getUserToEditAction(user))
        history.push('/users/edit')
    }
    const deleteUser = id => { 
        dispatch(deleteUserAction(id))
    }

    return (
        <>
            {user ? (
                <Col md={4} >
                    <Card className="questions-card">
                        <Card.Img variant="top" src={user.avatar} />
                        <Card.Body>
                            <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                            <p>{user.email}</p>
                        </Card.Body>
                    </Card>
                        <button
                            type='button'
                            className='btn btn-primary mr-2'
                        onClick={() => getTheUser(user)}
                    > Edit </button>
                    <button
                        type='button'
                        className='btn btn-danger mr-2'
                        onClick={() => deleteUser(user.id)}
                    > Delete </button>
                       
                </Col >
            ) : null}
        </>
    );
}

export default UserDetail;