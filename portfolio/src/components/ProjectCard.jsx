export default function ProjectCard({ project, key ,bgColor,textColor}) {
    return (

        <div className={"w-5/12 max-h-80 min-h-44 border rounded-3xl mx-2 my-2  overflow-hidden "+bgColor} key={key}>
            <img src={project.img} alt={project.img} className='w-full h-2/5 object-fill object-top ' />
            <div className="py-3 flex flex-col items-center h-auto  overflow-hidden">
                <h3 className="text-xl font-mono text-primary font-bold text-center line-clamp-2">{project.title}</h3>
                <p className={"text-sm font-mono  opacity-80  ml-2 text-prety indent-8 line-clamp-6 w-10/12 "+textColor }>{project.description}</p>
                 
            </div>
        </div>

    )
}