import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../../taskSlice";
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import styles from "./index.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const editingTask = useSelector((s) => s.task.editingTask);

  const [task, setTask] = useState({ id: "", title: "", desc: "" });

  useEffect(() => {
    if (editingTask) setTask(editingTask);
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask({ ...task, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z0-9][A-Za-z0-9 _-]*$/;
    let valid = true;

    if (!task.title.trim()) {
      newErrors.title = "Title is required";
      valid = false;
    } else if (!nameRegex.test(task.title)) {
      newErrors.title =
        "Title can only contain letters, numbers, spaces, _ or -";
      valid = false;
    }

    if (task.desc && !nameRegex.test(task.desc)) {
      newErrors.desc =
        "Description can only contain letters, numbers, spaces, _ or -";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (editingTask) {
      dispatch(updateTask(task));
    } else {
      dispatch(addTask({ ...task, id: Date.now() }));
    }

    setTask({ id: "", title: "", desc: "" });
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h1>ToDo</h1>

      <InputField
        type="text"
        name="title"
        placeholder="Enter task title"
        value={task.title}
        onChange={handleChange}
      />
      {errors.title && <div className="error-message">{errors.title}</div>}

      <TextArea
        name="desc"
        placeholder="Enter task description"
        value={task.desc}
        onChange={handleChange}
      />
      {errors.desc && <div className="error-message">{errors.desc}</div>}

      <Button type="submit" label={editingTask ? "Update Task" : "Add Task"} />
    </form>
  );
};

export default Home;
