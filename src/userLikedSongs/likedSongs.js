import { useEffect, useState } from 'react';
import './likedsongs.css'
import { getAuth } from 'firebase/auth';

const LikedSongs = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auhtentication = getAuth();

        
        if(auhtentication.currentUser === null) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
        
    }, [])

    return(
        <div id="likedSongsPageContainer">
            {isLoggedIn ?
               <div> Your are logged in </div>
                :
               <div> Not logged in </div>
            }
        </div>
    )
}

export default LikedSongs;