import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Deck extends Component {
    constructor(props){
        super(props)
        this.flipCard = props.flipCard.bind(this)
    }

    render() {
        const {cards, firstCard, secondCard} = this.props;
        return (
            <div>
                <ul className="deck">
                    {cards.map((card) => {
                        const {id, face, matched} = card;

                        return (
                            <li key={id} 
                                className={
                                    (firstCard !== null && id === firstCard.id) || (secondCard !== null && id === secondCard.id)
                                    ? "card animated face-up"  :   matched ? 
                                                                                "card animated face-up matched" : "card animated"
                                }
                                onClick={() => this.flipCard(id)}
                            >
                                <FontAwesomeIcon icon={face} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Deck;