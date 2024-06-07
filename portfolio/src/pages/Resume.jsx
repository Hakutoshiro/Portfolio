import Footer from "../components/Footer";
import Navabar from "../components/Navbar";
import { ThemeContext } from "../sharedContext/ThemeContext";
import { useContext, useEffect, useState } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import pdf from "../data/Ayush_Resume.pdf";
export default function Resume() {
    const { theme } = useContext(ThemeContext);
    const [bgColor, setBgColor] = useState(theme ? "bg-white" : "bg-black");
    const [textColor, setTextColor] = useState(theme ? "text-black" : "text-white");
    const docs = [
        { uri: pdf },
    ];

    useEffect(() => {
        setBgColor(theme ? "bg-white" : "bg-black")
        setTextColor(theme ? "text-white" : "text-black")
    }, [theme])

    return (
        <div className={"h-auto w-full min-h-full " + bgColor}>
            <div className="w-7/12 mx-auto">

                <Navabar />
            </div>
            <div className="w-7/12 mx-auto h-auto  py-14 flex flex-col items-center text-xl">
                <iframe src={pdf} frameborder="0" className="w-8/12 mx-auto md:h-screen font-mono h-1/2 " ></iframe>
                <div className="flex text-primary text-3xl  h-40 w-7/12 justify-around items-start">
                <h3 className="text-2xl font-mono text-primary ml-20 py-6 font-bold">Download Resume</h3>
                    <button className="bg-primary px-5 h-auto py-2 my-3 rounded-xl font-mono pt-3"><a href="../data/Ayush_Resume.pdf" className={textColor} download>
                        Download
                    </a></button>
                </div>
            </div>
            <div className="w-7/12 h-full mx-auto">

                <Footer />
            </div>
        </div>
    )
}