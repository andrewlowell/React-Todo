import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div id="todoList">
        {this.props.todos.map((item, index) => (<Todo key={index} item={item} toggleDone={this.props.toggleDone} />))}
      </div>
    );
  }
}

export default TodoList;
