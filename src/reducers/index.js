import { v4 as uuidv4 } from "uuid";

export const todoReducer = (state = [], action) => {
  if (action.type === "ADDTODO") {
    const updatedList = [...state, { task: action.payload, _id: uuidv4() }];
    localStorage.setItem("todos", JSON.stringify(updatedList));
    return updatedList;
  } else if (action.type === "DELETETODO") {
    const updatedList = state.filter((todo) => todo._id !== action.payload);
    localStorage.setItem("todos", JSON.stringify(updatedList));
    return updatedList;
  }
  return state;
};
