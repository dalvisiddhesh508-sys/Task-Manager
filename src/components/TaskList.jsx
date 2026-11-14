import { useState, useEffect } from "react";

import ToDoRow from "./ToDoRow/ToDoRow";

function TaskList() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.log("Error fetching tasks:", error);
      });

  }, []);

  return (

    <div>

      <h2>All Tasks</h2>

      <div className="table-wrapper">

        <table>

          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Progress</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {tasks.map((task) => (
              <ToDoRow key={task.id} task={task} />
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default TaskList;