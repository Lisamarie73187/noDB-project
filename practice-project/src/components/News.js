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
            return <div key= {i} className="border" ><div className="imageAndHeadline">
                <div className="mappedNews" >
            <span className="headline">{e.abstract}</span>
            <div className="image">{e.multimedia[0]? <img src={e.multimedia[0].url} alt="headlines"/> : null }</div>
            </div>
            <a className="link" href={e.short_url}>Read More</a>
            </div>
            </div>
        })
        return(
            <div>
            <h1>What's in the News?</h1>
            <div className="wrapper">
            <h3>The Daily</h3>
            <div className="newsArray">{mapListSlice}</div>
            </div>
            </div>

        )
    }
}

export default News;