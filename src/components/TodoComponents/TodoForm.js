import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    }
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value // possibly e.target.name
    })
  }

  submitItem = e => {
    e.preventDefault()
    this.props.addTask(this.state.task)
  }



  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.state.task}
          name="task"
          onChange={this.handleChanges}
        />
        <button>Add Task</button>
      </form>
    )
  }

}

export default TodoForm;