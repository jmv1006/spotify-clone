import { useEffect, useState } from 'react';
import './categorydisplay.css'
import getPlaylist from '../spotifyAPI';
import { Link } from 'react-router-dom';

const CategoryDisplay = (props) => {

    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const playlists = props.playlists;
        
        const fetchPlaylistInfo = playlists.map((playlist) => {
           addToState(playlist);
        })
        

        function addToState(playlist) {
            setPlaylists(oldArr => [...oldArr, playlist])
        };

    }, []);

    const playlistsToDisplay = playlists.map((playlist, index) =>
        <Link to={`/playlist/${playlist.id}`} key={index}>
        <div className='playlistCard' key={index}>
            <div className='playlistImgContainer'>
                <img className='playlistImg' src={playlist.image}></img>
            </div>
            <div className='playlistTitleAndDescContainer'>
                <div className='playlistTitle'>{playlist.name}</div>
                <div className='playlistDesc'>{playlist.description}</div>
            </div>
        </div>
        </Link> 
    );

    return(
        <div className='playlistsDisplayContainer'>
            <div className='categoryTitle'>{props.name}</div>
            <div className='playlistCardsContainer'>
                {playlistsToDisplay}
            </div>
        </div>
    )
}

export default CategoryDisplay;