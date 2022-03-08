import { useEffect, useState } from 'react';
import './footer.css'

const Footer = () => {

    const sendToGithub = () => {
        window.open('https://github.com/jmv1006')
    }

    return(
        <div id="footerContainer">
            <div className='infoAndLinksContainer'>
                <div id='footerLinksContainer'>
                    <div className='linksCategoryContainer'>
                        <div className='linksTitle'>COMPANY</div>
                        <div className='linksContainer'>
                            <div className='footerLink'>About</div>
                            <div className='footerLink'>Jobs</div>
                            <div className='footerLink'>For the Record</div>
                        </div>
                    </div>
                    <div className='linksCategoryContainer'>
                        <div className='linksTitle'>COMMUNITIES</div>
                        <div className='linksContainer'>
                            <div className='footerLink'>For Artists</div>
                            <div className='footerLink'>Developers</div>
                            <div className='footerLink'>Advertising</div>
                            <div className='footerLink'>Investors</div>
                            <div className='footerLink'>Vendors</div>
                        </div>
                    </div>
                    <div className='linksCategoryContainer'>
                        <div className='linksTitle'>USEFUL LINKS</div>
                        <div className='linksContainer'>
                            <div className='footerLink'>Support</div>
                            <div className='footerLink'>Free Mobile App</div>
                        </div>
                    </div>
                </div>
                <div id='footerSocialsLinks'>
                    <div className='socialCircle'>I</div>
                    <div className='socialCircle'>F</div>
                    <div className='socialCircle'>T</div>
                </div>
            </div>
            <div className='myInfo'>
                <div className='myName'>Designed by Jonathan Andrade Valenzuela</div>
                <div className='gitLogo'>
                    <img id='gitImg' onClick={sendToGithub} src='https://img.icons8.com/ios-glyphs/30/ffffff/github.png'/>
                </div>
            </div>
        </div>
    )
}

export default Footer;