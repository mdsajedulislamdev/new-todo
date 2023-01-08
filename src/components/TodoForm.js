import { useState } from "react";
import style from "./TodoForm.module.css";
import { BsTrashFill } from "react-icons/bs";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    if (!input) {
    } else {
      setItems([...items, input]);
      setInput("");
    }
  };

  // Delete and Set Item
  const Delete = (id) => {
    const updatedItem = items.filter((item, index) => index !== id);
    setItems(updatedItem);
  };

  // delete all Items
  const DeleteAllItems = () => {
    setItems([]);
  };
  return (
    <div className={style.todoApp}>
      <div className={style.AllContents}>
        <h1 className={style.TodoText}>ToDo List</h1>
        <form onSubmit={addItem} className={style.Form}>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a item" />
          <button className={style.AddButton}>Add</button>
        </form>
        <br />
        <div className={style.showItems}>
          {items.map((item, index) => (
            <ul key={index}>
              <li>
                <span>{item}</span>
                {
                  <button className={style.trashButton}>
                    <BsTrashFill onClick={() => Delete(index)} className={style.trashIcon} />
                  </button>
                }
              </li>
            </ul>
          ))}
          <br />
          <button className={style.RemoveAllButton} onClick={DeleteAllItems}>
            Remove All Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
