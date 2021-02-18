import './App.css';
import React from 'react';
import { CardList } from './components/cardList/cardList.js'
import { Search } from './components/search/search.js'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    }
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }



  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(monsters => this.setState({ monsters }))
  }
  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search placeholder="search monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;
