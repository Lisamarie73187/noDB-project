import React, { Component } from 'react';
import axios from 'axios';


class TechNews extends Component {
    constructor(){
        super()
        this.state = {
            newsList: []
        }
    }
    componentDidMount(){
        console.log('didyoumount?')
        axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_TECH}`).then( res => {
            console.log(res)
            this.setState({ newsList: res.data.articles})
        })  
        console.log(process.env.REACT_APP_TECH)
        console.log(process.env.REACT_APP_TEST)
        
    }



    render(){
        
        let listTechNews = this.state.newsList.slice(0,3).map((e,i) => {
            return <div key= {i} className="border" ><div className="imageAndHeadline">
                <div className="mappedNews" >
            <span className="headline">{e.title}</span>
            <div className="image"> <img src={e.urlToImage} alt="headlines" width="75px" height="75px"/> </div>
            </div>
            <a className="link" href={e.url}>Read More</a>
            </div>
            </div>

        })
  
        
        return(
            <div className = "wrapper">
            <h3>TechCrunch</h3>
            <div className="newsArray">
                {listTechNews}
            </div>
            </div>

        )
    }
}

export default TechNews;