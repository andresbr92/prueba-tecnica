import {
    GET_USERS_SUCCESS,
    START_DOWNLOAD_USERS,
    ONE_USER_SUCCESS
} from '../types'


const initialState = {
    users: [],
    getOneUser: '',
    error: null,
    loading: false,
    page: 1,
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
                users: action.payload.data.slice(0,5),
                loading: false,
                page:action.page
            }
        case ONE_USER_SUCCESS: 
            return {
                ...state,
                getOneUser:action.payload.data
            }
        default:
            return state
    }
}