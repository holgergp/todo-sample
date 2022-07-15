import TodoItem from "../TodoItem/TodoItem";

import styles from "./Todo.module.scss";

export interface TodoType {
  name: string;
  checked: boolean;
}

const sampleTodos: TodoType[] = [
  { name: "Hacken", checked: false },
  { name: "Kochen", checked: false },
];

const Todo = (): JSX.Element => {
  return (
    <div className={styles.todoGrid}>
      {sampleTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo}></TodoItem>
      ))}
    </div>
  );
};

export default Todo;
