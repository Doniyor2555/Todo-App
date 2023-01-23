import { Component } from "react";

import "./todo-list-item.css"

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
    }
  }

  onDone = () => {
    this.setState(({done}) => ({
      done: !done
    }))
  }

  render() {
    const {todo, onDelete} = this.props;
    const {done} = this.state;
    let classNames = "todo-list ";

    if(done) {
      classNames += " did"
    }

    return(
      <li className={classNames}>
        <span>{todo}</span>
        <div>
          <button onClick={onDelete}>
            <i className="uil uil-trash-alt delete"></i>
          </button>
          <button onClick={this.onDone}>
            <i className="uil uil-check done"></i>
          </button>
        </div>
      </li>
    )
  }
}

export default TodoListItem;