import React from 'react';
import { getUserDetailAction } from '../../../action/usersAction'
import { useHistory } from 'react-router-dom'
//redux
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const UserCard = ({ user }) => {
    const history = useHistory()
    const dispatch = useDispatch()


    const { first_name, avatar, id, last_name } = user

    const getUserDetail = id => {
        dispatch(getUserDetailAction(id))

        history.push(`/users/details/${id}`)
    }
    return (
        <>
            <Card style={{ width: '13rem' }}>
                <Card.Img variant="top" src={avatar} />
                <Card.Body>
                    <Card.Title>{first_name} {last_name} </Card.Title>
                    <Card.Text>
                        
                     </Card.Text>
                    <Button
                        onClick={() => getUserDetail(id)}
                        variant="primary">Details</Button>
                </Card.Body>
            </Card>
            {/* <tr>
            <td></td>
            <td> <img src='' alt='#'></img></td>
            <td className='acciones'>
                <button
                    type='button'
                    className='btn btn-primary mr-2'
                    
                > Details </button>
                <button
                    type='button'
                    className='btn btn-primary mr-2'
                    // onClick={() => redireccionarEdicion(producto)}
                > Edit </button>
                <button
                    type='button'
                    className='btn btn-danger'
                    // onClick={() => confirmarEliminarProducto(id)}
                >Delete</button>
            </td>
            <td>
                {id}
            </td>
            </tr> */}
        </>
    );
}

export default UserCard;