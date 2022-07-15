import { useState } from "react";
import TodoItems from "../TodoItems/TodoItems";
import AddTodo from "../AddTodo/AddTodo";

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

  const addTodo = (name: string) => {
    const updatedItems = [
      ...items,
      { name, checked: false, id: Math.random() + "" },
    ];
    setItems(updatedItems);
  };
  return (
    <>
      <h1>Todo App</h1>
      <TodoItems items={items} toggleCheckStatus={toggleCheckStatusOfAnItem} />
      <AddTodo addTodo={addTodo} />
    </>
  );
};

export default Todo;
