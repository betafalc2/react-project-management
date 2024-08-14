import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import { Routes, Route } from "react-router-dom"
import ProjectsListPage from "./pages/ProjectsListPage"
import CreateProjectPage from "./pages/CreateProjectPage"
import ProjectDetailsPage from "./pages/ProjectDetailsPage"
import EditProjectPage from "./pages/EditProjectPage"

function App() {


  return (

    <div>
      <Navbar />

      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/" element={<ProjectsListPage />} />
          <Route path="/projects/create" element={<CreateProjectPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />} /> 
          <Route path="/projects/edit/:projectId" element={<EditProjectPage />} /> 
        </Route>

      </Routes>
    </div>

  )
}

export default App
