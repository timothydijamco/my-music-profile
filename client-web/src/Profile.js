import React, { Component } from 'react';
import BlockColumn from './BlockColumn';
import Block from './Block';
import axios from 'axios';

class Profile extends Component {

   constructor(props) {
      super(props);
      this.state = {
         favoriteArtist: "",
         favoriteAlbumEp: "",
         favoriteTrack: "",
         firstShow: "",
         mostRecentShow: "",
         favoriteShow: ""
      };
   }

   componentDidMount() {
      document.body.style = "background: #333333";
      this.getProfile();
   }

   getProfile() {
      axios.get(`/api/profile/${this.props.match.params.code}`, this.state)
         .then(res => {
            this.setState({
               favoriteArtist: res.data.favoriteArtist,
               favoriteAlbumEp: res.data.favoriteAlbumEp,
               favoriteTrack: res.data.favoriteTrack,
               firstShow: res.data.firstShow,
               mostRecentShow: res.data.mostRecentShow,
               favoriteShow: res.data.favoriteShow
            });
         })
         .catch(err => console.log(err));
   }

   render() {
      return (
         <>
            <div style={{width: "800px", margin: "0 auto"}}>
               <BlockColumn width="400" side="left">
                  <Block label="Favorite Artist" width="400" height="400" backgroundColor="#488294">{this.state.favoriteArtist}</Block>
                  <Block label="First Show" width="400" height="150" backgroundColor="#3F428A">{this.state.firstShow}</Block>
                  <Block label="Most Recent Show" width="400" height="150" backgroundColor="#5B50A1">{this.state.mostRecentShow}</Block>
               </BlockColumn>
               <BlockColumn width="400" side="right">
                  <Block label="Favorite Track" width="400" height="200" backgroundColor="#254B66">{this.state.favoriteTrack}</Block>
                  <Block label="Favorite Album/EP" width="400" height="300" backgroundColor="#31517A">{this.state.favoriteAlbumEp}</Block>
                  <Block label="Favorite Show" width="400" height="200" backgroundColor="#612F8A">{this.state.favoriteShow}</Block>
               </BlockColumn>
            </div>
         </>
      );
   }
}

export default Profile;
