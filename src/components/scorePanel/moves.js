import React, { Component } from 'react';

class Moves extends Component {
    render() {
        const {moves} = this.props;
        
        return (
            <p className="moves-para">
                <span className="moves">{moves}</span> {moves === 1 ? 'Move' : 'Moves'} 
            </p>
        );
    }
}

export default Moves;