import { useRef } from "react";
import { connect } from "react-redux";
import "./App.css";
import ListItem from "./ListItem";
function App(props) {
  const taskName = useRef();
  console.log(props.listOfItems);
  const addTask = () => {
    const filteredState = props.listOfItems.find(
      (el) => el.name === taskName.current.value
    );
    if (taskName.current.value !== "" && !filteredState)
      props.addTask(taskName.current.value);
    taskName.current.value = "";
  };
  const accomplishTask = (name) => {
    if ("a") props.accomplishTask(name);
  };
  return (
    <div className="App">
      <h1>To Do App with react-redux</h1>
      <div className="searchbar">
        <input ref={taskName} />
        <button type="submit" onClick={addTask}>
          Dodaj
        </button>
      </div>
      <ul className="task-list">
        {props.listOfItems.map((item) => (
          <ListItem
            key={item.name}
            name={item.name}
            isAccomplished={item.accomplished}
            click={() => {
              console.log(item.name);
              props.rmTask(item.name);
            }}
            clickCheck={() => accomplishTask(item.name)}
          />
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
    rmTask: (name) => dispatch({ type: "REMOVE_TASK", deleteElement: name }),
    accomplishTask: (taskName) =>
      dispatch({ type: "ACCOMPLISHED_TASK", taskName }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
