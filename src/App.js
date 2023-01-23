import { Component } from 'react';
import AddTodo from './components/add-todo/add-todo';
import TodoList from './components/todo-list/todo-list';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {todo: "Wash the car", done: false, id: 1},
        {todo: "Wash the dishes", done: false, id: 2},
      ]
    }
    this.maxId = 4
  }

  onDelete = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addTodos = (todo) => {
    const newItem = {
      todo,
      done: false,
      id: this.maxId++,
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  render() {
    return (
      <div className="App">
        <AddTodo onAdd={this.addTodos}/>
        <TodoList data={this.state.data} onDelete={this.onDelete}/>
      </div>
    );
  }
}

export default App;
