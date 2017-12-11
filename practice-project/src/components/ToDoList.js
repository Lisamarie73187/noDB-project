import React, { Component } from 'react';
import '../App.css';

import DisplayList from './DisplayList'

import axios from 'axios';

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      task: []
    };

    this.handleAddTask = this.handleAddTask.bind( this );
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleInputChange( value ) {
    this.setState({ input: value });
  }

  handleAddTask() {
      let newTask = {
        task: [this.state.input],
      }
      axios.post(`http://localhost:3000/api/app/todo`, newTask)
      .then( resp => {
        console.log(resp.data)
        this.setState({
          task:[...resp.data],
          input: '' 
        })
      }).catch(console.log)
    }

    handleDelete(id){
      axios.delete(`http://localhost:3000/api/delete/${id}`)
      .then(resp => {
        this.setState ({
          task: resp.data,
        })
      }).catch(console.log)
    }
    handleComplete(id){
      axios.put(`http://localhost:3000/api/completed/${id}`)
      .then(resp => {
        this.setState({
          task: resp.data,
        })
      }).catch(console.log)
    }


  

  render() {
      
    return (
      <div className="App">
        <h1>What do I have to do Today?</h1>

         <div>
           <input className="inputTask" value={this.state.input} 
                  placeholder="What do you need to do?" 
                 onChange={ (e) => this.handleInputChange( e.target.value ) }
           />

           <button className="addButton" onClick={ this.handleAddTask }>Add</button>
           <DisplayList 
           task={this.state.task}
           handleDelete={this.handleDelete}
           handleComplete={this.handleComplete}/>
          </div>
        </div>

     
    );
  }
}

export default ToDoList;