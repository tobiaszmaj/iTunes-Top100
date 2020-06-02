import React, { Component } from 'react';
import './Album.scss';

class Album extends Component {
    render() {

        return (
            <li className={'album'}>
                <div className="panel-header">
                    <span>{this.props.album.position}. </span>
                    <img src={this.props.album['im:image'][0].label} alt="" />
                    <h2>{this.props.album['im:name'].label}</h2>
                    <h3> by {this.props.album['im:artist'].label}</h3>
                </div>
                <div className="panel-collapse">

                </div>
            </li>
        );
    }
}

export default Album; 