import SpotifyWebApi from 'spotify-web-api-js';

let Spotify = require('spotify-web-api-js');
let s = new Spotify();

let spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('BQARaVcw8KpRjyV6WAj0RdXzLubdrjxA7NyCCnnHwn6PBG6H--hM13pUE_u_FiNYwQs-W82uqXfwge7o90DiZt-vd1Bguw8qugZwZ08uSgV6JVVSlVscABqQr5OKR1IxB0CHeBI');


function getPlaylist (playlistId) {
    const getPlaylist = spotifyApi.getPlaylist(`${playlistId}`);
    return getPlaylist;
};

export default getPlaylist;

