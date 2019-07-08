import React, { Component } from 'react';

import Stars from './scorePanel/stars';
import Timer from './scorePanel/timer';

class ScorePanel extends Component {
    constructor(props){
        super(props)
        this.onClick = props.onClick.bind(this)
    }
    render() {
        const {moves, timer} = this.props;
        return (
            <div className="score-panel">
                <Stars />
                <p class="moves-para" onClick={this.onClick}>
                    <span className="moves">{moves}</span> {moves === 1 ? 'Move' : 'Moves'} 
                </p>
                <Timer timer={timer} />

                <div className="restart">
                    <i className="fa fa-repeat"></i>
                </div>
            </div>
        );
    }
}

export default ScorePanel;