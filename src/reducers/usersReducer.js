import {
    GET_USERS_SUCCESS,
    START_DOWNLOAD_USERS
} from '../types'


const initialState = {
    users: [],
    error: null,
    loading: false,
}


export default function (state = initialState, action) {
    switch (action.type) {
        case START_DOWNLOAD_USERS:
            return {
                ...state,
                loading: true
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        default:
            return state
    }
}