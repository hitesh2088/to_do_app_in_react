/**
 * @file Wrapper component that renders components from src/components.
 */

import React from 'react';
import { HelloWorld, InputTask,ListTask } from 'src/components';
 

import './app.scss';
window.id = 0;
class App extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {tasks:[]};
  }
  abc = (task) =>{
    const eachtask = {text: task, id: window.id++};
    // Update data
    this.state.tasks.push(eachtask);
    // Update state
    this.setState({tasks: this.state.tasks});
  }

  remove = (id)=>{
    console.log(id);
    const remainder = this.state.tasks.filter((eachtask) => {
      if(eachtask.id !== id) return eachtask;
    });
    // Update state with filter
    this.setState({tasks: remainder});
  }

 	render() {
    	return (
			<div>
		        <HelloWorld />
		        <InputTask NewTask= {this.abc}  />
		        <ListTask tasks = {this.state.tasks} remove = {this.remove}/>
		    </div>
    	);
	}
}

export default App;
