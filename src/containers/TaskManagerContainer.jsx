import React, { Component } from "react";
import TaskList from "../components/TaskList";
import TaskInput from "../components/TaskInput";

class TaskManagerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      input: "",
    };
    this.todoId = 0;
  }
  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  addTodo = (e) => {
    e.preventDefault();
    const newTask = {
      id: this.todoId++,
      title: this.state.input,
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
      input: "",
    });
  };
  toggleComplete = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    }));
  };
  deleteTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };
  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center mb-4">Task Manager</h1>
        <TaskInput
          change={this.handleInputChange}
          onSubmit={this.addTodo}
          input={this.state.input}
        />
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default TaskManagerContainer;
