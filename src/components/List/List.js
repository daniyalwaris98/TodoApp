import "./List.css";
import { useState, useEffect, useRef } from "react";
import ListItem from "../ListItem/ListItem";
import ClearAll from "../Shared/Clear complete.png";

export function RenderList({
  handleclickchecked,
  tobeEdited,
  list,
  setList,
  inputForm,
  status,
}) {
  const isactive = useRef(true);

  const toggleisactive = (value) => {
    isactive.current = value;
  };
  useEffect(() => {
    if (status == "") {
      isactive.current = true;
    }
  }, [status, tobeEdited]);
  const remove = (idx) => {
    if (isactive.current == true) {
      setList((oldValues) => {
        return oldValues.filter((o, i) => o.id != idx);
      });
    }
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
          {list.length > 0 ? (
            list.map((l, i) => (
              <ListItem
                single={l}
                remove={remove}
                index={l.id}
                key={i}
                toggleisactive={toggleisactive}
                ref={isactive}
                inputForm={inputForm}
                handleclickchecked={handleclickchecked}
              />
            ))
          ) : (
            <div className="emptylisttext">Start building your Todos...</div>
          )}
        </ul>
      </div>
    </div>
  );
}
