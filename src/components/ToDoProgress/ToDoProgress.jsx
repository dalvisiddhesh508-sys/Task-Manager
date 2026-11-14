function ToDoProgress({ percentage = 0 }) {

  return (
    <div className="progress-container">

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <span>{percentage}%</span>

    </div>
  );
}

export default ToDoProgress;