import './header.css';

const Header = () => {

    return(
        <div id='headerContainer'>
            <div id='topLinksContainer'>
                <div className='topLink'>PREMIUM</div>
                <div className='topLink'>SUPPORT</div>
                <div className='topLink'>DOWNLOAD</div>
            </div>
            <div id='topButtonsContainer'>
                <div id='signUp'>SIGN UP</div>
                <div id='login'>LOG IN</div>
            </div>
        </div>
    )
}

export default Header;