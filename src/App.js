import React from 'react';
import Home from './Pages/Home'
import Header from './components/Header'
import { Provider } from 'react-redux'
import store from './redux/store'
// import './App.css'

import {Container , CssBaseline} from '@material-ui/core';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// const isLogin = () => {
//   var Token = (localStorage.getItem("Token") != null ) ? true : false
//   if (Token )  return true
//   else return false
// }

function App() {
  return (
      
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
          <div className="App">
            
            <Provider store={ store }>
              
              <Router>
                <Header />
                <Container maxWidth={ "xl" }>
                  
                  <Switch>
                    <Route exact path="/" component={ Home } />
              
                    {/* <Route path="/product/user/:_id" component={ () => isLogin() ? <UserProfile /> :<Login /> } /> */}
                  
                  </Switch>
                </Container>
              </Router>
            </Provider>
          </div> 
    </React.Fragment>
     
  );
}

export default App;
