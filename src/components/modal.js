import React, { Component } from 'react';

class Modal extends Component {
    render() {
        const {moves, stars, time} = this.props;
        const {minutes, seconds} = time;

        return (
            <div className="modal">
                <div className="modal-content">
                    <h1>Congratulations!</h1>
                    <div class="game-info">
                        <p class="game-info-block">Time:</p>
                        <p class="game-info-block">
                            {minutes} minutes, {seconds} seconds
                        </p>
                        <p class="game-info-block">Moves:</p>
                        <p class="moves-span game-info-block">{moves}</p>
                        <p class="game-info-block">Rating:</p>
                        <p class="game-info-block">
                            {stars} stars</p>
                    </div>
                    <button class="close">Close</button>
                    <div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;