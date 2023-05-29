import "./MainComponent.css";
import { SearchBar } from "../SearchBar/SearchBar";
import Todo from "../Shared/Todo Logo.png";

export function MainComponent() {
  return (
    <div className="container">
      <div className="appcontainer">
        <div className="header">
          <img alt="Todo logo" src={Todo}></img>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
