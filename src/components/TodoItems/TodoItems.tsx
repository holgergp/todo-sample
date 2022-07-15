import styles from "../TodoItems/TodoItems.module.scss";
import TodoItem from "../TodoItem/TodoItem";
import { TodoType } from "../Todo/Todo";

interface TodoItemsProps {
  items: TodoType[];
  toggleCheckStatus: (id: string) => void;
}

const TodoItems = ({ items, toggleCheckStatus }: TodoItemsProps) => (
  <div className={styles.todoGrid}>
    {items.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleCheckStatus={toggleCheckStatus}
      ></TodoItem>
    ))}
  </div>
);

export default TodoItems;
