import { useSelector, useDispatch } from "react-redux";
import { addtodo, deleteTodo } from "./actions";
import React, { useState } from "react";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [todo, Settodo] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      dispatch(addtodo(todo));
    } else {
      setMessage("Todo cannot be empty");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
    Settodo("");
  };
  return (
    <>
      {message && (
        <div className="msg">
          <p>{message}</p>
          <button onClick={() => setMessage("")}>X</button>
        </div>
      )}
      <div className="ctn">
        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            onChange={(e) => Settodo(e.target.value)}
            value={todo}
          />
          <button type="submit">Add todo</button>
        </form>
        {state.length ? (
          <div className="todo-ctn">
            <ol>
              {state.map((todo) => {
                return (
                  <li key={todo._id} className="todo">
                    <p>{todo.task}</p>
                    <button onClick={() => dispatch(deleteTodo(todo._id))}>
                      Done
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        ) : (
          <div className="msg-box">
            <h1>Woohoo, no work due!</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
