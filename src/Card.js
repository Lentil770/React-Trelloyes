import React from 'react';
import './Card.css';

function Card(props) {
    //add the rest of the boilerplate stuff 
    return (
        <div className='Card'>
            <button
                type='button'
            >
                delete
            </button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Card;