import { useState, forwardRef, useEffect } from "react";
import Delete from "../Shared/delete-icon-png-19.jpg";
import "./ListItem.css";

function ListItem(
  { handleclickchecked, single, remove, index, toggleisactive, inputForm },
  ref
) {
  const [message, setMessage] = useState();
  const [isclick, setIsClicked] = useState(true);
  const [ischecked, setChecked] = useState(false);

  useEffect(() => {
    setMessage(single.content);
  }, [single]);
  useEffect(() => {
    if (ref.current == false) {
      setIsClicked(true);
    }
    if (single.status === "Done") setChecked(true);
    else setChecked(false);
  }, [single]);

  const editclick = (e) => {
    if (ref.current == true) {
      setIsClicked(false);
      toggleisactive(false);
      inputForm(index);
    }
  };

  return (
    <li className="newlist">
      <div className="round">
        <input
          onClick={(e) => setChecked(!ischecked)}
          id={index}
          type="checkbox"
          className={`checkbox ${isclick == false ? "disabled" : ""}`}
          autoFocus
          checked={`${ischecked === true ? "checked" : ""}`}
          onChange={handleclickchecked}
        ></input>
        <label className="check-icon" htmlFor={index}></label>
      </div>

      <div className={`${ischecked == true ? "strike" : ""}`}>{message}</div>

      <div className="status">{single.status}</div>
      <button
        key={index}
        name="edit"
        onClick={editclick}
        id={index}
        className={`Btnedit ${isclick == false ? "disabled" : ""}`}
      >
        Edit
      </button>
      <img
        onClick={(e) => {
          remove(single.id);
        }}
        src={Delete}
        className="deleteicon"
      ></img>
    </li>
  );
}

export default forwardRef(ListItem);
