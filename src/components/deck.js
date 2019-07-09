import React, { Component } from 'react';

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
                            <i className={card}></i>
                            {card}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Deck;