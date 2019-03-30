import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
	state ={
		
		todos: [
			{
				id: 1,
				title: 'learn React',
				completed: false
			},
			{
				id: 2,
				title: 'learn NodeJS',
				completed: false
			},
			{
				id: 3,
				title: 'learn MongoDB',
				completed: false
			}			
		]		
	}
  render() {
    return (
      	<div className="App">
			<h1>Hello</h1>
			<Todos todos={this.state.todos}></Todos>
    	</div>
	);
  }
}

export default App;
