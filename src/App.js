import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Components
import NavBar from './components/ui/navBar/navBar'
import LoginForm from './components/auth/loginForm'
import UserList from './components/ui/users/userList'
import UserDetail from './components/ui/users/userDetail'
import NewUserForm from './components/ui/users/newUser'

//redux
import { Provider } from 'react-redux'
import store from './store'


function App() {
  return (
    <Router>
      <Provider store={store} >
        <NavBar />
        
        <div className='container mt-5'>
          <Switch>
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/users' component={UserList} />
            <Route exact path='/users/details/:id' component={UserDetail} />
            <Route exact path='/users/new' component={NewUserForm} />

            
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
