import React from 'react';

const TodoForm = props => {
  return (
    <div id="todoForm">
      <form onSubmit={props.addTodo}>
        <label>
          Add new todo:
          <input type="text" value={props.value} onChange={props.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button id="clearCompleted" onClick={props.clearCompleted}>Clear completed</button>
    </div>
  );
}

export default TodoForm;