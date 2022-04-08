import React, { Component } from "react";
import "../App.css";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import { IconButton } from '@mui/material';
import { connect } from "react-redux";

const mapStateToprops=(props)=>{
  return{
    urls:props.urls
  }
}
export class Sanime extends Component {
  constructor() {
    super();
    this.state = {
      sarticles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    fetch(
  // "https://ghibliapi.herokuapp.com/films/790e0028-a31c-4626-a694-86b7a8cada40"    
  // "https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a"
    //  "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
    // "https://ghibliapi.herokuapp.com/films/5fdfb320-2a02-49a7-94ff-5ca418cae602"
    this.props.urls
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ sarticles: data });
      });
  }
  

  render() {
    const myStyle={
        backgroundImage: 
      `url(${this.state.sarticles.movie_banner})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        objectfit: 'cover',
       
    };
    
   
  
    

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
          <div class="mr-grid action-row">
            <div class="col2"><div class="watch-btn"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/>
</svg> WATCH TRAILER</div>
            </div>
            </div>
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
            <div className="others">
<IconButton onClick={() => { console.log('onClick'); }}><PeopleAltIcon />
</IconButton>
<IconButton><AddLocationIcon />
</IconButton>
<IconButton><DirectionsCarFilledIcon />
</IconButton>
            </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToprops)(Sanime);
