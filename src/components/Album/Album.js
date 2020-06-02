import React, { Component } from 'react';
import './Album.scss';

class Album extends Component {
    render() {

        return (
            <li className={'album'}>
                <span>{this.props.album.position}. </span>
                <img src={this.props.album['im:image'][0].label} alt="" />
                <h2>{this.props.album['im:name'].label}</h2>
                <h3> by {this.props.album['im:artist'].label}</h3>
            </li>
        );
    }
}

export default Album; 