import React from 'react';
import ListComponent from './ListComponent.js'

class Body extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return (
        <div>
          <ListComponent />
        </div>
      );
    }
  }

  export default Body;