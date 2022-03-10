import { useEffect, useState } from 'react';
import './likedsongs.css'
import { getAuth } from 'firebase/auth';
import { getLikedTracks } from '../firebase';
import { deleteLikedSongFromDB } from '../firebase';

const LikedSongs = () => {
    const [likedSongs, setLikedSongs] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [uid, setUid] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        importDataFromFirestore()
    }, []);

    useEffect(() => {
        importDataFromFirestore()
    }, [likedSongs]);

    const importDataFromFirestore = () => {
        const auhtentication = getAuth();
        if(auhtentication.currentUser === null) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);

            setUserName(auhtentication.currentUser.displayName);

            const userId = auhtentication.currentUser.uid;
            getLikedTracks(userId).then(data => addLikedSongsToState(data.likedSongs))

            function addLikedSongsToState(arr) {
                setLikedSongs(arr);
            }
            setUid(userId);
        };
    }


    const unlikeSong = (song) => {
        deleteLikedSongFromDB(uid, song)
        const songIndex = likedSongs.findIndex((track) => track.name === song.name)
        let editedArr = likedSongs;
        editedArr.splice(songIndex, 1)
        setLikedSongs(editedArr);
    };  


    const displayLikedSongs = likedSongs.map((song) => 
        <div className="likedSong" key={song.duration}>
            <div className="trackLeftSide">
                <div className="trackImgContainer">
                    <img className='trackImg' src={song.image}></img>
                </div>
                <div className="titleAndArtistContainer">
                    <div className="songTitle">{song.name}</div>
                </div>
            </div>
            <button className='likeBtn' onClick={() => unlikeSong(song)} >Unlike</button>
        </div>
    );
    

    return(
        <div id="likedSongsPageContainer">
            {isLoggedIn ?
               <div className='likedSongsDisplay'> 
                   Here are your liked songs, {userName}.
                   {likedSongs.length === 0 ? <div>Like Some Songs To See Them Here.</div> : null}
                   <div className='songsContainer'>
                        {displayLikedSongs}
                   </div>
               </div>
               
                :
               <div> Log in to save songs! </div>
            }
        </div>
    )
}

export default LikedSongs;