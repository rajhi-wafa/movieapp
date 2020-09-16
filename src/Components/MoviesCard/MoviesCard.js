import React from 'react'
import './MoviesCard.css';
import Rate from '../Rate';
const MoviesCard = (props) => {
    return (
        <div className="card">
            <div className="card_left">

                <img
                src={props.movie.image}
                alt="bov"/>
                
            </div>
            <div className="card_right">
    <h1>{props.movie.name}</h1>
    <div className="card_right_details">
        <ul>
            <li>{props.movie.date}</li>
        <li>||</li>
        <li>{props.movie.type}</li>
        </ul>
        <div className="card_rigth_rating">
            <Rate rating={props.movie.rating}/>
            </div>
            <div className="card_right_review">
                <p>{props.movie.description}</p>
                <a href="http">Read More</a>
            </div>
            <div className="card_right_button">

            <a href ="http">WATCH TRAILER</a>
            </div>
                </div>
                

    </div>
            </div>
        
    )
}

export default MoviesCard

