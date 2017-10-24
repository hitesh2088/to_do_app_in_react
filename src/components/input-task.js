import React from 'react';

const InputTask = (props)=> {
 let input;
	return (<div>
	<p>Enter your task</p>
	<input type="text" ref={node => {
        input = node;
      }}/>
	<input 
		type="submit" 
		value="Add Task" 
		onClick={() => {
		//console.log(abc);
		props.NewTask(input.value);
		input.value = '';
      }}
       />
	</div>);	
};

export default InputTask;