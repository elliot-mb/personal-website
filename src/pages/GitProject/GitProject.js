import React, { 
  useEffect,
  useState
 } from 'react';
import "./GitProject.css"
import {
  Navigate
} from "react-router-dom";

import {useParams} from "react-router-dom";
import {gitProjects} from "../../data/projects.js"
import {GitResource} from "../../components/GitResource.js";

export function GitProject() {

  //state 
  const [readmeShown, setShown] = useState(false);

  useEffect(() => { //cant be called after the return as react hooks are tempermental
    document.title = `${projectClass} | Elliot Buckingham`;
  });

  const { projectClass } = useParams();
  let projectID = -1;
  if(!gitProjects.reduce((x, y) => { 
    if(!x) { projectID++; } 
    return (x || y.name === projectClass);
  }, false)){
    return <Navigate to={"/not-found"}/>
  }
  const project = gitProjects[projectID];
  //const response = gitResource(project.url);
  return(
    <div className="content">
      <h1>{projectClass}</h1>
      <div id="git-project">
        <div> {/* column 1*/}
          <p>{project.tagline}</p>
        </div>
        <div className="markdown-box" id={`shown-${readmeShown}`}>
            <button id="readme" onClick={() => setShown(!readmeShown)}>README.md</button>
            <GitResource url={project.url} display={readmeShown}/>
        </div>
      </div>
    </div> 
  )
}

