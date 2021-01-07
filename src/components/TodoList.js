import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TodoTask from './TodoTask';

const TodoList = ({ tasks, handleTodoDelete, handleCompleted }) => {
  return (
    <Paper>
      <List>
        {tasks.map(m => (
          <>
            <TodoTask
              key={m.id}
              tasks={m.task}
              taskId={m.id}
              taskChecked={m.completed}
              handleTodoDelete={handleTodoDelete}
              handleCompleted={handleCompleted}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
