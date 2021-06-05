import styles from "./index.module.scss";
// import TaskItem from "../../molecules/TaskItem/index";
import arrowIcon from "../../../arrow_icon.png";
import arrowDown from "../../../arrow_down.png";

function TaskList(args) {
  const tasks = args.tasks;
  return (
    <div>
      <ul className={styles.TaskList}>
        {tasks.map((task) => {
          if (!task.doneFlag) {
            return (
              <li key={task.content} className={styles.TaskItem}>
                <div className={styles.TaskItem__body}>
                  <button className={styles.TaskItem__pullDown}>
                    {task.children.length !== 0 && (
                      <img
                        className={styles.TaskItem__pullDownImage}
                        src={arrowDown}
                      />
                    )}
                  </button>
                  <button className={styles.TaskItem__checkbox}>
                    <div className={styles.TaskItem__checkboxCircle}></div>
                  </button>
                  <div className={styles.TaskItem__content}>{task.content}</div>
                  {task.children.length !== 0 && (
                    <div className={styles.TaskItem__childCounter}>
                      <img
                        src={arrowIcon}
                        width="10px"
                        height="10px"
                        className={styles.TaskItem__arrowIcon}
                        alt
                      />
                    </div>
                  )}
                </div>
                <div className={styles.TaskItem__children}>
                  {task.children && <TaskList tasks={task.children} />}
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default TaskList;
