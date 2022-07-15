import TodoItem from "../TodoItem/TodoItem";

import styles from "./Todo.module.scss";
import { useState } from "react";

export interface TodoType {
  id: string;
  name: string;
  checked: boolean;
}

const sampleTodos: TodoType[] = [
  { id: "0", name: "Hacken", checked: false },
  { id: "1", name: "Kochen", checked: false },
];

const Todo = (): JSX.Element => {
  const [items, setItems] = useState(sampleTodos);
  const toggleCheckStatusOfAnItem = (id: string) => {
    const toggledItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(toggledItems);
  };
  return (
    <div className={styles.todoGrid}>
      {items.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleCheckStatus={toggleCheckStatusOfAnItem}></TodoItem>
      ))}
    </div>
  );
};

export default Todo;
