import { Link, Route, Routes } from "react-router-dom";

import TaskList from "./Components/TaskList";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

function App() {

  return (

    <div className="container">

      <h1>Task Manager</h1>

      <nav>
        <Link to="/tasks">Tasks</Link>{" "}
        <Link to="/tasks/add">Add Tasks</Link>
      </nav>

      <Routes>

        <Route path="/" element={<TaskList />} />

        <Route path="/tasks" element={<TaskList />} />

        <Route path="/tasks/add" element={<AddTask />} />

        <Route path="/tasks/:id" element={<TaskDetails />} />

      </Routes>

    </div>
  );
}

export default App;