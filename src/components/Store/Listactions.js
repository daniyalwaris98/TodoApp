export function Add(obj) {
  return {
    type: "Add",
    payload: obj,
  };
}
export function Remove(id) {
  return {
    type: "Remove",
    id: id,
  };
}
export function RemoveAll() {
  return {
    type: "RemoveAll",
  };
}
export function Modify(id, obj) {
  return {
    type: "Modify",
    id,
    payload: obj,
  };
}
