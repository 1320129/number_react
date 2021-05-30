import React, {Component} from 'react';
import './App.css';
import AddNumberRoot from './Component/AddNumberRoot';
import DisplayNumberRoot from './Component/DisplayNumberRoot';


class App extends Component{
  state = {
    number:0
  }
  render(){
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot/>
        <DisplayNumberRoot/>  
      </div>
    );
  } 
}
export default App;
