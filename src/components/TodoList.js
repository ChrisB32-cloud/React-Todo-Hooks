import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

const TodoList = ({ task }) => {
  console.log(task);
  return (
    <Paper>
      <List>
        {task.map(m => (
          <li key={m.id}>
            {m.task} {m.completed}{' '}
          </li>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
