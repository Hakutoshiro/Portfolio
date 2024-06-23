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
        <div className={"h-auto min-h-screen w-full text-center " + bgColor}>
            <h1 className="font-mono text-6xl mx-auto py-24 text-primary font-bold ">PROJECTS</h1>
            
            <div className="md:w-8/12 mx-auto h-full  text-6xl">
                <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    
                    {Projects.map((project, index) => {
                        return <ProjectCard project={project} key={index} bgColor = {bgColor} textColor ={textColor} />
                    })}

                </div>
            </div>
            
        </div>
    )
}