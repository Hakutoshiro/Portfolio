import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navabar from "../components/Navbar";
import { ThemeContext } from "../sharedContext/ThemeContext";
import { Skills } from "../data/skills"
import Skill from "../components/Skill";
import About from "../components/About";
import Education from "../components/Education";
import Certifications from "../components/Cerification";
export default function HomePage() {
    const { theme } = useContext(ThemeContext);
    const [bgColor, setBgColor] = useState(theme ? "bg-white" : "bg-black");
    const [textColor, setTextColor] = useState(theme ? "text-black" : "text-white");

    useEffect(() => {
        setBgColor(theme ? "bg-white" : "bg-black")
        setTextColor(theme ? "text-black" : "text-white")
    }, [theme])


    return (

        <div className={"h-auto w-full min-h-screen  " + bgColor}>
            <div className="w-7/12 mx-auto">
                <Navabar />
            </div>
            <div className="w-7/12 mx-auto h-full  flex flex-col text-xl">
                <About textColor={textColor} />
                <Skill textColor={textColor}  />
                <Education textColor={textColor} />
                <Certifications textColor={textColor} />
            </div>
            <div className="w-7/12 h-full mx-auto">
                <Footer />
            </div>
        </div>

    )
}