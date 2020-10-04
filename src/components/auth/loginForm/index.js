import React, { Fragment } from 'react';
import {useHistory} from 'react-router-dom'

import GoogleLog from './socialMediaLog/googleLog'
import FacebookLog from './socialMediaLog/facebookLog'
import TwitterLog from './socialMediaLog/twitterLog'
//redux
import { useSelector, useDispatch } from 'react-redux'




const LoginForm = () => {
    const history = useHistory()
    const isLoggedIn = useSelector(state => state.profile.isLoggedIn)
    return (
        
            <Fragment>
                {isLoggedIn ?
                    history.push('/users')
                    :
                    <>
                        <GoogleLog />
                        <FacebookLog />
                        <TwitterLog />
                    </>}



            </Fragment>
        
    );
}

export default LoginForm;