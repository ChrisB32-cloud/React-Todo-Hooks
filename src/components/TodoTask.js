import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';

const TodoTask = ({
  tasks,
  taskId,
  handleTodoDelete,
  taskChecked,
  handleCompleted
}) => {
  const handleDelete = () => {
    handleTodoDelete(taskId);
  };
  const handleCheckClick = () => {
    handleCompleted(taskId, taskChecked);
  };
  return (
    <ListItem>
      <Checkbox
        onClick={handleCheckClick}
        tabIndex={-1}
        checked={taskChecked}
        aria-label="CheckBox"
        color="default"
      />
      <ListItemText>{tasks}</ListItemText>
      <Button
        onClick={handleDelete}
        aria-label="Delete"
        style={{ backgroundColor: '#807d75', marginRight: '0.5rem' }}
      >
        x
      </Button>
      <Button
        aria-label="Edit"
        style={{ backgroundColor: '#807d75', marginRight: '0.5rem' }}
      >
        <EditIcon />
      </Button>
    </ListItem>
  );
};

export default TodoTask;
