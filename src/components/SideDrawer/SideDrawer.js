import React, { Component } from 'react';
import './SideDrawer.scss';
import { NavLink } from "react-router-dom";

class SideDrawer extends Component {

    render() {

        let drawerClasses = 'sideDrawer';
        if (this.props.show) {
            drawerClasses = 'sideDrawer open'
        }
        //Mapping through navigation elements passed in props
        const navButtons = this.props.navItems.map((element, index) => {
            return <NavLink key={index} className={'sideDrawer__items-btn'} activeStyle={{ color: '#1E90FF' }}
                to={element.link}>{element.item}</NavLink>
        });

        return (
            <nav className={drawerClasses}>
                <div className="sideDrawer__items">
                    <NavLink className={'sideDrawer__items-btn'} activeStyle={{ color: '#1E90FF' }}
                        to={'/top100'}>Top 100 Albums</NavLink>
                    {navButtons}
                </div>
            </nav>
        );
    }
}

export default SideDrawer; 