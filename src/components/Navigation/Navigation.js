import React, { Component } from 'react';
import './Navigation.scss';
import { NavLink } from "react-router-dom";

class Navigation extends Component {
    render() {

        const navButtons = this.props.navItems.map((element, index) => {
            return <NavLink key={index} className={'navButton'} to={element.link}>{element.item}</NavLink>
        });

        return (
            <nav className={'navBar'}>
                {navButtons}
            </nav>
        );
    }
}

export default Navigation; 