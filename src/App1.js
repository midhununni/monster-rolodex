import './App.css';
import React from 'react';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters : [
        { id:1,
          name:"upavi"
        },
        {id:2,
          name : "ajith"}
      ]
    }
  }
  render(){
    return (
      <div className="App">
        {this.state.monsters.map(monster=><h1 key={monster.id}>{monster.name}</h1>)}
      </div>
    );
  }
}


export default App;
