export default function Certifications({ textColor }) {
    return (
        <div className="text-center">
            <h3 className="text-3xl font-mono text-primary pb-3 pt-12 font-bold underline underline-offset-6">Certifications</h3>
            <div className="pb-4">
                <div className="pb-4">
                    <h4 className="text-xl font-mono text-primary  pb-3 ">Deep Learning Specialization</h4>
                    <ul className={"font-mono grid grid-cols-1 w-5/6 mx-auto text-justify " + textColor}>
                        <li className="py-2">
                            <a href="https://www.coursera.org/account/accomplishments/verify/4U8ZTLGG44VJ" className="underline">
                                Course 1 : Neural Networks and Deep Learning
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="https://www.coursera.org/account/accomplishments/verify/4U8ZTLGG44VJ" className="underline">
                                Course 2 : Improving Deep Neural Networks
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="https://www.coursera.org/account/accomplishments/verify/4U8ZTLGG44VJ" className="underline">
                                Course 3 : Structuring Machine Learning Projects
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="https://www.coursera.org/account/accomplishments/verify/4U8ZTLGG44VJ" className="underline">
                                Course 4 : Convolutional Neural Networks
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="https://www.coursera.org/account/accomplishments/verify/4U8ZTLGG44VJ" className="underline">
                                Course 5 : Sequence Models
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}