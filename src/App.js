import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  Navigate
} from "react-router-dom";

import {Home} from "./pages/Home/Home.js"; 
import {Projects} from "./pages/Projects/Projects.js";
import {GitProject} from "./pages/GitProject/GitProject.js";
import {Experience} from "./pages/Experience/Experience.js";
import {NotFound} from "./pages/NotFound/NotFound.js"

const users = ["Holly", "Steve", "Jason", "Paula"];

function App() {
  return (
    <div>    
      <Router>
        <div className="body">
          <div id="hero">
            <h1>ElliotMB</h1>
            <nav>
            <ul className="nav-bar">
              <li className="nav-link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-link">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="nav-link">
                <Link to="/experience">Experience</Link>
              </li>
            </ul>
            </nav>
          </div>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projects/:projectClass/*" element={<GitProject/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/not-found" element={<NotFound/>}/>
            <Route path={"*"} element={<NotFound/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
