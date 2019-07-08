import React, { Component } from 'react';

import Stars from './scorePanel/stars';

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
                <div className="timer">
                    {timer.minutes}: {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
                </div>

                <div className="restart">
                    <i className="fa fa-repeat"></i>
                </div>
            </div>
        );
    }
}

export default ScorePanel;