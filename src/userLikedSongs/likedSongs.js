import { useEffect, useState } from 'react';
import './likedsongs.css'
import { getLikedTracks, deleteLikedSongFromDB } from '../firebase';
import { useOutletContext } from 'react-router-dom';

const LikedSongs = () => {
    const { cats, loggedInStatus, userInfo } = useOutletContext();

    const [likedSongs, setLikedSongs] = useState([]);
    const [uid, setUid] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        importDataFromFirestore()
    }, []);

    useEffect(() => {
        importDataFromFirestore()
    }, [likedSongs]);

    const importDataFromFirestore = () => {

        if(loggedInStatus) {
            setUserName(userInfo.displayName);

            const userId = userInfo.uid;
            getLikedTracks(userId).then(data => addLikedSongsToState(data.likedSongs))

            function addLikedSongsToState(arr) {
                setLikedSongs(arr);
            }
            setUid(userInfo.uid);

        } else {
            //do nothing
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
            {loggedInStatus ?
               <div className='likedSongsDisplay'> 
                   Here are your liked songs, {userInfo.displayName}.
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