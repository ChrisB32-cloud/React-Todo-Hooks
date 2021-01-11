import React from 'react';
import useInputState from '../hooks/useInputState';
import Paper from '@material-ui/core/Paper';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';

const TodoForm = ({ handleTodoPass }) => {
  const [text, setText, resetText] = useInputState('');
  const handleSubmit = e => {
    e.preventDefault();
    handleTodoPass({ id: uuidv4(), task: text, completed: false });
    resetText();
  };
  return (
    <Paper style={{ padding: '0 1rem', margin: '1rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={text}
          onChange={setText}
          margin="normal"
          label="Add Todo"
          fullWidth
        />
        {/* <button type="submit">Add Todo</button> */}
      </form>
    </Paper>
  );
};

export default TodoForm;
