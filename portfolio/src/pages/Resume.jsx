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
        <div className={"h-auto w-full min-h-screen " + bgColor}>

            <div className="w-full md:w-6/12 mx-auto min-h-screen   flex flex-col items-center text-xl">

                <iframe src={pdf} frameborder="0" className="w-11/12 mx-auto min-h-[600px]  sm:min-h-[1100px] pt-20 font-mono  " ></iframe>
                <h3 className="text-2xl md:text-3xl  font-mono text-primary  pb-3 pt-24 font-bold">Download Resume</h3>
                <button className="bg-primary px-5 h-auto py-2 my-3 rounded-xl font-mono pt-3"><a href="../data/Ayush_Resume.pdf" className={textColor} download>
                    Download
                </a></button>
            </div>

        </div>
    )
}