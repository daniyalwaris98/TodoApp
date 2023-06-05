export function ListReducer(state = [], action) {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];
    case "RemoveAll":
      return [];
    case "Remove":
      const filtered = state.filter((o, i) => o.id != action.id);
      return filtered;
    case "Modify":
      console.log("what is ", action.id, action.payload);

      const updateList = state.map((x) => {
        if (x.id === action.id) {
          return {
            id: action.id,
            content: action.payload.content,
            status: action.payload.status,
          };
        } else return x;
      });

      return updateList;

    default:
      return state;
  }
}
