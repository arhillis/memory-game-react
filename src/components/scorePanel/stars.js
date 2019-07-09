import React, { Component } from 'react';

class Stars extends Component {

    renderStars = () =>{
        let display = []

        for(let i = 0; i < 3; i++){
            display.push(
                <li>
                    <i className={i >= this.props.stars ? "fa fa-star" : "fa fa-star gold"}></i>
                </li>
            )
        }

        return display
    }

    render() {
        return (
            <ul className="stars">
                {this.renderStars()}
            </ul>
        );
    }
}

export default Stars;