export const addtodo = (task) => {
  return {
    type: "ADDTODO",
    payload: task,
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETETODO",
    payload: id,
  };
};
