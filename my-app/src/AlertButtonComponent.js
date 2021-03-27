import React from 'react';

class AlertButtonComponent extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <button onClick = {this.props.onClick}>
          Show List In Alert
        </button>
      );
    }
  }

  export default AlertButtonComponent;