import React, { Component } from 'react';
import './TopAlbums.scss';
import Album from "../Album/Album";

class TopAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            search: '',
        }
    }

    componentDidMount() {
        fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
            .then(response => response.json())
            .then(response => this.setState({ data: response.feed.entry }));

    }

    handleChange = (event) => {
        this.setState({ search: event.target.value })
    };

    render() {
        const albums = this.state.data.map((element, index) => {
            const i = Object.assign({}, element);
            i.position = index + 1;
            return i;
        });
        const filteredAlbums = albums.filter(
            (album) => {
                return album['im:name'].label.toLowerCase().includes(this.state.search.toLocaleLowerCase()) || album['im:artist'].label.toLowerCase().includes(this.state.search.toLocaleLowerCase())
            }
        );
        console.log(this.state.data);
        console.log(albums);
        return (
            <main className={'topAlbums'}>
                <form>
                    <input type="text" placeholder="Search top albums" value={this.state.search}
                        onChange={this.handleChange} />
                </form>
                <ul>
                    {filteredAlbums.map((element, index) => {
                        return <Album key={index} album={element} />
                    })}
                </ul>
            </main>
        )
    }
}

export default TopAlbums; 