import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Deck extends Component {
    constructor(props){
        super(props)
        this.addMove = props.addMove.bind(this)
    }

    render() {
        const {cards} = this.props;
        return (
            <div>
                <button onClick={this.addMove}>Make move</button>
                <button>Stop timer</button>
                <ul className="deck">
                    {cards.map((card, index) => 
                        <li key={index} className="card animated face-up">
                            <FontAwesomeIcon icon={card} />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Deck;