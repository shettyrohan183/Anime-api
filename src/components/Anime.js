
import React, { Component } from 'react'
import Animeitem from './Animeitem';
import "../App.css";

export class Anime extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading :false
        }
    }
    async componentDidMount(){
      fetch("https://ghibliapi.herokuapp.com/films").then(
            response => {
                return response.json()
            })
            .then(data =>{
                this.setState({articles : data})
            })
    }
       
  render() {
    console.log("results : ", this.state.articles);
    return (
        <div className="container my-3">
        <h2>Anime - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return  <div className="col-md-4"  key={element.id}>
            <Animeitem
              title={element.title}
              descripton={element.description}
              image={element.image}
              url={element.url}
            />
          </div>
        })}
         
        </div>
        </div>
    );
  }
}

export default Anime;