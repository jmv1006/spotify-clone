import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './Main App/App';
import Home from './home/homepage';
import HomePageCategoriesContainer from './home/homepageCategoriesContainer/homepageCategoriesDisplay';
import PlaylistPageContainer from './playlistDisplay/playlistPageContainer';
import PlaylistDisplay from './playlistDisplay/playlistDisplay';
import LikedSongs from './userLikedSongs/likedSongs'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<HomePageCategoriesContainer />} />
            <Route path='/playlist' element={<PlaylistPageContainer />}>
                <Route path=':playlistId' element={<PlaylistDisplay />} />
            </Route>
            {/*Route for user saved songs*/}
            <Route path='/likedsongs' element={<LikedSongs /> } />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
