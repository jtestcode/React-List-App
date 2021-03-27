import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

/*
const age = 19;

let ageMessage;

if(age >= 21){
  ageMessage = <div>How about a beer?</div>;
}else{
  ageMessage = <div>How about a soda?</div>;
}

const testJSX = (
  <div>
    {ageMessage}
  </div>
);
*/

// I know that using a random value for keys is not ideal (because the key value should be consistent between renders, otherwise React will re-render all list items rather than just adding/deleting list items as necessary), but I can't come up with a better solution
function randomKey(){
  return Math.random();
}

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
  render(){

    let listArray = this.state.listArrayItems.map(function(item, index){
      return (
        <li key={randomKey()}>{ item }</li>
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


class App extends React.Component{
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





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
