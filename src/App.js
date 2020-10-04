import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/ui/navBar/navBar'
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
            
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
