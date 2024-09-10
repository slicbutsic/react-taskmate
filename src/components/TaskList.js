import { useState } from "react";
import { TaskCard } from '../components/TaskCard';
import { BoxCard } from "./BoxCard";
import './TaskList.css';

export const TaskList = ({info}) => {
  const [tasks, setTasks] = useState([
    {id: 1, name: "Brush your teeth", completed: false },
    {id: 2, name: "Make your bed", completed: false},
    {id: 3, name: "Study", completed: true}
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter(task =>task.id !== id));
  }

  return (
    <section className='tasklist'>
      <h1>Task List</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>Toggle</button>
        { show && tasks.map((task) => (
          < TaskCard key={task.id} info={info} task={task} handleDelete={handleDelete}/>
        ))}
      </ul>

      <BoxCard result='success'>
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="descrition">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quo.</p>
      </BoxCard>

      {/* <div className="box warning">
        <p className="title">Lorem ipsum dolor sit.</p>
        <p className="descrition">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quo.</p>
      </div>
      <div className="box alert">
        <p className="title">Lorem, ipsum.</p>
        <p className="descrition">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quo.</p>
      </div> */}

      <BoxCard result='warning'>
        <p className="title">
          Lorem ipsum dolor sit.
        </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est repellendus laboriosam ullam aut pariatur doloremque neque quisquam tenetur nobis!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, ducimus.
        </p>
      </BoxCard>
    </section>
  )
}
