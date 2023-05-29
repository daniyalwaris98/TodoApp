import "./List.css";
import { useState, useEffect, useRef } from "react";
import ListItem from "../ListItem/ListItem";
import ClearAll from "../Shared/Clear complete.png";

export function RenderList({ text }) {
  const [list, setList] = useState([]);
  const isactive = useRef(true);

  const toggleisactive = (value) => {
    isactive.current = value;
  };

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
    <div>
      <p className="clearText">
        <span
          onClick={() => (isactive.current == true ? setList([]) : "")}
          className="clearText"
        >
          <img src={ClearAll} className="clearImg"></img> <i>Clear Complete</i>
        </span>
      </p>
      <div className="list-container">
        <ul>
          {list.length > 0 &&
            list.map((l, i) => (
              <ListItem
                text={l}
                remove={remove}
                index={i}
                key={i}
                toggleisactive={toggleisactive}
                ref={isactive}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
