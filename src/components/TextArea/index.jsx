import styles from "./index.module.css";

const TextArea = ({ name, placeholder, value, onChange }) => {
  return (
    <textarea
      className={styles.textAreaInput}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
