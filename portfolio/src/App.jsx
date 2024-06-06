import { Route , Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"
import Resume from "./pages/Resume"


function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/resume" element={<Resume/> } />
    </Routes>
  )
}

export default App
