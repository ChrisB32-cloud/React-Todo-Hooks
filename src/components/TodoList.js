import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

const TodoList = ({ task }) => {
  console.log(task);
  return (
    <Paper>
      <h1>Todo List</h1>
      <ul>
        {task.map(m => (
          <li key={m.id}>
            {m.task} {m.completed}{' '}
          </li>
        ))}
      </ul>
    </Paper>
  );
};

export default TodoList;
