import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';

// -- Components
// - Todo App
//   - Todo Form
//   - Todo List
//      - Todo Item

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: 'Wash Jeep', completed: false },
    { id: 2, task: 'Buy Grouserys', completed: true },
    { id: 3, task: 'Wash Self', completed: false }
  ];

  const [tasks, setTasks] = useState(initialTodos);

  const handleTodoPass = passTodo => {
    setTasks([...tasks, passTodo]);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" styles={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">Todo with Hookd</Typography>
        </Toolbar>
      </AppBar>
      <TodoForm handleTodoPass={handleTodoPass} />
      <TodoList tasks={tasks} />
    </Paper>
  );
};

export default TodoApp;
