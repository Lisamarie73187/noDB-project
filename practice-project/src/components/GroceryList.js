import React, { Component } from 'react';
import axios from 'axios'


class GroceryList extends Component {
        constructor(){
           super()
           this.state = {
               groceryList: [],
               userInput: ''
           };
        //    this.addToList = this.addToList(this)
        //    this.handleChange = this.handleChange(this)
        }
        handleChange(value){
            this.setState({userInput: value})
        }
        addToList(){
           
            axios.post('http://localhost:3535/api/app/grocerylist', newItem)
            .then(res => {
                console.log(res)
                this.setState({ list: res.data, userInput: ''})
               }
           )
        }
       
       
           render(){
               let listDisplay = this.state.groceryList.map((e,i) => {
                   return ( <h2 key={i}>{e}</h2>)
           })
               return(
                   <div>
                       <input value={this.state.userInput} placeholder='New Item' onChange={(e) => {this.handleChange(e.target.value)}}></input>
                       <button onClick = {this.addToList}>Add</button>
                       {console.log(listDisplay)}

                       <div>{listDisplay}</div>
                   </div>
       
               )
           }
       }
export default GroceryList;