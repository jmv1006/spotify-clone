import { useEffect } from 'react';
import './likedsongs.css'
import { getAuth } from 'firebase/auth';

const LikedSongs = () => {

    useEffect(() => {
        const auhtentication = getAuth();
        console.log(auhtentication.currentUser);
    }, [])

    return(
        <div id="likedSongsPageContainer">
            User Liked Songs
        </div>
    )
}

export default LikedSongs;