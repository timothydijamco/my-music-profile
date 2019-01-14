import React, { Component } from 'react';
import './QuestionnaireField.css';

class QuestionnaireField extends Component {
   constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this); // See https://reactjs.org/docs/forms.html
   }

   handleChange(event) {
      this.props.onValueChange(event);
   }

   render() {
      return (
         <div className="QuestionnaireField">
            <legend className="QuestionnaireField-label">{this.props.label}</legend>
            <input className="QuestionnaireField-input" type="text" name={this.props.name} value={this.props.value} onChange={this.handleChange} />
         </div>
      );
   }
}

export default QuestionnaireField;
