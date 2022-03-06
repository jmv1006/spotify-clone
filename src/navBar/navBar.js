import './navbar.css';
import logo from '../assets/images/spotifylogo.png';


const NavBar = () => {

    return(
        <div id='navBar'>
            <div id='logoContainer'>
                <img id='logo' src={logo}></img>
            </div>
            <div className='navContainer'>
                <div className='navButton'>Home</div>
                <div className='navButton'>Search</div>
                <div className='navButton'>Your Library</div>
            </div>
            <div className='navContainer'>
                <div className='navButton'>Create Playlist</div>
                <div className='navButton'>Liked Songs</div>
                <div className='navButton'>Your Episodes</div>
            </div>
        </div>
    )
}

export default NavBar;