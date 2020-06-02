import { FETCH_ALBUMS } from "./types";

export const fetchAlbums = () => dispatch => {
    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
        .then(response => response.json())
        .then(albums => dispatch({
            type: FETCH_ALBUMS,
            payload: albums.feed.entry
        }));
};