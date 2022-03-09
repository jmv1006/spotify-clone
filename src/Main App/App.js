import NavBar from "../navBar/navBar";
import { useEffect } from "react";
import getPlaylist from "../spotifyAPI";
import Home from "../home/homepage";
import SignInPage from "../signInPage/signIn";
import './app.css'

const App = () => {
  
  useEffect(() => {
    //getPlaylist('37i9dQZF1DX2apWzyECwyZ').then((playlist) => console.log(playlist));
  }, []);

  return(
    <div id='mainApp'>
      {/*<NavBar />
      <Home />*/}
      <SignInPage />
    </div>
  )
}

export default App;
