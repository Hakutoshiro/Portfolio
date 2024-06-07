export default function About({textColor}) {
    return (
        <>
            <h1 className="font-mono text-6xl mx-auto py-20 text-primary font-bold">AYUSH DOSHI</h1>
            <h3 className="text-2xl font-mono text-primary ml-20 py-3 font-bold">About me</h3>
            <p className={"w-4/6 mx-auto font-mono text-justify " + textColor}>
                Hello! I'm a Computer Science and Engineering student at Walchand College of Engineering. I'm a proficient full stack developer (MERN)
                and currently expanding my skills in machine learning.
            </p>
        </>
    )
}