import SpotifyWebApi from 'spotify-web-api-js';

let Spotify = require('spotify-web-api-js');
let s = new Spotify();

let spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('BQD9SqEoa2A1i8aZQfYMdH0oqEicQ13VycN788mOulphZQGJp55vxz5TNJCh-SAIve6QREjE8yjSEIsg0l7V4j37j4K80TYAtXtrMGlhcpO0nseqr87McFpOXvb9vsQmfDnnKH4');


function getAlbum () {
    spotifyApi.getPlaylist('37i9dQZF1DX2apWzyECwyZ').then(
        function(data) {
            console.log(data.name)
        }
    );
};

export default getAlbum;

