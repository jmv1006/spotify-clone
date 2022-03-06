import NavBar from "../navBar/navBar";
import { useEffect } from "react";
import getPlaylist from "../spotifyAPI";
import './app.css'

const App = () => {
  
  useEffect(() => {
    getPlaylist('37i9dQZF1DX2apWzyECwyZ').then((playlist) => console.log(playlist));
  }, []);

  return(
    <div id='mainApp'>
      <NavBar></NavBar>
    </div>
  )
}

export default App;
