import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'

class App extends Component {
  addTask = (event) =>{
    if (event.which === 13) {
      this.props.add(event.target.value, this.props.id );
      event.target.value = "";
    }
  }

  render() {

    const tasks = this.props.tareas.map( (tarea) =>{
      return <h2 key = {tarea.id}> { tarea.tarea} </h2>
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          { this.props.information }
          <br/>
            <button onClick = { this.props.aumentar } >Aumentar</button>
            <button onClick = { this.props.disminuir } >Disminuir</button>
          <br/>
          <br/>
            <input type="text" onKeyPress = { this.addTask.bind(this) } />
          <br/>
            { tasks }
          <br/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    information : state.numero,
    tareas : state.tareas,
    id : state.id
  }
}

/*const mapDispatchToProps = {
  aumentar : () => { return { 'type' : 'AUM' } },
  disminuir : () => { return { 'type' : 'DIS' } }
}*/

const mapDispatchToProps = ( dispatch ) => {
  return {
    aumentar : () => { dispatch({ type: "AUM"}); },
    disminuir : () => { dispatch({ type: "DIS"}); },
    add : (task, id) => { dispatch({ type: "ADD", task, id }); },
  }
  
} 


export default connect(mapStateToProps, mapDispatchToProps)(App);
