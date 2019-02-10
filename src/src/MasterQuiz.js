import React, { Component } from 'react';
import Timer from './components/Timer';
import Quiz from './Quiz';
import './components/Component.css';

class MasterQuiz extends Component {

    render() {
      return (
        <div><br/><br/><br/>
        <div className="MasterQuizText">
        <h2> Test yourself </h2>
        <h2>True or false!</h2>
       </div><br/>
       <div className="BoxAround">
        <div className="Quiz">
        <Quiz/>
        </div>
        </div>
        <div className="Timer">
        <Timer/>
        </div>
        </div>
      );
    }
  }
  
  export default MasterQuiz;
  