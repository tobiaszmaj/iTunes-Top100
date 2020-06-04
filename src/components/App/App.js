import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import TopAlbums from "../TopAlbums/TopAlbums";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import NotFound from "../NotFound/NotFound";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faSearch, faAngleUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import store from '../../store';

library.add(faAngleDown, faSearch, faAngleUp, faBars);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false,
        }
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen
            }
        })
    };

    backdropClickHandler = () => {
        this.setState({
            sideDrawerOpen: false
        })
    };

    render() {
        const navItems = [];
        const comingSoonItems = navItems.map((element, index) => {
            return index >= 1 ? <Route path={element.link} key={index} /> : null
        });

        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

        return (
            <Provider store={store}>
                <BrowserRouter basename="iTunes-Top100">
                    <div style={{ height: '100%' }}>
                        <Navigation navItems={navItems} drawerClickHandler={this.drawerToggleClickHandler} />
                        <SideDrawer navItems={navItems} show={this.state.sideDrawerOpen} />;
                        {backdrop}
                        <Switch>
                            <Redirect exact from="/" to="/top100" />
                            {comingSoonItems}
                            <Route exact path='/' component={TopAlbums} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;