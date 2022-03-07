import { Outlet, useOutletContext } from "react-router-dom";
import './playlist.css'

const PlaylistPageContainer = () => {
    const [categories, setCategories] = useOutletContext();

    return(
        <div id='playlistPageContainer'>
            <Outlet context={[categories, setCategories]}/>
        </div>
    )
}

export default PlaylistPageContainer;