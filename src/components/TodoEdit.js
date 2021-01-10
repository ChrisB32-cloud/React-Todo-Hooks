import React from 'react';
import useInputState from '../hooks/useInputState';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TodoEdit = ({ taskPass, id, handleUpdate, closeUpdateForm }) => {
  const [text, setText, resetText] = useInputState(taskPass);
  const handleSubmit = e => {
    e.preventDefault();
    handleUpdate({ id: id, task: text, completed: false });
    closeUpdateForm(false);
    resetText();
  };
  //   console.log(text);
  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField
          value={text}
          onChange={setText}
          margin="normal"
          label="AddTodo"
          fullWidth
        />
        {/* <Button style={{ backgroundColor: '#807d75' }} type="submit">
          Update
        </Button> */}
        {/* <button type="submit">Update</button> */}
      </form>
    </Paper>
  );
};

export default TodoEdit;
