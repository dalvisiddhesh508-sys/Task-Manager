import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask() {

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("Low");

  const navigate = useNavigate();

  function handleSubmit(e) {

    e.preventDefault();

    const newTask = {
      title: title,
      status: status,
      priority: priority,
      startDate: "",
      endDate: "",
      progress: 0
    };

    fetch("http://localhost:3001/tasks", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(newTask)

    })
      .then((response) => response.json())
      .then(() => {
        navigate("/tasks");
      });

  }

  return (

    <div>

      <h2>Add New Task</h2>

      <form className="task-form" onSubmit={handleSubmit}>

        <p>Task Title</p>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <p>Status</p>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <p>Priority</p>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <br /><br />

        <button type="submit">Add Task</button>

      </form>

    </div>
  );
}

export default AddTask;