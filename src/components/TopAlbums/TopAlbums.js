import React, { Component } from 'react';
import './TopAlbums.scss';

class TopAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
            .then(response => response.json())
            .then(response => this.setState({ data: response.feed.entry }));

    }

    render() {
        console.log(this.state.data);
        return (
            <div></div>
        )
    }
}

export default TopAlbums; 