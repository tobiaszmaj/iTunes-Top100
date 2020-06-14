import React, { Component } from 'react';
import './Navigation.scss';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoIcon from "./music-album.svg";

class Navigation extends Component {

    scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    render() {
        //Mapping through navigation elements passed in props
        const navButtons = this.props.navItems.map((element, index) => {
            return <NavLink key={index} className={'items__btn'} activeStyle={{ color: '#1E90FF' }} to={element.link}>{element.item}</NavLink>
        });

        return (
            <nav className={'navBar'}>
                <button className={'navBar__hamburger'} onClick={this.props.drawerClickHandler}><FontAwesomeIcon
                    icon={'bars'} /></button>
                <NavLink onClick={this.scrollUp} className={'navBar__logo'} to={'/iTunes-Top100/'}>
                    <span
                        className={'logo__top100'}>
                        <img src={LogoIcon} alt="Logo" />
                    </span>
                    <span>
                        Top100
                            </span>
                </NavLink>
                <div className="navBar__items">
                    {navButtons}
                </div>
            </nav>
        );
    }
}

export default Navigation; 