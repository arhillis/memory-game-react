import React, { Component } from 'react';

class RestartButton extends Component {
    constructor(props){
        super(props)
        this.restart = props.restart.bind(this)
    }
    render() {
        return (
            <button className="restart"
                    onClick={this.restart}>
                <i className="fa fa-repeat"></i>
            </button>
        );
    }
}

export default RestartButton;