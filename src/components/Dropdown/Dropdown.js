import { useEffect, useState, forwardRef } from "react";
import "./Dropdown.css";
import Downicon from "../Shared/dropdown.png";

function Dropdown({ status, toggleStatus, handleChange }, ref) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("pending");

  const options = ["pending", "Done", "inProgress"];

  const handleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    // if (ref.current !== "")
    setValue(ref.current);
  }, [ref.current]);
  useEffect(() => {
    if (status == "") {
      setOpen(false);
      setValue("pending");
    }
  }, [status]);

  const statusChange = (e) => {
    handleChange(e);
    setValue(e.target.value);
    toggleStatus(e.target.value);
  };

  return (
    <div className="dropdown" onClick={handleOpen}>
      <span className="dropdown-span">
        <button className="dropdown-btn">
          {value !== "" ? value : "Dropdown"}
        </button>
        <img
          className={`down-icon ${open ? "rotate" : ""}`}
          src={Downicon}
        ></img>
      </span>
      {open ? (
        <ul className="menu">
          {options.map((o, i) => (
            <li key={i} className="menu-item">
              <button value={o} name="dropdown" onClick={statusChange}>
                {o}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
export default forwardRef(Dropdown);
