import React, { Component } from 'react';
import Interval from 'react-interval';

class Timer extends Component {
    constructor(props){
        super(props)
        this.clockTick = props.clockTick.bind(this)
    }    

    render() {
        const {seconds, minutes} = this.props.timer;
        return (
            <div>
                {minutes < 10 ? `0${minutes}` : minutes}
                :
                {seconds < 10 ? `0${seconds}` : seconds}

                <Interval
                    timeout={1000}
                    callback={this.clockTick}
                    enabled={this.props.enabled}
                />
            </div>
        );
    }
}

export default Timer;