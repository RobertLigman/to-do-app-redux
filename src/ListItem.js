import "./ListItem.css";
const ListItem = (props) => (
  <li className="task-list__item">
    {props.name}
    <button className="btn btn-danger" onClick={props.click}>
      faBin
    </button>
    <button className="btn btn-success" onClick={props.clickCheck}>
      faCheck
    </button>
  </li>
);
export default ListItem;
