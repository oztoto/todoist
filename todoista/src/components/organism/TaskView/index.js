import styles from "./index.module.scss";
import mockDatas from "./mock";
import TaskItem from "../../molecules/TaskItem/index";

function TaskView() {
  return (
    <div>
      <div className={styles.Section__title}>直近やること</div>
      <ul className={styles.Section__body}>
        {mockDatas.todoTasks.map((task) => {
          if (!task.doneFlag) {
            return <TaskItem task={task} />;
          }
        })}
      </ul>
    </div>
  );
}

export default TaskView;
