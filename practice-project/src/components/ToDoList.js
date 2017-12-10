import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
// import Todo from './Todo';

import DisplayList from './DisplayList'

import axios from 'axios';

class ToDoList extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: '',
      task: []
    };

    this.handleAddTask = this.handleAddTask.bind( this );
  }

  handleInputChange( value ) {
    this.setState({ input: value });
  }

  handleAddTask() {
      let newTask = {
        task: [...this.state.input]
      }
      axios.post(`http://localhost:3000/api/app/todo`, newTask).then( resp => {
        console.log(resp.data)
        this.setState({
          task:[...resp.data],
          input: '' 
        })
      }).catch(console.log)

    };

  

  render() {
    // var listedArray = this.state.task.map((element,index)=>{
    //   return <h4 key={index}><input type="checkbox"/>{element}<a href="">[x]</a></h4>
    // })

    return (
      <div className="App">
        <h1>My to-do list:</h1>

         <div>
           <input value={this.state.input} 
                  placeholder="Enter new task" 
                 onChange={ (e) => this.handleInputChange( e.target.value ) }
           />

           <button onClick={ this.handleAddTask }>Add</button>
           <DisplayList task={this.state.task}/>
          </div>
        </div>

     
    );
  }
}

export default ToDoList;