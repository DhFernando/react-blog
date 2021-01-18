import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'

import Home from './Pages/Home'
import Header from './components/Header'
import CreatePost from './components/CreatePost/CreatePost.jsx'

import './App.css'

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
                <Container className="root__body" maxWidth={ "xl" }>
                  
                  <Switch>
                    <Route exact path="/" component={ Home } />
              
                    <Route path="/createpost" component={ CreatePost } />
                  
                  </Switch>
                </Container>
              </Router>
            </Provider>
          </div> 
    </React.Fragment>
     
  );
}

export default App;
