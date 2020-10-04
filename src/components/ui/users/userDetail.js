import React from 'react';

const UserDetail = ({ user }) => {
    const acion = () => {
        alert ('kskskks')
    }
    const { first_name, avatar, id } = user
    return (
        <tr>
            <td>{first_name}</td>
            <td> <img src={avatar}></img></td>
            <td className='acciones'>
                <button
                    type='button'
                    className='btn btn-primary mr-2'
                    // onClick={() => redireccionarEdicion(producto)}
                > Editar </button>
                <button
                    type='button'
                    className='btn btn-danger'
                    // onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>
            <td>
                {id}
            </td>
        </tr>
    );
}

export default UserDetail;