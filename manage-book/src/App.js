import React,{Component} from 'react';
import './App.css';
import Admin from '../src/components/Admin';
class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Admin/>
     );
  }
}
export default App;
