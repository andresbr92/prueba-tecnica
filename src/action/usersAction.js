import {
    GET_USERS_SUCCESS,
    START_DOWNLOAD_USERS,
    ONE_USER_SUCCESS
} from '../types'
import userService from '../config/axios'
import Swal from 'sweetalert2'



//add users list to state
export function getUsersListAction(page) {
    return async (dispatch) => {
        dispatch(startDownloadUser())
        try {
            const response = await userService.get(`/api/users?page=${page}`)
            dispatch(getUsersSuccess(response.data, page))

        } catch (error) {
            //TODO completar el error 

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