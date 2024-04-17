import React from 'react';
import { connect } from 'react-redux';
import { updateTask, deleteTask, setFilter } from '../actions/actions';
import './TaskList.css';

const TaskList = ({ tasks, updateTask, deleteTask, setFilter }) => {
    const handleTaskStatusChange = (taskId) => {
        const updatedTask = tasks.find((task) => task.id === taskId);
        updatedTask.completed = !updatedTask.completed;
        updateTask(updatedTask);
    };

    const handleTaskDeletion = (taskId) => {
        deleteTask(taskId);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div className="task-list-container">
            <div onChange={handleFilterChange}>
                <label>
                    <input type="radio" name="filter" value="all" defaultChecked /> All
                </label>
                <label>
                    <input type="radio" name="filter" value="completed" /> Completed
                </label>
                <label>
                    <input type="radio" name="filter" value="incomplete" /> Incomplete
                </label>
            </div>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleTaskStatusChange(task.id)}
                        />
                        <span
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                            }}
                        >
                            {task.title}
                        </span>
                        <button onClick={() => handleTaskDeletion(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


const mapStateToProps = (state) => {
    const { tasks, filter } = state;

    let filteredTasks = tasks;
    if (filter === 'completed') {
        filteredTasks = tasks.filter((task) => task.completed);
    } else if (filter === 'incomplete') {
        filteredTasks = tasks.filter((task) => !task.completed);
    }

    return {
        tasks: filteredTasks,
    };
};

export default connect(mapStateToProps, { updateTask, deleteTask, setFilter })(TaskList);
