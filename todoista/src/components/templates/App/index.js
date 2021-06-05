import "./index.module.scss";
import TaskView from "../../organism/TaskView/index";
import "../../../styles/reset.scss";
import "../../../styles/foundation.scss";
import styles from "./index.module.scss";

function App() {
  return (
    <div className="App">
      <div className={styles.App__task}>
        {/* [TODO] TaskViewにclass名を割り当てたい */}
        <TaskView />
      </div>
    </div>
  );
}

export default App;
