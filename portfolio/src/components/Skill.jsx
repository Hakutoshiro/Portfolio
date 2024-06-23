import { Skills } from "../data/skills"

export default function Skill({textColor} ) {
    console.log(textColor)
    return (
        <div className="text-center">
            <h3 className="text-3xl font-mono text-primary  pb-3 pt-12 font-bold underline underline-offset-6">SKILLS</h3>
            {
                Skills?.map((skill, index) => {
                    return (
                        <div className="py-4" key={index}>
                            <h4 className="text-xl font-mono text-primary pb-3 ">{skill[0] }</h4>
                            <ul className={"font-mono w-5/6 mx-auto grid grid-cols-2 lg:grid-cols-4 " + textColor}>
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
        </div>
    )
}