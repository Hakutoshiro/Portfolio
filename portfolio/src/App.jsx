import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"
import Resume from "./pages/Resume"
import {ThemeContextProvider} from "./sharedContext/ThemeContext"


function App() {

  return (
    <ThemeContextProvider>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </ThemeContextProvider>
  )
}

export default App
