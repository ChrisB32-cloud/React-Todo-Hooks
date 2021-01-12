import { useState } from 'react';
export default localOrInitail => {
  const [tasks, setTasks] = useState(localOrInitail);

  return {
    tasks,
    handleTodoPass: passTodo => {
      setTasks([...tasks, passTodo]);
    },
    handleTodoDelete: passedId => {
      setTasks(tasks.filter(t => t.id !== passedId));
    },
    handleCompleted: taskId => {
      const toggleCompleted = tasks.map(t =>
        t.id === taskId ? { ...t, completed: !t.completed } : t
      );
      setTasks(toggleCompleted);
    },
    handleUpdate: passUpdate => {
      const updateTask = tasks.map(t =>
        t.id === passUpdate.id ? { ...t, task: passUpdate.task } : t
      );
      setTasks(updateTask);
    }
  };
};

// const handleTodoPass = passTodo => {
//     setTasks([...tasks, passTodo]);
//   };

//   const handleTodoDelete = passedId => {
//     setTasks(tasks.filter(t => t.id !== passedId));
//   };

//   const handleCompleted = taskId => {
//     const toggleCompleted = tasks.map(t =>
//       t.id === taskId ? { ...t, completed: !t.completed } : t
//     );
//     setTasks(toggleCompleted);
//   };

//   const handleUpdate = passUpdate => {
//     const updateTask = tasks.map(t =>
//       t.id === passUpdate.id ? { ...t, task: passUpdate.task } : t
//     );
//     setTasks(updateTask);
//   };
