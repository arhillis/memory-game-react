import React, { Component } from 'react';

class Deck extends Component {
    constructor(props){
        super(props)
        this.addMove = props.addMove.bind(this)
    }

    render() {
        return (
            <div>
                <button onClick={this.addMove}>Make move</button>
                <button>Stop timer</button>
            </div>
        );
    }
}

export default Deck;