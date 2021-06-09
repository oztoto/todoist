import styles from "./index.module.scss";
import mockDatas from "./mock";
import TaskItem from "../../molecules/TaskItem/index";
// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';

function TaskView() {
  const [tasks, setTasks] = useState(mockDatas.todoTasks);
  const [content, setContent] = useState('');
  // useEffect(() => {
  //   console.log("---after");
  //   console.log(tasks);
  //   return () => {
  //     console.log("---before");
  //     console.log(tasks);
  //   }
  // }, [tasks]);
  return (
    <div>
      <div className={styles.Section__title}>直近やること</div>
      <ul className={styles.Section__body}>
        {tasks.map((task) => {
          if (!task.doneFlag) {
            return <TaskItem task={task} />;
          }
        })}
      </ul>
      {/* <button onClick={() => setTasks(tasks.filter(task=>task.id!==deleteTargetId))}>Delete ID={deleteTargetId}</button> */}
      <form onSubmit={addTask(tasks, setTasks, content)}>
        <input onChange={handleChange(setContent)} name="contents" value={content} />
        <button>作成</button>
      </form>
      <form onSubmit={deleteTask(tasks, setTasks, content)}>
        <input onChange={handleChange(setContent)} name="contents" value={content} />
        <button>削除</button>
      </form>
      <button onClick={() => setTasks([...tasks, {id: 10, doneFlag: false, content: "タスク10", layer: 1, childIds: [2, 3, 4]}])}>Add task</button>
    </div>
  );
}

const handleChange = (setter) => (e) => {
  const newValue = e.target.value;
  setter(newValue);
}

const addTask = (tasks, setTasks, content) => (e) => {
  e.preventDefault();
  const id = Math.max(...tasks.map(task=>task.id))+1;
  setTasks([...tasks, {
    id, 
    doneFlag: false,
    content,
    layer: 1,
    childIds: []
  }])
}

const deleteTask = (tasks, setTasks, targetId) => (e) => {
  e.preventDefault();
  const newTasks = tasks.filter(task => {
    return task.id !== Number(targetId);
  })
  setTasks(newTasks);
}


export default TaskView;
