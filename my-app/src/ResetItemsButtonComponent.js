import React from 'react';

class ResetItemsButtonComponent extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <button onClick = {this.props.onClick}>
          Reset Items in List
        </button>
      );
    }
  }

  export default ResetItemsButtonComponent;