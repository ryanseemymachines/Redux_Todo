import { useState } from "react";
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import styles from "./index.module.css";

const Home = () => {
  const [task, setTask] = useState({
    id:"",
    title: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(task);
    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <InputField
        type="text"
        name="title"
        placeholder="Enter task title"
        value={task.title}
        onChange={handleChange}
      />
      <TextArea
        name="desc"
        placeholder="Enter task description"
        value={task.desc}
        onChange={handleChange}
      />
      <Button type="button" label="Add" />
    </form>
  );
};

export default Home;
