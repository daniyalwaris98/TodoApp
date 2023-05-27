import "./List.css";
import { useState, useEffect } from "react";
import { ListItem } from "../ListItem/ListItem";

export function RenderList({ text }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    if (text != "") {
      setList([...list, text]);
    }
  }, [text]);

  const remove = (idx) => {
    setList((oldValues) => {
      return oldValues.filter((_, i) => i !== idx);
    });
  };

  return (
    <div className="list-container">
      <ul>
        {/* {list.length < 3 &&
          list.map((l, i) => (
            <ListItem text={l} remove={remove} index={i} key={i} />
          ))} */}
        {list.length > 0 &&
          list.map((l, i) => (
            <ListItem text={l} remove={remove} index={i} key={i} />
          ))}
      </ul>
      <p onClick={() => setList([])} className="clearText">
        clear complete
      </p>
    </div>
  );
}
