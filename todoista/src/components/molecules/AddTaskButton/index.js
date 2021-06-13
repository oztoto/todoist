import React, { useState } from 'react';
import styles from "./index.module.scss";

function TaskItem(args) {
  console.log(args);
  const [ content, setContent ] = useState('');
  const [tasks, setTasks] = [ args.tasks, args.setTasks ];
  

  console.log(tasks, setTasks);
  return (
    <form onSubmit={addTask(tasks, setTasks, content, setContent)} className={styles.addForm}>
      <div className={styles.addForm__content}>
        <input onChange={handleChange(setContent)} name="contents" value={content} placeholder="例: デザインのミーティング11時 p1 #ミーティング" className={styles.addForm__input}/>
      </div>
      <div className={styles.addForm__submit}>
        <button className={styles.addForm__addButton}>タスクを追加</button>
        <button type="button" className={styles.addForm__cancelButton}>キャンセル</button>
      </div>
    </form>
  );
}

const addTask = (tasks, setTasks, content, setContent) => (e) => {
  e.preventDefault();
  const id = Math.max(...tasks.map(task=>task.id))+1;
  setTasks([...tasks, {
    id, 
    doneFlag: false,
    content,
    layer: 1,
    childIds: []
  }]);
  setContent("");
}

const handleChange = (setter) => (e) => {
  const newValue = e.target.value;
  setter(newValue);
}

export default TaskItem;
