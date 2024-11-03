import React from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

const TaskList = ({ tasks, toggleComplete, deleteTask }) => (
  <ListGroup>
    {tasks.map((task) => (
      <ListGroupItem
        key={task.id}
        className="d-flex justify-content-between align-items-center"
      >
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.title}
        </span>
        <div className="d-flex">
          <Button
            onClick={() => toggleComplete(task.id)}
            variant={task.completed ? "warning" : "success"}
          >
            {task.completed ? "Undo" : "Done"}
          </Button>
          <Button
            onClick={() => deleteTask(task.id)}
            variant="outline-danger ms-2"
          >
            Delete
          </Button>
        </div>
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default TaskList;
