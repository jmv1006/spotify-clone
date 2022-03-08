import { useEffect, useState } from 'react';
import './track.css'

const Track = (props) => {

    const [albumName, setAlbumName] = useState('');
    let track = props.track;    

    const mappedArtists = track.artists.map((artist) => {
        if(track.artists.length > 1 && track.artists.indexOf(artist) === track.artists.length - 1) {
            return `${artist}`
        } else if(track.artists.length > 1){
            return `${artist}, `
        } else {
            return `${artist}`
        }
    })

    useEffect(() => {
        if(track.albumName === track.name) {
            setAlbumName(oldName => 'Single')
        } else {
            setAlbumName(oldName => track.albumName)
        };

    }, [])
    


    return (
        <div className="track" key={track.duration}>
            <div className="trackLeftSide">
                <div className="trackNum">{props.number}</div>
                <div className="trackImgContainer">
                    <img className='trackImg' src={track.image}></img>
                </div>
                <div className="titleAndArtistContainer">
                    <div className="songTitle">{track.name}</div>
                    <div className="songArtists">{mappedArtists}</div>
                </div>
            </div>

            <div className='albumContainer'>
                {albumName}
            </div>
        </div>
    )
}

export default Track;