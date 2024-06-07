import nn from '../assets/nn.png';
import portfolio from '../assets/portfolio.png';
import academic from '../assets/academic.png';
import TuFTask from '../assets/TuFTask.png';
import Airbnb from '../assets/Airbnb.png'

export default function ProjectCard({ project, key }) {
    return (

        <div className="w-5/12 max-h-96 min-h-44 border rounded-3xl mx-2 my-2 bg-gray-950 overflow-hidden">
            <img src={project.img} alt={project.img} className='w-full h-1/3 object-fill object-top ' />
            <div className="py-3 flex flex-col items-center">
                <h3 className="text-xl font-mono text-primary font-bold text-center">{project.title}</h3>
                <p className="text-sm font-mono text-white opacity-50 h-auto ml-2 text-balance indent-8 ">{project.description}</p>
                 
            </div>
        </div>

    )
}