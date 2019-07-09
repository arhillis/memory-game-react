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
                    {cards.map((card) => {
                        const {id, face} = card;
                        return (
                            <li key={id} className="card animated face-up">
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