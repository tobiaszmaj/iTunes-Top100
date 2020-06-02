import React, { Component } from 'react';
import './Album.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                    <span className={'albumPosition'}>{this.props.album.position}</span>
                    <img className={'albumImg'} src={this.props.album['im:image'][2].label} alt="" />
                    <div className="albumData">
                        <h2 className={'albumName'}>{this.props.album['im:name'].label}</h2>
                        <h3 className={'albumArtist'}>{this.props.album['im:artist'].label}</h3>
                    </div>
                    <FontAwesomeIcon className={'albumArrow'} icon={'angle-down'} />
                </div>
                <div className="panel-collapse" style={{ height: currentHeight }}>
                    <div className="panel-body" ref="inner">
                        <div className={'panel-mainInfo'}>
                            <div className={'panel-mainInfo-element'}>
                                <span>{this.props.album.category.attributes.term}</span>
                                <span>Category</span>
                            </div>
                            <div className={'panel-mainInfo-element'}>
                                <span>{this.props.album['im:releaseDate'].attributes.label}</span>
                                <span>Release date</span>
                            </div>
                            <div className={'panel-mainInfo-element'}>
                                <span>{this.props.album['im:price'].label}</span>
                                <span>Price</span>
                            </div>
                        </div>
                        <div className={`panel-links ${this.state.isExpanded ? 'is-expanded' : ''}`}>
                            <div className={'panel-link'}>
                                <a href={this.props.album.link.attributes.href} target={'_blank'} rel={'noopener noreferrer'}>Check out on
                                    iTunes</a>
                            </div>
                            <div className={'panel-link'}>
                                <a href={this.props.album.category.attributes.scheme} target={'_blank'} rel={'noopener noreferrer'}>More artists in
                                this
                                    category</a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default Album; 