import Footer from "../components/Footer";
import Navabar from "../components/Navbar";

export default function HomePage() {
    return (
        <div className="h-auto w-full">
            <Navabar />
            <div className="w-11/12 mx-auto h-full  flex flex-col">

                <h1 className="font-mono text-6xl mx-auto py-20 text-primary font-bold">AYUSH DOSHI</h1>
                <h3 className="text-2xl font-mono text-primary ml-20 py-3 font-bold">About me</h3>
                <p className="w-4/6 mx-auto font-mono text-justify text-backgroundColor2">
                    Hello! I'm a Computer Science and Engineering student at Walchand College of Engineering. I'm a proficient full stack developer (MERN)
                    and currently expanding my skills in machine learning.
                </p>
                <h3 className="text-2xl font-mono text-primary ml-20 pb-3 pt-12 font-bold">Skills</h3>
                <div className="pb-4">
                    <h4 className="text-xl font-mono text-primary ml-20 pb-3 underline underline-offset-6">Programming Language :-</h4>
                    <ul className="font-mono flex justify-around w-5/6 mx-auto text-backgroundColor2">
                        <li>C++</li>
                        <li>Python</li>
                        <li>JavaScript / TypeScript</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="py-4">
                    <h4 className="text-xl font-mono text-primary ml-20 pb-3 underline underline-offset-6">Frontend :-</h4>
                    <ul className="font-mono flex justify-around w-5/6 mx-auto text-backgroundColor2">
                        <li>ReactJS</li>
                        <li>TailwindCSS</li>
                        <li>NextJS</li>
                    </ul>
                </div>
                <div className="py-4">
                    <h4 className="text-xl font-mono text-primary ml-20 pb-3 underline underline-offset-6">Backend :-</h4>
                    <ul className="font-mono flex justify-around w-5/6 mx-auto text-backgroundColor2">
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>Mongodb</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div className="py-4">
                    <h4 className="text-xl font-mono text-primary ml-20 pb-3 underline underline-offset-6">Dev-tools/Technologies :-</h4>
                    <ul className="font-mono flex justify-around w-5/6 mx-auto text-backgroundColor2">
                        <li>Amazon Web Services</li>
                        <li>Git/Github</li>
                        <li>Linux</li>
                    </ul>
                </div>

                <h3 className="text-2xl font-mono text-primary ml-20 pb-3 pt-12 font-bold">Education</h3>
                <div className="pb-4">
                    <table className="font-mono  w-4/6 mx-auto text-backgroundColor2">
                        <thead className="">
                            <th ></th>
                            <th ></th>
                            <th ></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="">2019</td>
                                <td className="">SSC Board</td>
                                <td className="">(Percentage 89.4)</td>
                            </tr>
                            <tr>
                                <td className="">2021</td>
                                <td className="">HSC Board</td>
                                <td className="">(Percentage 93.3)</td>
                            </tr>
                            <tr>
                                <td className="">2021-2025</td>
                                <td className="">Btech CSE</td>
                                <td className="">(CGPA 7.5)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-2xl font-mono text-primary ml-20 pb-3 pt-12 font-bold">Certifications</h3>
                <div className="pb-4">
                <div className="pb-4">
                    <h4 className="text-xl font-mono text-primary ml-20 pb-3 ">Deep Learning Specialization</h4>
                    <ul className="font-mono flex flex-col justify-around h-52 w-4/6 mx-auto text-backgroundColor2">
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/verify/4U8ZTLGG44VJ" className="underline ">
                                Course 1 : Neural Networks and Deep Learning
                            </a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/verify/4U8ZTLGG44VJ" className="underline ">
                                Course 2 : Improving Deep Neural Networks
                            </a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/verify/4U8ZTLGG44VJ" className="underline ">
                                Course 3 : Structuring Machine Learning Projects
                            </a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/verify/4U8ZTLGG44VJ" className="underline ">
                                Course 4 : Convolutional Neural Networks
                            </a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/verify/4U8ZTLGG44VJ" className="underline ">
                                Course 5 : Sequence Models 
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}