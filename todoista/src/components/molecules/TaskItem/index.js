import styles from "./index.module.scss";
// import TaskItem from "../../molecules/TaskItem/index";
import arrowIcon from "../../../arrow_icon.png";
import arrowDown from "../../../arrow_down.png";

function TaskItem(args) {
  const task = args.task;
  return (
    <li
      key={task.id}
      className={`${styles.TaskItem} ${
        styles["TaskItem--" + task.layer]
      } ${styles["TaskItem--hidde"]}`}
    >
      {/* 上記のhiddenは敢えてTypoすることでhiddenしないようにしている */}
      <div className={styles.TaskItem__body}>
        {task.childIds.length !== 0 && (
          <button className={styles.TaskItem__pullDown}>
            <img
              className={`${styles.TaskItem__pullDownImage} ${styles["TaskItem__pullDownImage--active"]}`}
              src={arrowDown}
            />
          </button>
        )}
        <button className={styles.TaskItem__checkbox}>
          <div className={styles.TaskItem__checkboxCircle}></div>
        </button>
        <div className={styles.TaskItem__content}>
          <div className={styles.TaskItem__contentText}>{task.content}</div>
          {task.childIds.length !== 0 && (
            <div className={styles.TaskItem__childInfos}>
              <img
                src={arrowIcon}
                width="10px"
                height="10px"
                className={styles.TaskItem__arrowIcon}
                alt=""
              />
              <span className={styles.TaskItem__childCounter}>
                0/{task.childIds.length}
              </span>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
