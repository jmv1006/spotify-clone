import NavBar from "../navBar/navBar";
import { useEffect } from "react";
import getPlaylist from "../spotifyAPI";
import Home from "../home/homepage";
import './app.css'

const App = () => {
  
  useEffect(() => {
    //getPlaylist('37i9dQZF1DX2apWzyECwyZ').then((playlist) => console.log(playlist));
  }, []);

  return(
    <div id='mainApp'>
      <NavBar />
      <Home />
    </div>
  )
}

export default App;
