import { TodoType } from "../Todo/Todo";
import styles from "./TodoItem.module.scss";

interface TodoItemProps {
  todo: TodoType;
  toggleCheckStatus: (id: string) => void;
}

const TodoItem = ({ todo, toggleCheckStatus }: TodoItemProps) => {
  return (
    <>
      <div className={todo.checked ? styles.checkedItem : styles.uncheckedItem}>
        {todo.name}
      </div>
      <div>
        <input
          onClick={(e) => {
            toggleCheckStatus(todo.id);
          }}
          type={"checkbox"}
          value={todo.checked ? "checked" : ""}
        />
      </div>
    </>
  );
};

export default TodoItem;
