import { Outlet, useOutletContext } from "react-router-dom";
import './playlist.css'

const PlaylistPageContainer = () => {
    const { cats, loggedInStatus, userInfo } = useOutletContext();

    return(
        <Outlet context={{ cats, loggedInStatus, userInfo }}/>
    )
}

export default PlaylistPageContainer;