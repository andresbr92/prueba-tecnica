import {
    GET_USERS_SUCCESS,
    START_DOWNLOAD_USERS,
    ONE_USER_SUCCESS,
    GET_USER_EDIT,
    EDIT_USER_SUCCESS
} from '../types'
import userService from '../config/axios'
import Swal from 'sweetalert2'



//add users list to state
export function getUsersListAction(page) {
    return async (dispatch) => {
        dispatch(startDownloadUser())
        try {
            const response = await userService.get(`/apis/users?page=${page}`)
            dispatch(getUsersSuccess(response.data, page))

        } catch (error) {
            //TODO completar el error 
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something gone wrong, please try again'
            })

        }
    }
}
const startDownloadUser = () => ({
    type: START_DOWNLOAD_USERS
})
const getUsersSuccess = (response, page) => ({
    type: GET_USERS_SUCCESS,
    payload: response,
    page

})
//get one user details
export function getUserDetailAction(id) {
    return async (dispatch) => {
        try {
            const response = await userService.get(`/api/users/${id}`)
            dispatch(getOneUser(response))
        } catch (error) {
            //TODO completar el error
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something gone wrong, please try again'
            })

        }
    }
}

const getOneUser = response => ({
    type: ONE_USER_SUCCESS,
    payload: response
})
//create a new user
export function createNewUserAction(user) {
    return async (dispatch) => {
        try {
            const response = await userService.post('/api/users', user)
            console.log(response)
            Swal.fire('Success', 'The user was added to de DDBB', 'success')
        } catch (error) {
            //TODO completar el error
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something gone wrong, please try again'
            })

        }
    }
}

//get user to edit
export function getUserToEditAction(user) {
    return (dispatch) => {
        dispatch(getUserToEdit(user))
    }
}
const getUserToEdit = user => ({
    type: GET_USER_EDIT,
    payload: user
})
//edit user success
export function editUserSuccessAction(user) {
    return async (dispatch) => {
        try {
            const response = await userService.put(`/api/users/${user.id}`, user)
            console.log (response)
            dispatch(editUserSuccess(user))
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something gone wrong, please try again'
            })

        }
    }
}
const editUserSuccess = user => ({
    type: EDIT_USER_SUCCESS,
    payload: user
})
//delete user
export function deleteUserAction(id) {
    return async (dispatch) => {
        try {
            await userService.delete(`/api/users/${id}`)
            console.log(id)
            Swal.fire('Success', 'User deleted', 'success')
            
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something gone wrong, please try again'
            })
            
            
        }
        
}
}