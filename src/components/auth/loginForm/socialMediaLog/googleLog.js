import React from 'react';
import GoogleLogin from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'
import { addProfileAction} from '../../../../action/profileAction'

const GoogleLog = () => {

    const dispatch = useDispatch()

    const callProfile = profile => {
        console.log (profile)
        dispatch(addProfileAction(profile))
        
    }
    
    // console.log(process.env.REACT_APP_TEST_GOOGLE)
    // const responseGoogle = response => {
    //     console.log(response)
    // }
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