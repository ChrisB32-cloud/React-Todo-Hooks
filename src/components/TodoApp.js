import React from 'react';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

// -- Components
// - Todo App
//   - Todo Form
//   - Todo List
//      - Todo Item

const TodoApp = () => {
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
    </Paper>
  );
};

export default TodoApp;
