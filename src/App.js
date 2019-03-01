import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

function Parent ({ name }) {
  return (
    <div>
      <h1>Pai</h1>
      <Child name={name}/>
    </div>
  );
}

function Child ({ name }) {
  return (
    <div>
      <h1>Filho</h1>
      <Grandchild name={name}/>
    </div>
  );
}

function Grandchild ({ name }) {
  return (
    <Context.Consumer>
      {(name) => (
        <div>
          <h1>Neto</h1>
          <h3>Nome: {name}</h3>
        </div>
        )}
    </Context.Consumer>
  );
}

const Context = React.createContext();

class App extends Component {
  render() {
    const name = 'Tiago';

    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>*/}
        <Context.Provider value={name}>
          <Parent />
        </Context.Provider>
      </div>
    );
  }
}

export default App;
