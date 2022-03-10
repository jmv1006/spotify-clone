import NavBar from "../navBar/navBar";
import Home from "../home/homepage";
import SignInPage from "../signInPage/signIn";
import './app.css'
import { useState } from 'react';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGuestLoggedIn, setGuestLoggedIn] = useState(false);

  const setLoggedIn = () => {
    setIsLoggedIn(true)
  };

  const setLoggedOut = () => {
    setIsLoggedIn(false)
  };

  const logInGuest = () => {
    setGuestLoggedIn(true);
  };

  const logOutGuest = () => {
    setGuestLoggedIn(false);
  };



  return(
    <div id='mainApp'> 
        {
          isGuestLoggedIn || isLoggedIn ?
          <div id="mainApp">
            <NavBar /> 
            <Home logOutGuest={logOutGuest} logOutUser={setLoggedOut} isLoggedIn={isLoggedIn}/>
          </div>
          :
          <SignInPage logInGuest={logInGuest} logUserIn={setLoggedIn} /> 
        }
    </div>
  )
}

export default App;
