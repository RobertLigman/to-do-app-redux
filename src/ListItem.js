import "./ListItem.css";
const ListItem = (props) => (
  <li className="task-list__item" onClick={props.click}>
    {props.name}
  </li>
);
export default ListItem;
