import React from 'react';
import './ListComponent.css';
import AlertButtonComponent from './AlertButtonComponent.js';
import ResetItemsButtonComponent from './ResetItemsButtonComponent.js';
import AddItemButtonComponent from './AddItemButtonComponent.js';

class ListComponent extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        listArrayItems : ['first item', 'second item', 'third item', 'fourth item'],
      };
      this.handleClickAlert = this.handleClickAlert.bind(this);
      this.handleClickResetItems = this.handleClickResetItems.bind(this);
      this.handleClickAddItem = this.handleClickAddItem.bind(this);
    }
    handleClickAlert(){
      alert(`listArrayItems: ${this.state.listArrayItems}`);
    }
    handleClickResetItems(){
      this.setState(
        {
          listArrayItems : ['first item', 'second item', 'third item', 'fourth item']
        }
      );
    }
    handleClickAddItem(){
      this.setState(
        function(prevState){
          let newArray = prevState.listArrayItems.slice();
          newArray.unshift('NEW ITEM');
          return {
            listArrayItems : newArray
          }
        }
      );
    }
    // I know that using a random value for keys is not ideal (because the key value should be consistent between renders, otherwise React will re-render all list items rather than just adding/deleting list items as necessary), but I can't come up with a better solution
    randomKey(){
        return Math.random();
    }
    render(){
      let listArray = this.state.listArrayItems.map((item, index) => {
        return (
          <li key={this.randomKey()} className='listItem'>{ item }</li>
        );
      });
  
      return(
        <div>
          <ul>
            { listArray }
          </ul>
          <AlertButtonComponent onClick={this.handleClickAlert} />  
          <ResetItemsButtonComponent onClick={this.handleClickResetItems} /> 
          <AddItemButtonComponent onClick={this.handleClickAddItem} />
        </div>
      );
    }
  }

  export default ListComponent;