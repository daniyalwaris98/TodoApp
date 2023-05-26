import "./MainComponent.css";
import { SearchBar } from "../SearchBar/SearchBar";

export function MainComponent() {
  return (
    <div className="container">
      <div className="appcontainer">
        <div className="header">Todo</div>
        <SearchBar />
      </div>
    </div>
  );
}
