import React, { Component } from 'react';
import './Navigation.scss';
import { NavLink } from "react-router-dom";

class Navigation extends Component {

    scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    render() {
        //Mapping through navigation elements passed in props
        const navButtons = this.props.navItems.map((element, index) => {
            return <NavLink key={index} className={'navBar__btn'} activeStyle={{ color: '#1E90FF' }} to={element.link}>{element.item}</NavLink>
        });

        return (
            <nav className={'navBar'}>
                <NavLink onClick={this.scrollUp} className={'navBar__logo'} to={'/top100'}><span className={'logo__top100'}>Top 100</span><span>albums</span></NavLink>
                {navButtons}
            </nav>
        );
    }
}

export default Navigation; 