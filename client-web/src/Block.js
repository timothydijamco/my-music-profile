import React, { Component } from 'react';
import './Block.css';

class Block extends Component {

   render() {
      const inlineBlockStyle = {
         width: this.props.width - 32, // Because padding is 16px
         height: this.props.height - 32, // Because padding is 16px
         backgroundColor: this.props.backgroundColor
      };

      return (
         <div className="Block" style={inlineBlockStyle}>
            <p className="Block-label">{this.props.label}</p>
            <p className="Block-content">{this.props.children}</p>
         </div>
      );
   }

}

export default Block;
