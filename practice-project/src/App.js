import React, { Component } from 'react';
import './App.css';


import News from './components/News';
import ToDoList from './components/ToDoList';
import TechNews from './components/TechNews';



class App extends Component {


  render() {
    return (
      <div className="App">
       <ToDoList/><br/>
      <div className="news">
      <News/>
      <p className="space"/>
      <TechNews/>
      </div>
      </div>
    );
  }
}

export default App;
