import React from 'react';
import { getUserDetailAction } from '../../../action/usersAction'
import {useHistory} from 'react-router-dom'
//redux
import { useSelector, useDispatch } from 'react-redux'

const UserCard = ({ user }) => {
    const history = useHistory()
    const dispatch = useDispatch()


    const { first_name, avatar, id } = user

    const getUserDetail = id => {
        dispatch(getUserDetailAction(id))

        history.push(`/users/details/${id}`)
    }
    return (
        <tr>
            <td>{first_name}</td>
            <td> <img src={avatar} alt='#'></img></td>
            <td className='acciones'>
                <button
                    type='button'
                    className='btn btn-primary mr-2'
                    onClick={() => getUserDetail(id)}
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
        </tr>
    );
}

export default UserCard;