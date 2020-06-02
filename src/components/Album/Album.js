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
                <div className="panel__header" onClick={(e) => this.handleToggle(e)}>
                    <span className={'header__rank'}>{this.props.album.position}</span>
                    <img className={'header__img'} src={this.props.album['im:image'][2].label} alt="" />
                    <div className="header__album">
                        <h2 className={'album__name'}>{this.props.album['im:name'].label}</h2>
                        <h3 className={'album__artist'}>{this.props.album['im:artist'].label}</h3>
                    </div>
                    <FontAwesomeIcon className={'header__arrow'} icon={'angle-down'} />
                </div>
                <div className="panel__collapse" style={{ height: currentHeight }}>
                    <div className="collapse__body" ref="inner">
                        <div className={'body__info'}>
                            <div className={'info__element'}>
                                <span className={'element__data'}>{this.props.album.category.attributes.term}</span>
                                <span className={'element__title'}>Category</span>
                            </div>
                            <div className={'info__element'}>
                                <span className={'element__data'}>{this.props.album['im:releaseDate'].attributes.label}</span>
                                <span className={'element__title'}>Release date</span>
                            </div>
                            <div className={'info__element'}>
                                <span className={'element__data'}>{this.props.album['im:price'].label}</span>
                                <span className={'element__title'}>Price</span>
                            </div>
                        </div>
                        <div className={`body__links ${this.state.isExpanded ? 'is-expanded' : ''}`}>
                            <div className={'links__link'}>
                                <a className={'links__link--a'} href={this.props.album.link.attributes.href} target={'_blank'} rel={'noopener noreferrer'}>Check out on
                                    iTunes</a>
                            </div>
                            <div className={'links__link'}>
                                <a className={'links__link--a'} href={this.props.album.category.attributes.scheme} target={'_blank'} rel={'noopener noreferrer'}>More artists in
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