import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../App.css";
import { seturl } from './state/action-creater';
import { connect } from 'react-redux';
import { actionCreators } from './state/index'
const mapDispatchToProps=(dispatch ,url)=>{
  console.log("vsjvaj",url.url);
  return{
    seturl:()=>dispatch(actionCreators.seturl(url))
  }
}
export class Animeitem extends Component {
  render() {
      let {
          title,
          image,
          description,
          url
      } = this.props
    
    return (
        <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={image?image:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="icons">
              <div className='icons1'>
            <Link rel="noreferrer" to="/Sanime" target="_blank" className="btn btn-sn btn-dark" onClick={()=>{seturl({url})}}>
              ReadMore...
            </Link>
            </div>
            <div className='icons2'>
            <div class="col6 action-btn1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save2-fill" viewBox="0 0 16 16">
  <path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v6h-2a.5.5 0 0 0-.354.854l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5A.5.5 0 0 0 10.5 7.5h-2v-6z"/>
</svg>
            </div>
            <div class="col6 action-btn2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
</svg>
            </div>
           </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapDispatchToProps)(Animeitem)