import React, { Component } from 'react';
import axios from 'axios'


class GroceryList extends Component {
        constructor(){
           super()
           this.state = {
               list: [],
               userInput: ''
           }
        }
        userInput(val){
            this.setState({userInput: val})
        }
        addToList(){
            axios.post('http://localhost:3535/api/app',{groceryItem: this.state.userInput})
            .then(res => {
                console.log(res)
                this.setState({ list: res.data, userInput: ''})
               }
           )
        }
       
       
           render(){
               let listToDisplay = this.state.list.map((e,i) => {
                   return ( <h2 key={i}>{e}</h2>
               )
           })
               return(
                   <div>
                       <input value = {this.state.userInput} placeholder='New Item' onChange ={(e) => {this.userInput(e.target.value)}}></input>
                       <button onClick = {(e) => {this.addToList(e.target.value)}}>Add</button>
                       <div>{listToDisplay}</div>
                   </div>
       
               )
           }
       }
export default GroceryList;