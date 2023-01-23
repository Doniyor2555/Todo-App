import { Component } from "react";

import "./add-todo.css"

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmut = (e) => {
    e.preventDefault(); 
      this.props.onAdd(this.state.todo);
      this.setState({
        todo: "",
      })
  }

  render() {
    const {todo} = this.state;
    return(
      <>
        <form onSubmit={this.onSubmut}>
          <input className="addTodo" value={todo} name="todo" type="text" placeholder="Add some todo" onChange={this.onValueChange}/>
          <button className="inputBtn">Add todos</button>
        </form>
      </>
    )
  }
}

export default AddTodo;