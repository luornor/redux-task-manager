import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/actions';
import './AddTask.css';

const AddTask = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask({ id: Date.now(), title: taskTitle, completed: false });
      setTaskTitle('');
    }
  };

  return (
    <div className="add-task-container">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task title"
          className="add-task-input"
        />
        <button type="submit" className="add-task-button">Add Task</button>
      </form>
    </div>
  );
};

export default connect(null, { addTask })(AddTask);
