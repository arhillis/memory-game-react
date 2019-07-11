import React, { Component } from 'react';

import Stars from './scorePanel/stars';
import Moves from './scorePanel/moves';
import Timer from './scorePanel/timer';
import RestartButton from './scorePanel/restartButton';

class ScorePanel extends Component {
    render() {
        const {moves, timer, stars, playing} = this.props.state;
        return (
            <div className="score-panel">
                <Stars stars={stars}/>
                <Moves moves={moves}/>
                <Timer timer={timer} 
                        enabled={playing}
                        clockTick={this.props.clockTick}
                />
                <RestartButton restart={this.props.restart}/>                
            </div>
        );
    }
}

export default ScorePanel;