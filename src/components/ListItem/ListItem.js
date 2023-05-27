import { useState, useEffect } from "react";
import Delete from "../Shared/delete-icon-png-19.jpg";
import "./ListItem.css";

export function ListItem({ text, remove, index }) {
  const [message, setMessage] = useState(text);
  const [isclick, setIsClicked] = useState();
  const [ischecked, setChecked] = useState(false);
  const handleClickRemove = (index) => {
    remove(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.className == "disabled") {
      console.log("isdissabled");
    } else console.log("still working");
    console.log("thisis working");
    setIsClicked(true);
  };
  console.log(isclick);
  return (
    <li className="newlist">
      <div className="round">
        <input
          onClick={(e) => setChecked(ischecked == false ? true : false)}
          id={index}
          type="checkbox"
          className={`checkbox ${isclick == false ? "disabled" : ""}`}
        ></input>
        <label className="check-icon" for={index}></label>
      </div>

      {isclick !== false ? (
        <div className={`${ischecked == true ? "strike" : ""}`}>{message}</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            className="editinput"
            value={message}
            type="text"
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </form>
      )}
      <button
        onClick={(e) => setIsClicked(false)}
        className={`Btnedit ${isclick == false ? "disabled" : ""}`}
      >
        Edit
      </button>
      <img
        onClick={(e) => handleClickRemove(index)}
        src={Delete}
        className="deleteicon"
      ></img>
    </li>
  );
}
