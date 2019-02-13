import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const allTodos = [
  {
    task: 'Organize garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Watch YouTube videos about becoming a ninja',
    id: 152881349858,
    completed: false
  },
  {
    task: 'Purchase telescope to find Elon\'s car',
    id: 1522456084358,
    completed: false
  },
  {
    task: 'Bake cookies for the gaybies',
    id: 15124352584358,
    completed: false
  },
  {
    task: 'Bake foccacia for myself',
    id: 23456254625468,
    completed: false
  },
  {
    task: 'Prevent spontaneous combustion',
    id: 23452562562344358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super();
    this.state = {
      value: '',
      todos: allTodos
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  addTodoHandler = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.value,
      id: Date.now(),
      completed: false
    }
    this.setState({
      value: '',
      todos: [...this.state.todos, newTodo]
    });
  }

  toggleDone = e => {
    this.setState({todos: this.state.todos.map(i => {
      if (i.id === e.target.id.toString()) {
        return {
          task: i.task,
          id: i.id,
          completed: !i.completed
        };
      }
      else {
        return i;
      }
    })});
  }

  clearCompleted = e => {
    console.log('Filtering!');
    this.setState({todos: this.state.todos.filter(i => !i.completed)});
  }

  render() {
    return (
      <div id="mainContainer">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm value={this.state.value} handleChange={this.handleChange} addTodo={this.addTodoHandler} clearCompleted={this.clearCompletedHandler} />
        <TodoList todos={this.state.todos} toggleDone={this.toggleDone} />
        <button id="clearCompleted" onClick={this.clearCompleted}>Clear completed</button>
      </div>
    );
  }
}

export default App;
