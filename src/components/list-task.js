import React from 'react';
import EachTask from './each-task';

const ListTask = (props)=>{ 
	console.log(props.tasks);
	const listItems = props.tasks.map((task) =>
  		<EachTask task= {task} remove = {props.remove} />
	);
	return (<ul>{listItems}</ul>);
};


export default ListTask;