import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Deck extends Component {
    constructor(props){
        super(props)
        this.addMove = props.addMove.bind(this)
        this.onClick = props.onClick.bind(this)
    }

    render() {
        const {cards} = this.props;
        return (
            <div>
                <button onClick={this.addMove}>Make move</button>
                <button>Stop timer</button>
                <ul className="deck">
                    {cards.map((card) => {
                        const {id, face, faceUp} = card;

                        return (
                            <li key={id} 
                                className={faceUp ? "card animated face-up" : "card animated"}
                                onClick={() => this.onClick(id)}
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