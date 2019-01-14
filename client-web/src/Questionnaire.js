import React, { Component } from 'react';
import QuestionnaireField from './QuestionnaireField'
import axios from 'axios';
import './Questionnaire.css';

class Questionnaire extends Component {
   constructor(props) {
      super(props);
      this.state = {};

      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.submitQuestionnaire = this.submitQuestionnaire.bind(this);
   }

   handleFieldChange(event) {
      this.setState({ // See https://reactjs.org/docs/forms.html#handling-multiple-inputs
         [event.target.name]: event.target.value
      });
   }

   submitQuestionnaire() {
      axios.post("/api/profile", this.state)
         .then(res => {
            window.location = "/profile/" + res.data.code;
         })
         .catch(err => console.log(err));
   }

   render() {
      return (
         <>
            <div style={{width: "400px", margin: "8px auto"}}>
               <form>
                  <QuestionnaireField label="Favorite Artist" name="favoriteArtist" onValueChange={this.handleFieldChange} />
                  <QuestionnaireField label="Favorite Album/EP" name="favoriteAlbumEp" onValueChange={this.handleFieldChange} />
                  <QuestionnaireField label="Favorite Track" name="favoriteTrack" onValueChange={this.handleFieldChange} />
                  <QuestionnaireField label="First Show" name="firstShow" onValueChange={this.handleFieldChange} />
                  <QuestionnaireField label="Most Recent Show" name="mostRecentShow" onValueChange={this.handleFieldChange} />
                  <QuestionnaireField label="Favorite Show" name="favoriteShow" onValueChange={this.handleFieldChange} />
                  <button className="Questionnaire-button" type="button" onClick={this.submitQuestionnaire}>Create Profile</button>
               </form>
            </div>
         </>
      );
   }
}

export default Questionnaire;
