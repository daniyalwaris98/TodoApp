import "./List.css";
import Delete from "../Shared/delete-icon-png-19.jpg";
import { useState, useEffect } from "react";

export function RenderList({ text }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (text != "") {
      setList([...list, text]);
    }
    console.log("list", list);
  }, [text]);

  const remove = (idx) => {
    setList((oldValues) => {
      return oldValues.filter((_, i) => i !== idx);
    });
  };

  return (
    <div className="list-container">
      <ul>
        {list.length > 0 &&
          list.map((l, i) => (
            <li key={i} className="newlist">
              <input type="checkbox"></input>
              <div>{l}</div>
              <button className="Btnedit">Edit</button>

              <img
                onClick={(e) => remove(i)}
                src={Delete}
                className="deleteicon"
              ></img>
            </li>
          ))}
      </ul>
      <p onClick={() => setList([])} className="clearText">
        clear complete
      </p>
    </div>
  );
}
