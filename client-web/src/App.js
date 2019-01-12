import React, { Component } from 'react';
import FormField from './FormField'
import logo from './logo.svg';
import './App.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <p>
               Edit <code>src/App.js</code> and save to reload.
               </p>
               <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
               >
               Learn React
               </a>

               <form>
                  <FormField label="Favorite Artist" name="favoriteArtist" />
                  <FormField label="Favorite Album/EP" name="favoriteAlbumEp" />
                  <FormField label="Favorite Track" name="favoriteTrack" />
                  <FormField label="First Show" name="firstShow" />
                  <FormField label="Most Recent Show" name="mostRecentShow" />
                  <FormField label="Favorite Show" name="favoriteShow" />
               </form>
            </header>
         </div>
      );
   }
}

export default App;
