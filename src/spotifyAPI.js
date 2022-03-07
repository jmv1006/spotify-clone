import SpotifyWebApi from 'spotify-web-api-js';
import { addADoc } from './firebase.js';

let Spotify = require('spotify-web-api-js');
let s = new Spotify();

let spotifyApi = new SpotifyWebApi();

//update this
spotifyApi.setAccessToken('BQCqQoyhrPDSGTsvTkq56pUl4PvF9_jJfCNNpCrjq5XPbgefqXuxny4VuT1yKqJSZYoFL7XZgRlkzXY7RbG4GqjYdNx85fd2yUbFh26PG_ZGkyeUAO9UJFiymEe0DCGiy826co0');


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
const workoutPlaylistIds = ['37i9dQZF1DX76Wlfdnj7AP', '37i9dQZF1DX5gQonLbZD9s', '37i9dQZF1DX76t638V6CA8', '37i9dQZF1DX4eRPd9frC1m'];
const studentPlaylistIds = ['37i9dQZF1DX3csziQj0d5b', '37i9dQZF1DX8OR0U4UGusN', '37i9dQZF1DWSP55jZj2ES3', '37i9dQZF1DWZwtERXCS82H'];

//CAUTION: FUNCTION CALL BELOW SENDS INFO DIRECTLY TO DB!! ensure name parameter matches the name of the playlist in the db
//sendPlaylistsToFirebase(studentPlaylistIds, 'Study Time');


