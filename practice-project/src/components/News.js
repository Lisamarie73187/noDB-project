import React, { Component } from 'react';
import axios from 'axios';


class News extends Component {
    constructor(){
        super()
        this.state = {
            newsList: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3000/api/news').then( res => {
            console.log(res)
            this.setState({ newsList: res.data})
        })
    }


    render(){
        
        let mapListSlice = this.state.newsList.slice(0,3).map((e,i) => {
            return <div key= {i}>
            <h2>{e.abstract}</h2>
            {e.multimedia[0]? <img src={e.multimedia[0].url} alt="headlines"/> : null }
            <a href={e.short_url}>Read More</a>
            <div></div>
            </div>
        })
        return(
            <div>{mapListSlice}</div>

        )
    }
}

export default News;