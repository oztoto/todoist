import styles from './index.module.scss';
import Comments from '../../molecules/TaskItem/index';
function TaskList() {
const children = [
	{
		id: 2,
		content: "hogehoge",
		children: [
			{
				id: 21,
				content: "hogehoge",
				children: [
					{
						id: 211,
						content: "hogehoge",
						children: []
					}
				]
			}
		]
	},
	{
		id: 3,
		content: "hogehoge",
		children: [
			{
				id: 31,
				content: "hogehoge",
				children: []
			},
			{
				id: 32,
				content: "hogehoge",
				children: []
			}
		,]
	},
	{
		id: 5,
		content: "hogehoge",
		children: []
	}
];
return (
    <div className={styles.TaskList}>
			<div className={styles.TaskList__header}>
				<h1 className={styles.TaskList__title}>今日</h1>
			</div>
			<div className={styles.TaskList__body}>
				<section className={styles.TaskList__section}>
					<h2 className={styles.TaskList__sectionTitle}>期限切れ</h2>
					{[1,2,3].map(taskInfo => {
						return (
							<div className={styles.TaskItem} key={taskInfo}>
								タスクだよ
							</div>
						)
					})}
					<div className={styles.TaskList__sectionContents}>
						<Comments children={children} />
					</div>
				</section>
			</div>
    </div>
  );
}

export default TaskList;
