import React from 'react';
import Card from './Card.js';
import './List.css';

//props.children[i].header / .cards?

function List(props) {
    console.log('props:',props);
    const cardsArr = props.cards.map(single => (
        <Card 
            title={single.title} 
            content={single.content}
            key={single.id}
        ></Card>
    )
    ) 

    console.log('List is running', cardsArr)
    return (
        <section className='List'>
            <header><h2>{props.header}</h2></header>
            <div className='List-cards'>
                {cardsArr}
                <button
                    type='button'
                    className='List-add-button'
                    >
                    + Add Random Card
                </button>
            </div>
        </section>
    )
}

export default List;