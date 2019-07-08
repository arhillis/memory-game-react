import React, { Component } from 'react';

import Stars from './scorePanel/stars';

class ScorePanel extends Component {
    constructor(props){
        super(props)

        this.onClick = props.onClick.bind(this)
    }
    render() {
        return (
            <div className="score-panel">
                <Stars />
                <p class="moves-para" onClick={this.onClick}>
                    <span className="moves">{this.props.moves}</span> {this.props.moves === 1 
                                                                            ? 'Move' : 'Moves'} 
                </p>
                <div className="timer">
                    <span id="mins">0</span>:
                    <span id="secs">00</span>
                </div>

                <div className="restart">
                    <i className="fa fa-repeat"></i>
                </div>
            </div>
        );
    }
}

export default ScorePanel;