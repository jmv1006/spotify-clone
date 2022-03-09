import { useOutletContext } from "react-router-dom";
import CategoryDisplay from "../../categoryDisplay/categoryDisplay";
import '../homepage.css';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from "react";

const HomePageCategoriesContainer = (props) => {
    const [categories, setCategories] = useOutletContext();
    const [userName, setUserName] = useState('');
    const [guestLoggedIn, setGuestLoggedIn] = useState(false);
    
    const categoriesToDisplay = categories.map((category, index) => 
    <CategoryDisplay key={index} playlists={category.playlists} name={category.name}/>
    );
    
    useEffect(() => {
        const auhtentication = getAuth();
        if(auhtentication.currentUser == null) {
            setGuestLoggedIn(true);
        } else {
            setUserName(auhtentication.currentUser.displayName);
        }

    })

    return(
        <div id='homePageContainer'>
            {
                guestLoggedIn ? null
                :
                <div id='welcomeMessage'>What's Happening, {userName}.</div>
            }
            {categoriesToDisplay}
        </div>
    )
}

export default HomePageCategoriesContainer;