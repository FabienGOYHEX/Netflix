import React, {Component} from 'react';
import './App.css';

import {Home} from '../src/route/Home'
import {Header} from './component'


class App extends Component {
  render(){
     return (
    <div className="App">
      <Header badge={15}/>
      <Home/>
    
    </div>
  );
}
}

export default App;
