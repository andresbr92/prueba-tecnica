This is a technical test for Cloud district. This is a CRUD with API consumption made with react redux, hooks, axios,styled components.

## Installation

Create an .env file in the main directory of the app. You will need a developer key from google, facebook and twitter to test the app.
REACT_APP_TEST_FACEBOOK= 'UserKey'
REACT_APP_TEST_GOOGLE= 'UserKey'
REACT_APP_TEST_TWITTER = 'UserKey'
REACT_APP_TEST_TWITTER_SECRET = 'UserKey'

Then, in the control panel of the developer portal of each social network, you must enable access to the project URL: https://localhost:3000/


<img src='/public/images/url.png'>


About the api you will not need an API-key since it is free to use.

Now you are ready to run:
### `HTTPS= true npm start`


Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Does it look like this:
<img src='./public/images/homeScreen.png'>

You can log in with your Google, Facebook or Twitter account.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### About the features of the app:
When you log in with any of the social networks, depending on which one, the app extracts your profile photo and your name from the object returned by the API of the specific social network:
<img src='/public/images/socialPhoto.png'>

When the session starts successfully, the app automatically redirects you to / users. Here the app makes an API-request to show the users.

If the login has failed, the error displayed in the console can be debugged. Additionally an alert will be displayed on the screen.


<img src='/public/images/error.png'>


### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
