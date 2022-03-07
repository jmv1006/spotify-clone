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

//Use this function for every category and set of playlists you want to add
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
            image: playlist.images[0].url,
            id: playlist.id
        }

        playlists.push(tempPlaylist);

        if(playlists.length === playlistIds.length) {
            addADoc(`${name}`, playlists);
        }
    };
};

const puroLatinoPlaylistIds = ['37i9dQZF1DX2apWzyECwyZ', '37i9dQZF1DWY7IeIP1cdjF', '37i9dQZF1DX10zKzsJ2jva', '37i9dQZF1DXb1fcDuOYLYU' ];
const focusPlaylistIds =['37i9dQZF1DWWn6teJIIcfG','37i9dQZF1DX3DZBe6wPMXo', '37i9dQZF1DWWTdxbiocWOL', '37i9dQZF1DX5trt9i14X7j'];

//CAUTION: FUNCTION CALL BELOW SENDS INFO DIRECTLY TO DB!!
//sendPlaylistsToFirebase(focusPlaylistIds, 'Focus');


