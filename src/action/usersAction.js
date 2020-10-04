import {
    GET_USERS_SUCCESS,
    START_DOWNLOAD_USERS
} from '../types'
import userService from '../config/axios'



//add users list to state
export function getUsersListAction() {
    return async (dispatch) => {
        dispatch(startDownloadUser())
        try {
            const response = await userService.get('/api/users?page=2')
            dispatch(getUsersSuccess(response.data))

        } catch (error) {

        }
    }
}
const startDownloadUser = () => ({
    type: START_DOWNLOAD_USERS
})
const getUsersSuccess = response => ({
    type: GET_USERS_SUCCESS,
    payload: response

})