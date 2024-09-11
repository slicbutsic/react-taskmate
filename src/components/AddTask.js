import { useState } from "react";
import './AddTask.css';

export const AddTask = () => {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgess] = useState(false);

  const handleChange = (e) => {
    setTaskValue(e.target.value);
  }

  const handleReset = () => {
    setTaskValue("");
    setProgess(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      id: Math.floor(Math.random() * 10000000),
      name: taskValue,
      completed: Boolean(progress)
    }
    handleReset();
    console.log(task);
  }

  return (
    <section className="addtask" >
      <form onSubmit={handleSubmit} >
        <input onChange={handleChange} type="text" name='task' id='task' placeholder='Task Name' autoComplete='off' value={taskValue} />
        <select onChange={(event) => setProgess(event.target.value)} value={progress}>
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>
        <span onClick={handleReset} className="reset">Reset</span>
        <button type='submit'>Add Task</button>
      </form>
      {taskValue.length > 0 && <p>Length: {taskValue.length}</p>}
    </section>
  )
}
