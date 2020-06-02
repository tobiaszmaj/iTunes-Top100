import React, { Component } from 'react';
import './Navigation.scss';
import { NavLink } from "react-router-dom";

class Navigation extends Component {
    render() {
        //Mapping through navigation elements passed in props
        const navButtons = this.props.navItems.map((element, index) => {
            return <NavLink key={index} className={'navButton'} activeStyle={{ color: 'dodgerblue' }} to={element.link}>{element.item}</NavLink>
        });

        return (
            <nav className={'navBar'}>
                <NavLink className={'logo'} to={'/top100'}><span className={'logo-top100'}>Top 100</span><span>albums</span></NavLink>
                {navButtons}
            </nav>
        );
    }
}

export default Navigation; 