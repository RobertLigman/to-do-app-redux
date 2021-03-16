import { useRef } from "react";
import { connect } from "react-redux";
import "./App.css";
import ListItem from "./ListItem";
function App(props) {
  const taskName = useRef();
  console.log(props.listOfItems);
  return (
    <div className="App">
      <h1>To Do App with react-redux</h1>
      <div className="searchbar">
        <input ref={taskName} />
        <button
          type="submit"
          onClick={() => props.addTask(taskName.current.value)}>
          Dodaj
        </button>
      </div>
      <ul>
        {props.listOfItems.map((item) => (
          <ListItem key={item.name} name={item.name} />
        ))}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { listOfItems: state.listOfItems };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (taskName) => dispatch({ type: "ADD_TASK", taskName }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
