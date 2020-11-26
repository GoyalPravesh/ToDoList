import React from 'react';
import './index.css';
function Card(props){
    return(
    <>
    <div className="cards">
        <div className="card">
            <img src={props.imgsrc} alt="pic" width="350px" height="250px"/>
            <div className="card_info">
                <span className="card_category">{props.sname}</span>
                <h3 className="card_title">{props.series}</h3>
                <a href={props.link} target="_blank">
                <button>Watch Now!!</button>
                </a>
            </div>
        </div>
    </div>
    </>
    )
}
export default Card;