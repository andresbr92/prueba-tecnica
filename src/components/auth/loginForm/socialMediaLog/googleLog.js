import React from 'react';
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProfileAction} from '../../../../action/profileAction'

const GoogleLog = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const callProfile = (profile, social) => {
        dispatch(addProfileAction(profile, social = 'google'))
        history.push('/users')
        
    }
    
    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_TEST_GOOGLE}
            buttonText='Continuar con Google'
            onSuccess={callProfile}
            onFailure={callProfile}
            autoLoad={false}
            cookiePolicy={'single_host_origin'}
        />
    );
}
export default GoogleLog;