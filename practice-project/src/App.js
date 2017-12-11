import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';

import News from './components/News';
import ToDoList from './components/ToDoList';



class App extends Component {


  render() {
    return (
      <div className="App">
       <ToDoList/><br/>
      <div className="news">
      <News/>
      </div>
      </div>
    );
  }
}

export default App;
