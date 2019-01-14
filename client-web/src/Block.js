import React, { Component } from 'react';
import './Block.css';

class Block extends Component {

   render() {
      const inlineBlockStyle = {
         display: "inline-block",
         width: this.props.width - 32,
         height: this.props.height - 32,
         padding: 16,
         margin: 0,
         backgroundColor: this.props.backgroundColor
      };

      return (
         <div className="Block" style={inlineBlockStyle}>
            <h1 className="Block-label">{this.props.label}</h1>
            {this.props.children}
         </div>
      );
   }

}

export default Block;
