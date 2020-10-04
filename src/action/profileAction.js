import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../types'

//add profile to state
export function addProfileAction(profile) {
    return async (dispatch) => {
        try {
            dispatch (addProfileToState(profile))
            console.log(profile)
        } catch (error) {
            
        }
    }
}
const addProfileToState = profile => ({
    type: LOGIN_SUCCESS,
    payload: profile
})