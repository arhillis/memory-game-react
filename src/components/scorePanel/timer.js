import React, { Component } from 'react';

class Timer extends Component {
    render() {
        const {minutes, seconds} = this.props.timer;

        return (
            <div className="timer">
                {minutes}: {seconds < 10 ? `0${seconds}` : seconds}
            </div>
        );
    }
}

export default Timer;