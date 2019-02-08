import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import CreateQuiz from './CreateQuiz'
import Login from './Login'
import MasterQuiz from './MasterQuiz'



const routing = (
    <Router>
    <div>
      <div className="navBar">
          <ul className="Home">
          <li>
          <Link to="/">Home</Link>
          <Link to="/Login">Login or Sign Up</Link>
          </li>
          </ul>
          </div>
          <ul className="TakeQuiz">
           <li> <Link to="/MasterQuiz">Take a Quiz!</Link>
          </li>
          </ul>
           <ul className="MakeQuiz">
           <li> <Link to="/CreateQuiz">Create a Quiz!</Link>
          </li>
          </ul>
        <Route exact path="/" component={App} />
        <Route path="/MasterQuiz" component={MasterQuiz} />
        <Route path="/CreateQuiz" component={CreateQuiz} />
        <Route path="/Login" component={Login} />
      </div>
    </Router>
    );
  
  
  
  ReactDOM.render(routing, document.getElementById('root'));
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();