import React, { Component } from 'react';

import Stars from './scorePanel/stars';
import Moves from './scorePanel/moves';
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
                <Moves moves={moves} onClick={this.onClick}/>
                <Timer timer={timer} />

                <div className="restart">
                    <i className="fa fa-repeat"></i>
                </div>
            </div>
        );
    }
}

export default ScorePanel;