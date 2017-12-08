import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import News from './components/News';
import ToDoList from './components/ToDoList';
import GroceryList from './components/GroceryList'


class App extends Component {


  render() {
    return (
      <div className="App">
      <News/>
      <ToDoList/>
      <GroceryList/>
      </div>
    );
  }
}

export default App;
