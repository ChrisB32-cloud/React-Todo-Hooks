import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const TodoList = ({ tasks }) => {
  return (
    <Paper>
      <List>
        {tasks.map(m => (
          <>
            <ListItem key={m.id}>
              <ListItemText>{m.task}</ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
