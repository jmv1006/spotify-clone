import { useOutletContext } from "react-router-dom";
import CategoryDisplay from "../../categoryDisplay/categoryDisplay";
import '../homepage.css';
import { useEffect, useState } from "react";

const HomePageCategoriesContainer = (props) => {
    const { cats, loggedInStatus, userInfo } = useOutletContext();
    
    const [categories, setCategories] = cats;
    const isUserLoggedIn = loggedInStatus;

    const categoriesToDisplay = categories.map((category, index) => 
    <CategoryDisplay key={index} playlists={category.playlists} name={category.name}/>
    );


    return(
        <div id='homePageContainer'>
            {
                isUserLoggedIn ? <div id='welcomeMessage'>What's Happening, {userInfo.displayName}.</div>
                :
                null
            }
            {categoriesToDisplay}
        </div>
    )
}

export default HomePageCategoriesContainer;