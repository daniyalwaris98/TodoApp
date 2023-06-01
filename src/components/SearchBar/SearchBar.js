import "./SearchBar.css";
import { RenderList } from "../List/List";
import { useState, useEffect, useRef } from "react";
import Dropdown from "../Dropdown/Dropdown";

export function SearchBar() {
  const [status, setStatus] = useState("pending");
  const statusChange = useRef("pending");
  const [message, setMessage] = useState("");

  const [errormessage, setErrormessage] = useState("");
  const [tobeEdited, setTobeEdited] = useState({});
  const [list, setList] = useState([]);
  const toggleStatus = (value) => {
    statusChange.current = value;
  };
  const inputReference = useRef(null);
  const formsubmit = (e) => {
    e.preventDefault();
    setStatus(statusChange.current);
  };
  const handleChange = (event) => {
    if (event.target.name === "message") setMessage(event.target.value);
    if (event.target.name === "dropdown") setStatus(event.target.value);
  };

  const Handlesubmit = () => {
    if (message.trim() === "") setErrormessage("Empty Input**");
    else setErrormessage("");

    if (
      message.trim() !== "" &&
      status !== "" &&
      Object.keys(tobeEdited).length <= 0
    ) {
      const updateList = [
        ...list,
        {
          id: Math.round(Math.random() * 999),
          content: message,
          status: status,
        },
      ];
      setList(updateList);
      setMessage("");

      setStatus("pending");
      statusChange.current = "pending";
    } else if (Object.keys(tobeEdited).length >= 1) handleModify();
    else return;
  };
  const handleModify = () => {
    if (message.trim() !== "" && status !== "") {
      const updateList = [
        list.map((x) => {
          if (x.id == tobeEdited[0].id) {
            return { ...x, content: message, status: statusChange.current };
          } else return x;
        }),
      ];
      setList(updateList[0]);
      setMessage("");

      setStatus("");
      setTobeEdited([]);
      statusChange.current = "pending";
    }
  };
  function handleclickchecked(e) {
    if (e.target.checked) {
      const updateList = [
        list.map((x) => {
          if (x.id == e.target.id) {
            return { ...x, status: "Done" };
          } else return x;
        }),
      ];
      setList(updateList[0]);
    } else {
      const updateList = [
        list.map((x) => {
          if (x.id == e.target.id) {
            return { ...x, status: "Pending" };
          } else return x;
        }),
      ];
      setList(updateList[0]);
    }
  }
  useEffect(() => {
    inputReference.current.focus();
  }, [message, list]);

  function inputForm(id) {
    if (id == undefined) {
      return (
        <form onSubmit={formsubmit}>
          <input
            className="searchbar"
            ref={inputReference}
            value={message}
            onChange={handleChange}
            name="message"
            type="text"
            placeholder="What Do You Need To Do?"
          ></input>
          <Dropdown
            status={status}
            ref={statusChange}
            toggleStatus={toggleStatus}
            handleChange={handleChange}
          />
          <button onClick={Handlesubmit} type="submit" className="Btnadd">
            ADD
          </button>
        </form>
      );
    } else {
      const tobeupdated = list.filter((x) => x.id == id);
      setMessage(tobeupdated[0].content);
      statusChange.current = tobeupdated[0].status;
      setStatus(tobeupdated[0].status);
      setTobeEdited(tobeupdated);
      setErrormessage("");
    }
  }
  function ErrMsg() {
    if (errormessage !== "")
      return <div className="error-div">{errormessage}</div>;
    else return;
  }
  return (
    <div className="formcontainer">
      {inputForm()}
      {ErrMsg()}
      <RenderList
        tobeEdited={tobeEdited}
        list={list}
        setList={setList}
        inputForm={inputForm}
        status={status}
        handleclickchecked={handleclickchecked}
      />
    </div>
  );
}
