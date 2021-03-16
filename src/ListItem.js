import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ListItem.css";
const ListItem = (props) => (
  <li
    className={`task-list__item ${props.isAccomplished ? "accomplished" : ""}`}>
    {props.name}
    <button className="btn btn-success" onClick={props.clickCheck}>
      <FontAwesomeIcon icon={faCheck} />
    </button>
    <button className="btn btn-danger" onClick={props.click}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  </li>
);
export default ListItem;
