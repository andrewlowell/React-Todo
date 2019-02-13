import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <div className="listItem">
      <input type="checkbox" name={props.item.task} id={props.item.id}  onChange={props.toggleDone} checked={props.item.completed} />
      <label className={props.item.completed ? 'strike' : ''} htmlFor={props.item.task} >{props.item.task}</label>
    </div>
  );
}
 
export default Todo;