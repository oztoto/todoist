import styles from "./index.module.scss";
import mockDatas from "./mock";

function TaskView() {
  return (
    <div>
      <div className={styles.Section__title}>直近やること</div>
      <TaskList tasks={mockDatas.todoTasks} />
    </div>
  );
}

export default TaskView;
