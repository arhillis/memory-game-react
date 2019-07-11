import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div class="modal">
                <div class="modal-content">
                    <h1>Congratulations!</h1>
                    <div class="game-info">
                        <p class="game-info-block">Time:</p>
                        <p class="game-info-block">
                            <span id="mins-modal-span">1</span> minutes,
                            <span class="secs-modal-span">35</span> seconds</p>
                        <p class="game-info-block">Moves:</p>
                        <p class="moves-span game-info-block">10</p>
                        <p class="game-info-block">Rating:</p>
                        <p class="game-info-block">
                            <span class="rating-span">2</span> stars</p>
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