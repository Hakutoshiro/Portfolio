import { Skills } from "../data/skills"

export default function Skill({textColor} ) {
    console.log(textColor)
    return (
        <>
            <h3 className="text-2xl font-mono text-primary ml-20 pb-3 pt-12 font-bold">Skills</h3>
            {
                Skills?.map((skill, index) => {
                    return (
                        <div className="py-4" key={index}>
                            <h4 className="text-xl font-mono text-primary ml-20 pb-3 underline underline-offset-6">{skill[0] + " :-"}</h4>
                            <ul className={"font-mono flex justify-around w-5/6 mx-auto " + textColor}>
                                {
                                    skill.map((skilli, ind) => {
                                        if(ind !== 0)
                                        return <li key={ind}>{skilli}</li>
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </>
    )
}