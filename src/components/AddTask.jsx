// src/components/AddTask.jsx

import { useState } from "react";
import axios from "axios";
import { API_URL } from "../config/api";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefalt();

    const newTask = {
        title: title,
        description: description,
        projectId: parseInt(props.projectId)
    }

    axios.post(`${API_URL}/tasks/{}`, newTask)
    .then(response =>{
        props.callbackToRefresh(); //invoking function on parent component
  })
    .catch(e => console.log('error creating a new task', e))
  };

  
  return (
    <div className="AddTask">
      <h3>Add New Task</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title:
        <input
          type="text"
          required
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </label>

        <label>Description:
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        </label>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
