import "./List.css";
import { useState, useEffect, useRef } from "react";
import ListItem from "../ListItem/ListItem";
import ClearAll from "../Shared/Clear complete.png";
import { RemoveAll } from "../Store/Listactions";

import { useSelector, useDispatch } from "react-redux";

export function RenderList({
  handleclickchecked,
  tobeEdited,
  list,
  setList,
  inputForm,
  status,
}) {
  const isactive = useRef(true);
  const listredux = useSelector((state) => state.List);
  const dispatch = useDispatch();

  const toggleisactive = (value) => {
    isactive.current = value;
  };
  console.log(isactive.current);
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
          onClick={() =>
            isactive.current == true ? dispatch(RemoveAll()) : ""
          }
          className="clearText"
        >
          <img src={ClearAll} className="clearImg"></img> <i>Clear Complete</i>
        </span>
      </p>
      <div className="list-container">
        <ul>
          {listredux.length > 0 ? (
            listredux.map((l, i) => (
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
