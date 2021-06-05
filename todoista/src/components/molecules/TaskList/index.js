import styles from "./index.module.scss";
import TaskItem from "../../molecules/TaskItem/index";

function TaskList(tasks) {
  return (
    <div>
      <div className={styles.TaskList}>
        <div className={styles.TaskList__header}>
          <h1 className={styles.TaskList__title}>今日</h1>
        </div>
        <div className={styles.TaskList__body}>
          <section className={styles.TaskList__section}>
            <h2 className={styles.TaskList__sectionTitle}>期限切れ</h2>
            {[1, 2, 3].map((taskInfo) => {
              return (
                <div className={styles.TaskItem} key={taskInfo}>
                  タスクだよ
                </div>
              );
            })}
            <div className={styles.TaskList__sectionContents}>
              <TaskItem tasks={tasks} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
