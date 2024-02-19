// src/components/WorkoutPlanner.js
import React, { useState } from 'react';
import "../styles/workout.css";

const WorkoutPlanner = () => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskQuantity, setTaskQuantity] = useState('');
  
    const addTask = () => {
      if (taskName && taskQuantity) {
        setTasks([...tasks, { name: taskName, quantity: taskQuantity, complete: false }]);
        setTaskName('');
        setTaskQuantity('');
      }
    };
  
    const toggleComplete = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].complete = !updatedTasks[index].complete;
      setTasks(updatedTasks);
    };
  
    const removeTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    };
  
  return (
    <div className="workout-planner container-box">
      <h1>Workout Planner</h1>
      <div className="input-container">
        <div className="inp">
          <p>Enter the Workout:</p>
          <input
            className="input-field"
            type="text"
            placeholder="Enter task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="inp">
          <p>Enter the Quantity:</p>
          <input
            className="input-field"
            type="text"
            placeholder="Enter quantity"
            value={taskQuantity}
            onChange={(e) => setTaskQuantity(e.target.value)}
          />
        </div>
        <button className="icon-button" onClick={addTask}>
          <i className="fas fa-plus"> Add</i>
        </button>
      </div>
      <div className="task-list">
        <h2>Task List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.complete ? 'completed-task' : ''}>
              {task.name} - {task.quantity}
              <button className="icon-button" onClick={() => toggleComplete(index)}>
                {task.complete ? <i className="fas fa-times"></i> : <i className="fas fa-check"></i>}
              </button>
              <button className="icon-button" onClick={() => removeTask(index)}>
                <i className="fas fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutPlanner;
