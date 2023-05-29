import { useState, forwardRef, useEffect } from "react";
import Delete from "../Shared/delete-icon-png-19.jpg";
import "./ListItem.css";

function ListItem({ text, remove, index, toggleisactive }, ref) {
  const [message, setMessage] = useState();
  const [isclick, setIsClicked] = useState();
  const [ischecked, setChecked] = useState(false);
  let i = index;

  useEffect(() => {
    setMessage(text);
  }, [text]);
  console.log("child", index);

  const handleSubmit = (e) => {
    e.preventDefault();

    toggleisactive(true);
    setIsClicked(true);
  };
  return (
    <li className="newlist">
      <div className="round">
        <input
          onClick={(e) => setChecked(ischecked == false ? true : false)}
          id={index}
          type="checkbox"
          className={`checkbox ${isclick == false ? "disabled" : ""}`}
          autoFocus
        ></input>
        <label className="check-icon" htmlFor={index}></label>
      </div>

      {isclick !== false ? (
        <div className={`${ischecked == true ? "strike" : ""}`}>{message}</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            className="editinput"
            value={message}
            type="text"
            autoFocus
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </form>
      )}
      <button
        onClick={(e) => {
          if (ref.current == true) {
            setIsClicked(false);
            toggleisactive(false);
          }
        }}
        className={`Btnedit ${isclick == false ? "disabled" : ""}`}
      >
        Edit
      </button>
      <img
        onClick={(e) => {
          remove(i);
        }}
        src={Delete}
        className="deleteicon"
      ></img>
    </li>
  );
}

export default forwardRef(ListItem);
