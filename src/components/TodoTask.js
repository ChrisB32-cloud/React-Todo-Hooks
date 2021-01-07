import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const TodoTask = ({ tasks, taskId, handleTodoDelete }) => {
  const handleDelete = () => {
    handleTodoDelete(taskId);
  };
  return (
    <>
      <ListItemText>{tasks}</ListItemText>
      <Button
        onClick={handleDelete}
        style={{ backgroundColor: '#807d75', marginRight: '0.5rem' }}
      >
        x
      </Button>
      <Button style={{ backgroundColor: '#807d75' }}>
        <EditIcon />
      </Button>
    </>
  );
};

export default TodoTask;
