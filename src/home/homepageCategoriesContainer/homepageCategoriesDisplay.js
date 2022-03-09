import { useOutletContext } from "react-router-dom";
import CategoryDisplay from "../../categoryDisplay/categoryDisplay";
import '../homepage.css';


const HomePageCategoriesContainer = (props) => {
    const [categories, setCategories] = useOutletContext()
    
    const categoriesToDisplay = categories.map((category, index) => 
    <CategoryDisplay key={index} playlists={category.playlists} name={category.name}/>
    );
    

    return(
        <div id='homePageContainer'>
            {categoriesToDisplay}
        </div>
    )
}

export default HomePageCategoriesContainer;