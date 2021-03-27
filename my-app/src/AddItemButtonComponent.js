import React from 'react';

class AddItemButtonComponent extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <button onClick = {this.props.onClick}>
          Add Item To List
        </button>
      );
    }
  }

  export default AddItemButtonComponent;