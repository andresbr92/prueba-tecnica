import {
    GET_USERS_SUCCESS,
    START_DOWNLOAD_USERS
} from '../types'
import userService from '../config/axios'



//add users list to state
export function getUsersListAction(page) {
    return async (dispatch) => {
        dispatch(startDownloadUser())
        try {
            const response = await userService.get(`/api/users?page=${page}`)
            dispatch(getUsersSuccess(response.data, page))
            console.log(response.data.data)

        } catch (error) {

        }
    }
}
const startDownloadUser = () => ({
    type: START_DOWNLOAD_USERS
})
const getUsersSuccess = (response,page) => ({
    type: GET_USERS_SUCCESS,
    payload: response,
    page

})