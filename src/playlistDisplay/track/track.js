import './track.css'

const Track = (props) => {

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
        </div>
    )
}

export default Track;