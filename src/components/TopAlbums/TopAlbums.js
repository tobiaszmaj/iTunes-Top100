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
    //Fetching data
    componentDidMount() {
        fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
            .then(response => response.json())
            .then(response => this.setState({ data: response.feed.entry }));

    }
    //Handling input value on change
    handleChange = (event) => {
        this.setState({ search: event.target.value })
    };

    render() {
        //Adding position of the album to fetched data
        const albums = this.state.data.map((element, index) => {
            const i = Object.assign({}, element);
            i.position = index + 1;
            return i;
        });
        //Creating a new array based on the searched keywords
        const filteredAlbums = albums.filter(
            (album) => {
                return album['im:name'].label.toLowerCase().includes(this.state.search.toLowerCase()) || album['im:artist'].label.toLowerCase().includes(this.state.search.toLowerCase())
            }
        );
        console.log(this.state.data);
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