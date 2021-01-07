import React from 'react';
import useInputState from '../hooks/useInputState';
import Paper from '@material-ui/core/Paper';
import { v4 as uuidv4 } from 'uuid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const TodoForm = ({ handleTodoPass }) => {
  const [text, setText, resetText] = useInputState('');
  const handleSubmit = e => {
    e.preventDefault();
    handleTodoPass({ id: uuidv4(), task: text, completed: false });
    resetText();
  };
  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField value={text} onChange={setText} />
        <button type="submit">Add Todo</button>
      </form>
    </Paper>
  );
};

export default TodoForm;
