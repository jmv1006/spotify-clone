import { Outlet, useOutletContext } from "react-router-dom";
import './playlist.css'

const PlaylistPageContainer = () => {
    const [categories, setCategories] = useOutletContext();

    return(
        <Outlet context={[categories, setCategories]}/>
    )
}

export default PlaylistPageContainer;