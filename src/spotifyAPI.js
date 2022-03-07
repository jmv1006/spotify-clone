import SpotifyWebApi from 'spotify-web-api-js';
import { addADoc } from './firebase.js';

let Spotify = require('spotify-web-api-js');
let s = new Spotify();

let spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('BQARaVcw8KpRjyV6WAj0RdXzLubdrjxA7NyCCnnHwn6PBG6H--hM13pUE_u_FiNYwQs-W82uqXfwge7o90DiZt-vd1Bguw8qugZwZ08uSgV6JVVSlVscABqQr5OKR1IxB0CHeBI');


function getPlaylist (playlistId) {
    const getPlaylist = spotifyApi.getPlaylist(`${playlistId}`);
    return getPlaylist;
};

function sendPlaylistsToFirebase(ids, name) {
    const playlistIds = ids;
    const playlists = [];

    playlistIds.map((id) => {
        getPlaylist(id).then((playlist) => addToArr(playlist))
    });

    function addToArr(playlist) {
        let tempPlaylist = {
            name: playlist.name,
            description: playlist.description,
            image: playlist.images[0].url
        }

        playlists.push(tempPlaylist);

        if(playlists.length === playlistIds.length) {
            addADoc('Puro Latino', playlists);
        }
    };
};

const chosenPlaylistIds = ['37i9dQZF1DX2apWzyECwyZ', '37i9dQZF1DWY7IeIP1cdjF', '37i9dQZF1DX10zKzsJ2jva', '37i9dQZF1DXb1fcDuOYLYU' ];

//sendPlaylistsToFirebase(chosenPlaylistIds, 'Puro Latino');


