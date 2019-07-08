import React, { Component } from 'react';

class ScorePanel extends Component {
    render() {
        return (
            <div className="score-panel">
                <ul className="stars">
                    <li>
                        <i className="fa fa-star gold"></i>
                    </li>
                    <li>
                        <i className="fa fa-star gold"></i>
                    </li>
                    <li>
                        <i className="fa fa-star gold"></i>
                    </li>
                </ul>
                <p class="moves-para">
                    <span className="moves">{this.props.moves}</span> Moves
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