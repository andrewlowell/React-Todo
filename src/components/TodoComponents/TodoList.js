import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div id="todoList">
        {this.props.todos.map(item => <p>{item.task}</p>)}
      </div>
    );
  }
}

export default TodoList;
