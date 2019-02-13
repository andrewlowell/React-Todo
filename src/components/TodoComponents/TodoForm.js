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
    </div>
  );
}

export default TodoForm;