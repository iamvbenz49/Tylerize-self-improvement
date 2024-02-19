import React, { useState } from 'react';


const TodoList = () => {
  // State for managing tasks
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (title.trim() !== '') {
      setTasks([...tasks, { title, description, completed: false }]);
      setTitle('');
      setDescription('');
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Function to mark a task as completed or undone
  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <div className="left-side">
        {/* Content for left side, if any */}
      </div>

      <div className="right-side">
        {/* Todo Container */}
        <div className="todo-container">
          <h1>To-Do List</h1>
          <div className="add-task">
            <h3 style={{ color: '#3498db', textAlign: 'center' }}>Add a Task</h3>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              style={{
                backgroundColor: 'red',
                color: '#fff',
                margin: '10px auto',
                display: 'block',
              }}
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </div>

        {/* Task List */}
        <div id="taskList" className="task-list">
          {tasks.map((task, index) => (
            <div key={index} className={`task ${task.completed ? 'completed' : ''}`}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <div className="task-buttons">
                <button className="delete-button" onClick={() => deleteTask(index)}>
                  Delete
                </button>
                <button className="complete-button" onClick={() => completeTask(index)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;