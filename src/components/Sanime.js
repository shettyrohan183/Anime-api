import React, { Component } from "react";
import "../App.css";
export class Sanime extends Component {
  constructor() {
    super();
    this.state = {
      sarticles: [],
      // peoplea:[],
      loading: false,
    };
  }
  async componentDidMount() {
    fetch(
  "https://ghibliapi.herokuapp.com/films/790e0028-a31c-4626-a694-86b7a8cada40"    
  // "https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a"
    //  "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
    // "https://ghibliapi.herokuapp.com/films/5fdfb320-2a02-49a7-94ff-5ca418cae602"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ sarticles: data });
      });
  }
  
  // extractData(text) {
  //   var doc = new DOMParser().parseFromString(text, 'text');
  //   var items_array = [];
   
  //   for (var i = 0; i <text.length; i++) {
  //     items_array.push({
  //       name: text[i].getElementsByTagName('name')[0].lastChild.data,                
  //     })
  //   }
  //   return items_array;
  // }
  // fetchData() {
  //   var urlArray = [];

  //   for (var i = 0; i < `{this.state.sarticles.people}`.length; i++) {
  //     urlArray.push(`{this.state.sarticles.people}`[i]);
  //   }

  //   fetch(urlArray)
  //     .then((response) => response.text())
  //     .then((responseData) => {
  //       this.setState({
  //         peoplea: responseData
  //       });
  //     }).catch((error) => console.error(error))
  // }


  // componentDidMount() {
  //   this.fetchData();
  // }
  render() {
    const myStyle={
        backgroundImage: 
      `url(${this.state.sarticles.movie_banner})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        objectfit: 'cover',
       
    };
    
    console.log(this.state.sarticles);
    // console.log("this is ",this.state.peoplea);


    return (
      <div className="movie-card">
        <div className="scontainer">
          <a >
            <img
              src={this.state.sarticles.image}
              alt="cover"
              className="cover"
            />
          </a>

          <div
            className="banner" style={myStyle}>
            <div className="details">
              <div className="title1">{this.state.sarticles.title}</div>

              <div className="title2">
                {this.state.sarticles.original_title}
              </div>
              <div className="title3">
                {this.state.sarticles.original_title_romanised}
              </div>
            </div>
          </div>

          <div className="description">
            <div className="column">
              <p>{this.state.sarticles.description}</p>
              <div className="dir-rel">
              <div className="dir">
                <strong>Director :</strong>{this.state.sarticles.director}<br></br>
                <strong>producer :</strong>{this.state.sarticles.producer}<br></br>
               </div>
               <div className="rel">
               <strong>Release date :</strong>{this.state.sarticles.release_date}<br></br>
               <strong>Running time :</strong>{this.state.sarticles.running_time}<br></br>
               </div>
               </div>
            </div>
           
          </div>
          {/* <div>
          {this.state.peoplea.map((element)=>{
           return <div key={element.id}>
             people :{this.state.people.name}
            </div>
          })}
          </div> */}
        </div>
      </div>
    );
  }
}

export default Sanime;
