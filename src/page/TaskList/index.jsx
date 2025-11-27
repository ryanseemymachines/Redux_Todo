import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask } from "../../taskSlice";
import Button from "../../components/Button";
import styles from "./index.module.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.task.taskArray);
  const dispatch = useDispatch();

  return (
    <div className={styles.taskList}>
      <h1>Tasks</h1>

      {tasks.length === 0 && <p>No tasks added yet.</p>}

      {tasks.map((task) => (
        <div className={styles.taskCard} key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.desc}</p>
          <div className={styles.btnWrapper}>
            <Button
              type="button"
              label="Edit Task"
              onClick={() => dispatch(editTask(task))}
            />

            <Button
              type="button"
              label="Delete Task"
              onClick={() => dispatch(deleteTask(task.id))}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
