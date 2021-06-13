import './index.module.scss';
import TaskList from '../../organism/TaskList/index';
import '../../../styles/reset.scss';
import styles from './index.module.scss';

function App() {
  return (
    <div className="App">
      <div className={styles.App__task}>
        {/* [TODO] TaskListにclass名を割り当てたい */}
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
