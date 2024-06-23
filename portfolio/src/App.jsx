import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"
import Resume from "./pages/Resume"
import { ThemeContextProvider } from "./sharedContext/ThemeContext"
import Layout from "./Layout"


function App() {

  return (
    <ThemeContextProvider>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </ThemeContextProvider>
  )
}

export default App
