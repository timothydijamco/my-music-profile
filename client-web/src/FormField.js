import React, { Component } from 'react';

class FormField extends Component {
   constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this); // See https://reactjs.org/docs/forms.html
   }

   handleChange(event) {
      this.setState({value: event.target.value});
   }

   render() {
      return (
         <>
            <h3>{this.props.label}</h3>
            <input type="text" name={this.props.name} value={this.state.value} onChange={this.handleChange} />
         </>
      );
   }
}

export default FormField;
