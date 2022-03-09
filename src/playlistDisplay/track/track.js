import { useEffect, useState } from 'react';
import './track.css'
import { addLikedSongToDB, deleteLikedSongFromDB, checkIfTrackIsLiked } from '../../firebase';
import { getAuth } from 'firebase/auth';


const Track = (props) => {

    const [albumName, setAlbumName] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const [likedTracks, setLikedTracks] = useState([]);
    const [guestLoggedIn,setGuestLoggedIn] = useState(false);

    let track = props.track;    

    const mappedArtists = track.artists.map((artist) => {
        if(track.artists.length > 1 && track.artists.indexOf(artist) === track.artists.length - 1) {
            return `${artist}`
        } else if(track.artists.length > 1){
            return `${artist}, `
        } else {
            return `${artist}`
        }
    })

    useEffect(() => {
        if(track.albumName === track.name) {
            setAlbumName(oldName => 'Single')
        } else {
            setAlbumName(oldName => track.albumName)
        };

        //check if track exists in users liked
        const auhtentication = getAuth();
        if(auhtentication.currentUser == null) {
            setGuestLoggedIn(true);
        } else {
            checkIfTrackIsLiked(props.uid).then((data) => addToLikedTracks(data.likedSongs));

            function addToLikedTracks(arr) {
            setLikedTracks(arr);
            };
        }
        

    }, [])

    useEffect(() => {
        //checking if user liked tracks includes track, and if it does, updating it's button to say 'unlike'

       if(likedTracks.some(e => e.name === props.track.name)) {
           setIsLiked(true);
       };

    }, [likedTracks])
    
    const likeTrack = (e) => {
        if(isLiked) {
            setIsLiked(false)
            deleteLikedSongFromDB(props.uid, props.track)

        } else {
            setIsLiked(true)
            //like track
            addLikedSongToDB(props.uid, props.track);
        };
    };


    return (
        <div className="track" key={track.duration}>
            <div className="trackLeftSide">
                <div className="trackNum">{props.number}</div>
                <div className="trackImgContainer">
                    <img className='trackImg' src={track.image}></img>
                </div>
                <div className="titleAndArtistContainer">
                    <div className="songTitle">{track.name}</div>
                    <div className="songArtists">{mappedArtists}</div>
                </div>
                {guestLoggedIn ?
                null:
                <button className='likeBtn' onClick={likeTrack}>{isLiked ? 'Unlike' : 'Like'}</button>
                }
            </div>

            <div className='albumContainer'>
                {albumName}
            </div>
        </div>
    )
}

export default Track;