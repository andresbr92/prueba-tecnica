import React, { Fragment } from 'react';

import GoogleLog from './socialMediaLog/googleLog'
import FacebookLog from './socialMediaLog/facebookLog'
import TwitterLog from './socialMediaLog/twitterLog'



const LoginForm = () => {
    return (
        <Fragment>
            <h1> este es el componente principal de login</h1>
            <GoogleLog />
            <FacebookLog />
            <TwitterLog />

        </Fragment>
    );
}

export default LoginForm;