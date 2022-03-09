import './header.css';
import { signUserOut } from '../firebase';
const Header = (props) => {

    const signOutUser = () => {
        signUserOut();
        props.logOutUser();
    };

    const signUserIn = () => {
        props.logOutGuest()
    };

    return(
        <div id='headerContainer'>
            <div id='topLinksContainer'>
                <div className='topLink'>PREMIUM</div>
                <div className='topLink'>SUPPORT</div>
                <div className='topLink'>DOWNLOAD</div>
            </div>
            {props.isLoggedIn ? 
                <div id='topButtonsContainer'>
                    <div onClick={signOutUser} id='login'>Sign Out</div>
                </div>
            :
                <div id='topButtonsContainer'>
                    <div onClick={signUserIn} id='login'>LOG IN</div>
                </div>
            }
        </div>
    )
}

export default Header;