import styles from "./TaskElement.module.css";
import FormButton from "../FormButton/FormButton";
import icon from "./trash-icon.svg";

export default function TaskElement({ id, title, description, onDelete }) {
  return (
    <div className={`${styles.element} ${styles.center}`}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.buttons}>
        <FormButton
          className={styles.deleteButton}
          text={
            <img className={styles.delete_icon} src={icon} alt="trash button" />
          }
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
}
