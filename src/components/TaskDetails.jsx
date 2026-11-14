import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function TaskDetails() {

  const { id } = useParams();

  const [itemList, setItemList] = useState([]);

  function fetchTaskList() {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data) => setItemList(data));
  }

  useEffect(() => {
    fetchTaskList();
  }, []);

  // Find task using ID
  const task = itemList.find(
    (item) => String(item.id) === id
  );

  if (itemList.length === 0) {
    return <h2>Loading...</h2>;
  }

  if (!task) {
    return <h2>Task not found!</h2>;
  }

  return (
    <div className="task-details">

      <h2>Task Details</h2>

      <p><strong>Task ID:</strong> {task.id}</p>

      <p><strong>Title:</strong> {task.title || task.name}</p>

      <p><strong>Status:</strong> {task.status}</p>

      <p><strong>Priority:</strong> {task.priority}</p>

      <p><strong>Start Date:</strong> {task.startDate || task.start || "Not set"}</p>

      <p><strong>End Date:</strong> {task.endDate || task.end || "Not set"}</p>

      <p><strong>Progress:</strong> {task.progress ?? 0}%</p>

      <Link to="/tasks">Back to Tasks</Link>

    </div>
  );
}

export default TaskDetails;