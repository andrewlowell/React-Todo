import React from 'react';

const TodoForm = props => {
  return (
    <div id="todoForm" class="row">
      <form onSubmit={props.addTodo}>
        <div className="form-group">
          <label>
            Add new todo:
            <input type="text" value={props.value} onChange={props.handleChange} />
          </label>
          <input type="submit" value="Add new todo" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default TodoForm;