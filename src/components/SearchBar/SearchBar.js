import "./SearchBar.css";
import { RenderList } from "../List/List";
import { useState, useEffect, useRef } from "react";
import { Dropdown } from "../Dropdown/Dropdown";

export function SearchBar() {
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const inputReference = useRef(null);
  const formsubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const Handlesubmit = () => {
    setText(message);
    setMessage("");
    inputReference.current.focus();
  };
  useEffect(() => {
    inputReference.current.focus();
  }, [text, message, list]);

  return (
    <div className="formcontainer">
      <form onSubmit={formsubmit}>
        <input
          className="searchbar"
          ref={inputReference}
          value={message}
          onChange={handleChange}
          name="message"
          type="text"
          placeholder="What Do You Need To Do?"
          autoFocus
        ></input>
        <Dropdown />
        <button onClick={Handlesubmit} type="submit" className="Btnadd">
          ADD
        </button>
      </form>

      <RenderList text={text.trim("")} list={list} setList={setList} />
    </div>
  );
}
