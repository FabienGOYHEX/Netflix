import React, {Component} from 'react';
import './App.css';

import {Header} from './component'


class App extends Component {
  render(){
     return (
    <div className="App">
      <Header badge={15}/>
    
    </div>
  );
}
}

export default App;
