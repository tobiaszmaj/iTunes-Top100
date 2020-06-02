import React, { Component } from 'react';
import './TopAlbums.scss';
import Album from "../Album/Album";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TopAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            search: '',
            showBtn: false
        }
    }
    //Fetching data
    componentDidMount() {
        fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
            .then(response => response.json())
            .then(response => this.setState({ data: response.feed.entry }));

        window.addEventListener('scroll', this.handleScroll);
    }
    //Handling input value on change
    handleChange = (event) => {
        this.setState({ search: event.target.value })
    };

    scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleScroll = () => {
        if (window.pageYOffset > 200) {
            this.setState({
                showBtn: true
            })
        }
        else {
            this.setState({
                showBtn: false
            })
        }
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
        console.log(this.state.yOffset);
        return (
            <main className={'topAlbums'}>
                {this.state.showBtn ? <button className={'scrollUp'} onClick=
                    {this.scrollUp}><FontAwesomeIcon icon={'angle-up'} />
                </button> : null}
                <form className={'searchBox'}>
                    <input className={'search'} type="text" placeholder=" Search top albums" value={this.state.search}
                        onChange={this.handleChange} />
                    <FontAwesomeIcon icon={'search'} className={'searchIcon'} />
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