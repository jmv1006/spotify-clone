import NavBar from "../navBar/navBar";
import Home from "../home/homepage";
import SignInPage from "../signInPage/signIn";
import './app.css'
import { useEffect, useState } from 'react';
import { signUserOut } from '../firebase';

const App = () => {

  const [userLoginStatus, setUserLoginStatus] = useState(false);
  const [guestLoginStatus, setGuestLoginStatus] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState({});

  const handleUserLogin = () => {
    if(userLoginStatus) {
      setUserLoginStatus(false);
    } else {
      setUserLoginStatus(true);
    }
  };

  const handleGuestLogin = () => {
    if(guestLoginStatus) {
      setGuestLoginStatus(false);
    } else {
      setGuestLoginStatus(true);
    }
  }

  const saveUserInfo = (userInfo) => {
    let newUser = {
      displayName: userInfo.displayName,
      email: userInfo.email,
      uid: userInfo.uid
    };
    setCurrentUserInfo(newUser);
  };

  useEffect(() => {
    signUserOut();
  }, []);


  return(
    <div id='mainApp'> 
        {
          guestLoginStatus || userLoginStatus ?
          <div id="mainApp">
            
            <NavBar /> 
            <Home userInfo={currentUserInfo} isUserLoggedIn={userLoginStatus} handleUserLoginStatus={handleUserLogin} handleGuestLoginStatus={handleGuestLogin}/>
       
          </div>
          :
          <SignInPage saveUserInfo={saveUserInfo} logInGuest={handleGuestLogin} logInUser={handleUserLogin} /> 
        }
    </div>
  )
}

export default App;
