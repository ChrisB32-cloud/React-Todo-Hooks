import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TodoTask from './TodoTask';

const TodoList = ({ tasks, handleTodoDelete }) => {
  return (
    <Paper>
      <List>
        {tasks.map(m => (
          <>
            <ListItem key={m.id}>
              {/* <ListItemText>{m.task}</ListItemText> */}
              <TodoTask
                tasks={m.task}
                taskId={m.id}
                handleTodoDelete={handleTodoDelete}
              />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
