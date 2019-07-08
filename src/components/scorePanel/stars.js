import React, { Component } from 'react';

class Stars extends Component {
    render() {
        return (
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
        );
    }
}

export default Stars;