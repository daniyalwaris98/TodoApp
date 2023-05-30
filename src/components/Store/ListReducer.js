export function ListReducer(todolist = [{ id: 0, message: "" }], action) {
  if (action.type == "Add") {
    let newTodoList = {
      id: Math.random(),
      message: action.payload.newMessage,
    };
  }
}
