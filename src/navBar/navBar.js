import './navbar.css';
import logo from '../assets/images/spotifylogo.png';
import { Link } from 'react-router-dom';


const NavBar = () => {

    return(
        <div id='navBar'>
            <div id='logoContainer'>
                <Link to='/'>
                    <img id='logo' src={logo}></img>
                </Link>
            </div>
            <div className='navContainer'>
                <Link className='navButtonLink' to='/'>
                    <div className='navButton'>Home</div>
                </Link>
                <div className='navButton'>Search</div>
                <div className='navButton'>Your Library</div>
            </div>
            <div className='navContainer'>
                <div className='navButton'>Create Playlist</div>
                <Link className='navButtonLink' to='/likedsongs'>
                    <div className='navButton'>Liked Songs</div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;