import React, { Component } from 'react';

import './App.css';


class App extends Component {

state = {
  yellow:'',
  green:'',
  red:'',

otherState :'some other values'

}

switchNameHandler= (e)=>{
 // console.log(e.target.id)

if (e.target.id==='yellow'){
  this.setState ( {
   
    yellow:'yellow',
    green:'',
    red:'',

  }
  )
  console.log(this.state.yellow);
}
else if (e.target.id==='green'){
  this.setState ( {
    yellow:'',
    green:'green',
    red:'',

  }
  )
  console.log(this.state.green);
}
else if (e.target.id==='red'){
  this.setState ( {
    yellow:'',
    green:'',
    red:'red',

  }
  )
  console.log(this.state.red);
}

} 

  render() {
    return (
      <div className="App">
        <div className="trafic" >
        <div id="yellow" className={"rgb"+this.state.yellow} onClick = {this.switchNameHandler}></div>
        <div id="green" className={"rgb"+this.state.green} onClick = {this.switchNameHandler}></div>
        <div id="red" className={"rgb"+this.state.red} onClick = {this.switchNameHandler}></div>      
        
        </div>


        

      </div>
    );
  }
}

export default App;
