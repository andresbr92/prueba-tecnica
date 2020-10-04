import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Components

import NavBar from './components/ui/navBar/navBar'
import LoginForm from './components/auth/loginForm'
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
            <LoginForm />

            
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
