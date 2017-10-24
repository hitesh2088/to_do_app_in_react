import React from 'react';

 
const EachTask = ({task, remove}) => {

  // Each Todo
  return (
  	<li key={task.id} className="">
  	{task.text}
  	<button onClick={()=>{remove(task.id)}}>X</button>
  	<button onClick={(e)=>{e.target.parentElement.className = 'done'}}>Done</button>
  	</li>
  	);
}
export default EachTask;