import React, { Component } from 'react';

class BlockColumn extends Component {

   render() {
      const inlineBlockColumnStyle = {
         width: parseFloat(this.props.width),
         padding: 0,
         margin: 0,
         float: this.props.side
      };

      return (
         <div style={inlineBlockColumnStyle}>
            {this.props.children}
         </div>
      );
   }

}

export default BlockColumn;
