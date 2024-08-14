

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";



function ProjectListPage() {
  const [projects, setProjects] = useState(null);


  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    axios
    .get("https://project-management-api-4641927fee65.herokuapp.com/projects?_embed=tasks") // using ?_embeded=tasks gives you related tasks from the api//
    .then(
      (response) => {
      const projectsFromApi = response.data;
      const newList = projectsFromApi.reverse(); //reverse the list of projects order so the most recent is at the top//
      setProjects(newList);
  })
    .catch((error) => console.log('error getting projects from the api...', error));
  }, [] );

  if (projects === null){
    return <Loader/>;
  }

  
  return (
    <div className="ProjectListPage">

        {projects && projects.reverse().map((project) => { //the 'projects && 'waits for the api to be read before loading the page//
          return (
            <div className="ProjectCard card" key={project.id} >
              <Link to={`/projects/${project.id}`}>
                <h3>{project.title}</h3>
              </Link>
            </div>
          );
        })}     
       
    </div>
  );
}

export default ProjectListPage;
