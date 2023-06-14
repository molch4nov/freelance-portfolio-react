import {projects} from "../helpers/projectList";
import {Project} from "../components/project/Project";

export function Projects(){
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map(
                        (project,index) => <Project key={index} title={project.title} img={project.img} index={index}/>
                    )}
                </ul>
            </div>
        </main>
    )
}