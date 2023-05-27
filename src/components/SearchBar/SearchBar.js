import "./SearchBar.css";
import { RenderList } from "../List/List";
import { useState } from "react";

export function SearchBar() {
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  const formsubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const Handlesubmit = () => {
    setText(message);
    setMessage("");
  };
  return (
    <div className="formcontainer">
      <form onSubmit={formsubmit}>
        <input
          className="searchbar"
          value={message}
          onChange={handleChange}
          name="message"
          type="text"
          placeholder="What Do You Need To Do?"
        ></input>
        <button onClick={Handlesubmit} type="submit" className="Btnadd">
          ADD
        </button>
      </form>
      <RenderList text={text.trim("")} />
    </div>
  );
}
