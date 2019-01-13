import React, { Component } from 'react';

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
         <fieldset>
            <legend>{this.props.label}</legend>
            <input type="text" name={this.props.name} value={this.props.value} onChange={this.handleChange} />
         </fieldset>
      );
   }
}

export default QuestionnaireField;
