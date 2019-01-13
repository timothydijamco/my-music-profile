import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
   render() {
      return (
         <p>{this.props.match.params.code}</p>
      );
   }
}

export default Profile;
