import { Link } from "react-router-dom";

import ToDoBadge from "../ToDoBadge/ToDoBadge";
import ToDoProgress from "../ToDoProgress/ToDoProgress";
function ToDoRow({ task }) {

  return (
    <tr>

      <td>{task.title || task.name || "No title"}</td>

      <td>
        <ToDoBadge badgeType={task.status} />
      </td>

      <td>
        <ToDoBadge badgeType={task.priority} />
      </td>

      <td>{task.startDate || task.start || "No date"}</td>

      <td>{task.endDate || task.end || "No date"}</td>

      <td>
        <ToDoProgress percentage={Number(task.progress) || 0} />
      </td>

      <td>
        <Link to={`/tasks/${task.id}`}>
          View Details
        </Link>
      </td>

    </tr>
  );
}

export default ToDoRow;