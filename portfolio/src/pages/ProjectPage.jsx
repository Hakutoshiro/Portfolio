import Footer from "../components/Footer";
import Navabar from "../components/Navbar";
import { ThemeContext } from "../sharedContext/ThemeContext";
import { useContext, useEffect, useState } from "react";
import {Projects} from "../data/project";
import ProjectCard from "../components/ProjectCard";
export default function ProjectPage() {
    const { theme } = useContext(ThemeContext);
    const [bgColor, setBgColor] = useState(theme ? "bg-white" : "bg-black");
    const [textColor, setTextColor] = useState(theme ? "text-black" : "text-white");

    useEffect(() => {
        setBgColor(theme ? "bg-white" : "bg-black")
        setTextColor(theme ? "text-black" : "text-white")
    }, [theme])
    return (
        <div className={"h-auto min-h-screen w-full  " + bgColor}>
            <div className="w-7/12 mx-auto">

                <Navabar />
            </div>
            <div className="w-7/12 mx-auto h-full pt-14 flex flex-col text-6xl">
                <h1 className="font-mono text-6xl mx-auto py-20 text-primary font-bold ">PROJECTS</h1>
                <div className="flex flex-wrap w-11/12 h-auto ml-20">
                    
                    {Projects.map((project, index) => {
                        return <ProjectCard project={project} key={index} />
                    })}

                </div>
            </div>
            <div className="w-7/12 h-full mx-auto">

                <Footer />
            </div>
        </div>
    )
}