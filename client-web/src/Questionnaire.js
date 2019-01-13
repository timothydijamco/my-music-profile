import React, { Component } from 'react';
import QuestionnaireField from './QuestionnaireField'

class Questionnaire extends Component {
   constructor(props) {
      super(props);
      this.state = {};

      this.handleFieldChange = this.handleFieldChange.bind(this);
   }

   handleFieldChange(event) {
      this.setState({ // See https://reactjs.org/docs/forms.html#handling-multiple-inputs
         [event.target.name]: event.target.value
      });
   }

   render() {
      return (
         <form>
            <QuestionnaireField label="Favorite Artist" name="favoriteArtist" onValueChange={this.handleFieldChange} />
            <QuestionnaireField label="Favorite Album/EP" name="favoriteAlbumEp" onValueChange={this.handleFieldChange} />
            <QuestionnaireField label="Favorite Track" name="favoriteTrack" onValueChange={this.handleFieldChange} />
            <QuestionnaireField label="First Show" name="firstShow" onValueChange={this.handleFieldChange} />
            <QuestionnaireField label="Most Recent Show" name="mostRecentShow" onValueChange={this.handleFieldChange} />
            <QuestionnaireField label="Favorite Show" name="favoriteShow" onValueChange={this.handleFieldChange} />
         </form>
      );
   }
}

export default Questionnaire;
