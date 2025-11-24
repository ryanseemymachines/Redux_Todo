import styles from "./index.module.css";

const Button = ({ type, label }) => {
  return (
    <button className={styles.addBtn} type={type}>
      {label}
    </button>
  );
};

export default Button;
