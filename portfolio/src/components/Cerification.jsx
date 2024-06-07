export default function Certifications({ textColor }) {
    return (
        <>
            <h3 className="text-2xl font-mono text-primary ml-20 pb-3 pt-12 font-bold">Certifications</h3>
            <div className="pb-4">
                <div className="pb-4">
                    <h4 className="text-xl font-mono text-primary ml-20 pb-3 ">Deep Learning Specialization</h4>
                    <ul className={"font-mono flex flex-col justify-around h-52 w-4/6 mx-auto " + textColor}>
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
            </div>\
        </>
    )
}