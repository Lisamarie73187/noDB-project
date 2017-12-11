import React, { Component } from 'react';



class DisplayList extends Component {


    render(){
        return (
            <div>
                {this.props.task.map((element,index)=>{
                return <h4 key={index}>{element}
                <button className="completeButton" onClick={()=>{this.props.handleComplete(index)}}>complete</button>
                <button className="deleteButton"onClick={()=>{this.props.handleDelete(index)}}>delete</button>
                </h4>
              
                })}
            </div>

        );
    }
}


export default DisplayList;