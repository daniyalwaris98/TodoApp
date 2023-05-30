import { useState } from "react";
import "./Dropdown.css";
import Downicon from "../Shared/dropdown.png";

export function Dropdown() {
  const [open, setOpen] = useState(false);
  const options = ["pending", "Done", "inProgress"];

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="dropdown">
      <span className="dropdown-span">
        <button className="dropdown-btn" onClick={handleOpen}>
          Dropdown
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
              <button>{o}</button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
