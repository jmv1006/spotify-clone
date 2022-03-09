import NavBar from "../navBar/navBar";
import Home from "../home/homepage";
import SignInPage from "../signInPage/signIn";
import './app.css'
import { useState } from 'react';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLoggedIn = () => {
    setIsLoggedIn(true)
  };

  return(
    <div id='mainApp'> 
          { isLoggedIn ? 
          <div id="mainApp">
            <NavBar /> 
            <Home />
          </div>
          :
          
          <SignInPage  logUserIn={setLoggedIn} /> 
        } 
          
     {/*} <SignInPage  /> */} 
    </div>
  )
}

export default App;
