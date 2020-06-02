import React, { Component } from 'react';
import './Album.scss';

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
        }
    }

    //Toggling isExpanded state and calculating height of an expanded element
    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight
        });
    };

    render() {
        //Setting the current height of element
        const currentHeight = this.state.isExpanded ? this.state.height : 0;

        return (
            <li className={`panel ${this.state.isExpanded ? 'is-expanded' : ''}`} onClick={(e) => this.handleToggle(e)}>
                <div className="panel-header">
                    <span>{this.props.album.position}. </span>
                    <img src={this.props.album['im:image'][0].label} alt="" />
                    <h2>{this.props.album['im:name'].label}</h2>
                    <h3> by {this.props.album['im:artist'].label}</h3>
                </div>
                <div className="panel-collapse" style={{ height: currentHeight }}>

                    <div className="panel-body" ref="inner">
                        Collapsed things Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, porro!
</div>
                </div>
            </li>
        );
    }
}

export default Album; 