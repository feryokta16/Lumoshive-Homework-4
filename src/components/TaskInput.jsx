import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const TaskInput = ({ onSubmit, change, input }) => {
  return (
    <form onSubmit={onSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          value={input}
          onChange={change}
          placeholder="Add a new task"
          required
          minLength="3"
          maxLength="50"
        />
        <Button type="submit" variant="primary">
          Add Task
        </Button>
      </InputGroup>
    </form>
  );
};

export default TaskInput;
