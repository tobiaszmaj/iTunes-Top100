import React, { Component } from 'react';
import './TopAlbums.scss';
import Album from "../Album/Album";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { fetchAlbums } from "../../actions/albumAction";

class TopAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    componentWillMount() {
        this.props.fetchAlbums();
    }
    //Handling input value on change
    handleChange = (event) => {
        this.setState({ search: event.target.value })
    };

    render() {
        //Adding rank of the album to fetched data
        const albums = this.props.albums.map((element, index) => {
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
        return (
            <main className={'topAlbums'}>
                <form className={'topAlbums__searchBox'}>
                    <input className={'searchBox__input'} type="text" placeholder=" Search top albums"
                        value={this.state.search}
                        onChange={this.handleChange} />
                    <FontAwesomeIcon icon={'search'} className={'searchBox__icon'} />
                </form>
                <ul className={'topAlbums__list'}>
                    {filteredAlbums.map((element, index) => {
                        return <Album key={index} album={element} />
                    })}
                </ul>
            </main>
        )
    }
}

const mapStateToProps = state => ({
    albums: state.albums.items
});

export default connect(mapStateToProps, { fetchAlbums })(TopAlbums); 