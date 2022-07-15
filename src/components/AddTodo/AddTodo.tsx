import { ChangeEvent, useState, KeyboardEvent } from "react";

interface AddTodoProps {
  addTodo: (name: string) => void;
}

const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="">
      <input
        className="input"
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default AddTodo;
