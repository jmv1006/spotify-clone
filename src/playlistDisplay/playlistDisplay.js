import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const PlaylistDisplay = () => {
    const [categories, setCategories] = useOutletContext();
    const [playlist, setPlaylist] = useState({});
    let params = useParams();


    useEffect(() => {
        categories.map((category) => {
            category.playlists.map((playlist) => {
                if(playlist.id == params.playlistId) {
                    setPlaylist(noPlaylist => playlist)
                };
            });
        });
    }, [categories]);

    useEffect(() => {
        
    }, [playlist]);

    return(
        <div>
            {playlist.name}
            {playlist.description}
        </div>
    )
}

export default PlaylistDisplay;