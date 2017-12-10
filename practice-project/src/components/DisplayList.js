import React, { Component } from 'react';



class DisplayList extends Component {


    render(){
        return (
            <div>
                {this.props.task.map((element,index)=>{
                return <h4 key={index}>
                <input type="checkbox"/>{element}
                <a href="">[x]</a></h4>
                })}
            </div>

        );
    }
}


export default DisplayList;