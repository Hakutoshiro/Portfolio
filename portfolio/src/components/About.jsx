export default function About({textColor}) {
    return (
        <div className="text-center">
            <h1 className="font-mono text-6xl  py-20 text-primary font-bold">AYUSH DOSHI</h1>
            <h3 className="text-3xl font-mono text-primary py-3 font-bold underline underline-offset-6">ABOUT ME</h3>
            <p className={"w-10/12 indent-8 mx-auto font-mono text-justify " + textColor}>
                Hello! I'm a Computer Science and Engineering student at Walchand College of Engineering. I'm a proficient full stack developer (MERN)
                and currently expanding my skills in machine learning.
            </p>
        </div>
    )
}