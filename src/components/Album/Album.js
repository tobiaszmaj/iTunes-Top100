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
        //Setting the current height of the element
        const currentHeight = this.state.isExpanded ? this.state.height : 0;

        return (
            <li className={`panel ${this.state.isExpanded ? 'is-expanded' : ''}`}>
                <div className="panel-header" onClick={(e) => this.handleToggle(e)}>
                    <span>{this.props.album.position}. </span>
                    <img src={this.props.album['im:image'][0].label} alt="" />
                    <h2>{this.props.album['im:name'].label}</h2>
                    <h3> by {this.props.album['im:artist'].label}</h3>
                </div>
                <div className="panel-collapse" style={{ height: currentHeight }}>

                    <div className="panel-body" ref="inner">
                        <div>
                            <span>{this.props.album.category.attributes.term}</span>
                            <span>Category</span>
                        </div>
                        <div>
                            <span>{this.props.album['im:releaseDate'].attributes.label}</span>
                            <span>Release date</span>
                        </div>
                        <div>
                            <span>{this.props.album['im:price'].label}</span>
                            <span>Price</span>
                        </div>
                        <div>
                            <a href={this.props.album.link.attributes.href} target={'_blank'} rel="noopener noreferrer">Check out on iTunes</a>
                        </div>
                        <div>
                            <a href={this.props.album.category.attributes.scheme} target={'_blank'} rel="noopener noreferrer">More artists in this category</a>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default Album; 