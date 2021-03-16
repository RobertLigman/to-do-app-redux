import logo from "./logo.svg";
import "./App.css";
import ListItem from "./ListItem";
function App(props) {
  return (
    <div className="App">
      <h1>To Do App with react-redux</h1>
      <div className="searchbar">
        <input />
        <button type="submit">Dodaj</button>
      </div>
      <ul>
        {props.listOfItems.map((item) => (
          <ListItem key={item.name} name={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default App;
