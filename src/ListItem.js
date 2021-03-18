import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import "./ListItem.css";
import { useRef } from "react";
const ListItem = (props) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={true}
      classNames="my-node"
      appear={true}
      timeout={1000}
      nodeRef={nodeRef}>
      <li
        ref={nodeRef}
        className={`task-list__item ${
          props.isAccomplished ? "accomplished" : ""
        }`}>
        {props.name}
        <button className="btn btn-success" onClick={props.clickCheck}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className="btn btn-danger" onClick={props.click}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    </CSSTransition>
  );
};
export default ListItem;
