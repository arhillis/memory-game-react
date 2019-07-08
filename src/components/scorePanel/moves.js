import React, { Component } from 'react';

class Moves extends Component {
    constructor(props){
        super(props)
        this.onClick = props.onClick.bind(this)
    }
    render() {
        const {moves} = this.props;
        
        return (
            <p class="moves-para" onClick={this.onClick}>
                <span className="moves">{moves}</span> {moves === 1 ? 'Move' : 'Moves'} 
            </p>
        );
    }
}

export default Moves;