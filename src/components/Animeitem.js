import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../App.css";
// import { Link } from 'react-router-dom';
export class Animeitem extends Component {
  render() {
      let {
          title,
          image,
          description,
      } = this.props
      
    return (
        <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={image?image:"https://static.toiimg.com/photo/89459127.cms"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link rel="noreferrer" to="/Sanime" target="_blank" className="btn btn-sn btn-dark">
              ReadMore...
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Animeitem;

