import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Track from "./track/track";
import './playlist.css'
import { getAuth } from 'firebase/auth';

const PlaylistDisplay = () => {
    const [categories, setCategories] = useOutletContext();
    const [playlist, setPlaylist] = useState({});
    const [tracksLoaded, setTracksLoaded] = useState(false);
    const [uid, setUid] = useState('');

    let params = useParams();
    let tracks;


    useEffect(() => {
        const auhtentication = getAuth();
        setUid(auhtentication.currentUser.uid);
    }, [])

    useEffect(() => {
        categories.map((category) => {
            category.playlists.map((playlist) => {
                if(playlist.id == params.playlistId) {
                    setPlaylist(noPlaylist => playlist)
                };
            });
        });
    }, [categories]);

    useEffect(() => {
        if(playlist.id == params.playlistId) {
            setTracksLoaded(true);
        }
    }, [playlist]);

    if(tracksLoaded) {
        tracks = playlist.tracks.map((track, index) =>
            <Track uid={uid} track={track} number={index + 1} key={track.name} />
        );
    };
   
    

    return(
        <div id="playlistPageContainer">
            <div className='playlistHeaderContainer'>
                <div className='playlistImg' style={{
                    backgroundImage: `url(${playlist.image})`
                }}></div>
                <div className="playlistHeaderInfoContainer">
                    <div className="playlistheader">PLAYLIST</div>
                    <div className="playlistName">{playlist.name}</div>
                    <div className="playlistDescription">{playlist.description}</div>
                </div>
            </div>
            <div className="tracksContainer">
                <div className="tracksDisplayHeader">
                    <div className="songAndNumContainer">
                        <div className="trackNumberLabel">#</div>
                        <div className="trackSongLabel">Song</div>
                    </div>
                    <div className="trackAlbumLabel">Album</div>
                </div>
                {tracks}
            </div>
        </div>
    )
}

export default PlaylistDisplay;