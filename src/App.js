import React, {Component} from 'react';
import './App.css';
import Text1 from "./Text1"
import Text2 from "./Text2"


class App extends Component {
  render(){
     return (
    <div className="App">
      <Text1 placeholder ="champ un "/>
       <Text2 placeholder ="champ deux"/>
    </div>
  );
}
}

export default App;
