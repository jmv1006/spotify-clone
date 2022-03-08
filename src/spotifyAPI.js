import SpotifyWebApi from 'spotify-web-api-js';
import { addADoc } from './firebase.js';

let Spotify = require('spotify-web-api-js');
let s = new Spotify();

let spotifyApi = new SpotifyWebApi();

//update this
spotifyApi.setAccessToken('BQCJ_KCDwveencLh8BPiFuu7GTwpRMdMubdUQhOYPWwnJjx6EHo7eM2tkClhtMhb_1JNoJkpbCnobEXVnmPof3QNuI2SxF2_fiD-CMuQSdzfvudAktfwJdu9kfoXS4HHkvEF-Po');


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

        const tracks = [];

        playlist.tracks.items.map(trackObj => {

            const mappedArtists = trackObj.track.artists.map((artist) => {
                return artist.name;
            });

            let trackObject = {
                name: trackObj.track.name,
                artists: mappedArtists,
                image: trackObj.track.album.images[0].url,
                duration: trackObj.track.duration_ms,
                albumName: trackObj.track.album.name
            };
            tracks.push(trackObject);
        })

        let tempPlaylist = {
            name: playlist.name,
            description: playlist.description,
            image: playlist.images[0].url,
            id: playlist.id,
            tracks: tracks
        }

        playlists.push(tempPlaylist);

        if(playlists.length === playlistIds.length) {
            //addADoc(`${name}`, playlists);
          //console.log(playlists);
        }
    };
};

const puroLatinoPlaylistIds = ['37i9dQZF1DX2apWzyECwyZ', '37i9dQZF1DWY7IeIP1cdjF', '37i9dQZF1DX10zKzsJ2jva', '37i9dQZF1DXb1fcDuOYLYU', '37i9dQZF1DXbLMw3ry7d7k',  '37i9dQZF1DX8SfyqmSFDwe'];
const focusPlaylistIds =['37i9dQZF1DWWn6teJIIcfG','37i9dQZF1DX3DZBe6wPMXo', '37i9dQZF1DWWTdxbiocWOL', '37i9dQZF1DX5trt9i14X7j', '37i9dQZF1DWZeKCadgRdKQ', '37i9dQZF1DX4sWSpwq3LiO'];
const workoutPlaylistIds = ['37i9dQZF1DX76Wlfdnj7AP', '37i9dQZF1DX5gQonLbZD9s', '37i9dQZF1DX76t638V6CA8', '37i9dQZF1DWSJHnPb1f0X3', '37i9dQZF1DX8CwbNGNKurt', '37i9dQZF1DWYNSm3Z3MxiM'];
const studentPlaylistIds = ['37i9dQZF1DX3csziQj0d5b', '37i9dQZF1DX8OR0U4UGusN', '37i9dQZF1DWSP55jZj2ES3', '37i9dQZF1DWZwtERXCS82H', '37i9dQZF1DWVtHcSjp0LID', '37i9dQZF1DX8NTLI2TtZa6'];
//CAUTION: FUNCTION CALL BELOW SENDS INFO DIRECTLY TO DB!! ensure name parameter matches the name of the playlist in the db
sendPlaylistsToFirebase(puroLatinoPlaylistIds, 'Puro Latino');


