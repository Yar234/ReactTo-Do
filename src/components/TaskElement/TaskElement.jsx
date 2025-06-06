import styles from "./TaskElement.module.css";
import FormButton from "../FormButton/FormButton";
import deleteIcon from "./trash-icon.svg";
import checkIcon from "./check.svg";
import cancelIcon from "./cancel.svg";

export default function TaskElement({
  id,
  title,
  description,
  isDone,
  onDelete,
  onComplete,
}) {
  return (
    <div className={`${styles.element} ${styles.center}`}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.buttons}>
        <FormButton
          className={styles.button}
          content={
            <img
              className={styles.icon}
              src={!isDone ? checkIcon : cancelIcon}
              alt={!isDone ? "check button" : "cancel button"}
            />
          }
          onClick={!isDone ? () => onComplete(id) : () => onComplete(id)}
        />

        <FormButton
          className={styles.button}
          content={
            <img className={styles.icon} src={deleteIcon} alt="trash button" />
          }
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
}
