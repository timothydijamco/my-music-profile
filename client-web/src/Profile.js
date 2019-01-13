import React, { Component } from 'react';
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

   componentDidMount(){
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
         <p>{this.state.favoriteArtist}</p>
      );
   }
}

export default Profile;
