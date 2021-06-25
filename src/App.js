import { useState } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {

  const [tasks, setTasks] = useState([
    {
        id:1,
        text: "Doctor's Appointment",
        day: "28th Feb at 2:30 PM",
        reminder: true
    },
    {
        id:2,
        text: "Car Wash",
        day: "31st May at 11:00 AM",
        reminder: false
    },
    {
        id:3,
        text: "Robotronics Starts",
        day: "14th July at 12:00 AM",
        reminder: true
    },
    
])

//delete task
const deleteTask = (id) =>{
  console.log('delete',id);
}

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
