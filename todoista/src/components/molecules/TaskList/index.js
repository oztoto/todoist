import styles from "./index.module.scss";
// import TaskItem from "../../molecules/TaskItem/index";
import arrowIcon from "../../../arrow_icon.png";
import arrowDown from "../../../arrow_down.png";

function TaskList(args) {
  const task = args.task;
  return (
    <li
      key={task.id}
      className={`${styles.TaskItem} ${styles["TaskItem" + "--" + task.layer]}`}
    >
      <div className={styles.TaskItem__body}>
        {task.childIds.length !== 0 && (
          <button className={styles.TaskItem__pullDown}>
            <img className={styles.TaskItem__pullDownImage} src={arrowDown} />
          </button>
        )}
        <button className={styles.TaskItem__checkbox}>
          <div className={styles.TaskItem__checkboxCircle}></div>
        </button>
        <div className={styles.TaskItem__content}>{task.content}</div>
        {task.childIds.length !== 0 && (
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
    </li>
  );
}

export default TaskList;
