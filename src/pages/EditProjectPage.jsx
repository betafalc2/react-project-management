
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/api";
import { useNavigate, useParams } from "react-router-dom";


function EditProjectPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { projectId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}/projects/${projectId}`)
            .then(response => {
                setTitle(response.data.title),
                    setDescription(response.data.description)
            })
            .catch(e => console.log(e))
    }, [projectId])

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newDetails = {
            title: title,
            description: description
        }

        axios.put(`${API_URL}/projects/${projectId}`, newDetails)
            .then(response => {
                navigate(`/projects/${projectId}`);
            })
            .catch(e => console.log("Error updating project...", e))

    }


    const deleteProject = ()=>{
        axios.delete(`{API_URL}/projects/${projectId}`)
        .then( response =>
            navigate("/projects")
        )
        .catch(error => console.log('Error deleting project', error))
    }
    return (
        <div className="EditProjectPage">
            <h3>Edit the Project</h3>

            <form onSubmit={handleFormSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Description:</label>
                <textarea
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button type="submit">Update Project</button>
            </form>

            <button onClick={deleteProject}>Delete Project</button>
        </div>
    );
}

export default EditProjectPage;
