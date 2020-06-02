import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import ComingSoon from "../ComingSoon/ComingSoon";
import TopAlbums from "../TopAlbums/TopAlbums";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faSearch, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Provider } from 'react-redux';
import store from '../../store'

library.add(faAngleDown, faSearch, faAngleUp);

class App extends Component {
    render() {
        //Array with navigation elements
        const navItems = [
            { item: 'Top 100 albums', link: '/top100' },
            { item: 'News', link: '/news' },
            { item: 'Photos', link: '/photos' },
            { item: 'Video', link: '/video' },
            { item: 'Contact', link: '/contact' },
        ];
        //Adding route path to ComingSoon element to future tabs
        const comingSoonItems = navItems.map((element, index) => {
            return index >= 1 ? <Route path={element.link} component={ComingSoon} key={element.item} /> : null
        });
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Navigation navItems={navItems} />
                        <Switch>
                            <Redirect exact from="/" to="/top100" />
                            {comingSoonItems}
                            <Route path={'/top100'} component={TopAlbums} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;