import { useEffect } from "react";
import getAlbum from "../spotifyAPI";

const App = () => {
  
  useEffect(() => {
    getAlbum();
  }, [])

  return(
    <div>App</div>
  )
}

export default App;
