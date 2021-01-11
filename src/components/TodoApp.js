import React, { useState } from 'react';
// import useToggle from '../hooks/useToggle';
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
    storData();
    setTasks([...tasks, passTodo]);
  };

  const handleTodoDelete = passedId => {
    setTasks(tasks.filter(t => t.id !== passedId));
  };

  const handleCompleted = taskId => {
    const toggleCompleted = tasks.map(t =>
      t.id === taskId ? { ...t, completed: !t.completed } : t
    );
    setTasks(toggleCompleted);
  };

  const handleUpdate = passUpdate => {
    const updateTask = tasks.map(t =>
      t.id === passUpdate.id ? { ...t, task: passUpdate.task } : t
    );
    setTasks(updateTask);
    storData();
  };

  const storData = () => {
    localStorage.setItem('allTodos', JSON.stringify(tasks));
  };
  // storData();
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: 'lightSlateGrey'
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" styles={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">Todo with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: '2rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm handleTodoPass={handleTodoPass} />
          <TodoList
            tasks={tasks}
            handleTodoDelete={handleTodoDelete}
            handleCompleted={handleCompleted}
            handleUpdate={handleUpdate}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
