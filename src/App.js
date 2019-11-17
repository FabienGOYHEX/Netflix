import React, {Component} from 'react';
import './App.css';
import Text1 from "./Text1"
import Text2 from "./Text2"


class App extends Component {
  render(){
     return (
    <div className="App">
      <Text1 placeholdr ="champ1"/>
       <Text2 placeholdr ="champ2"/>
    </div>
  );
}
}

export default App;
