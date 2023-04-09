import "./styles/index.css";
import ProjectsJSON from "./data/projects.json";


const Projects = () => {

    return (  
        <div className="Projects" id="Projects">
            <br />
            <h2>Projects</h2>
            <br/>
            <p>I'm currently working on a few personal projects, including a Genshin Impact-themed Discord bot that
                will implement PostgreSQL as its data storage solution, an osu!-themed application that uses OAuth 
                authentication to access the osu! API, as well as the digital portfolio you're reading right now,
                which is being made with React.js. Feel free to check theses out below! And if you'd like a more up-to-date
                look at what I'm currently working on, please check out my GitHub page at <a style={{color: "#c6e2ff"}}href="https://www.github.com/azn-abel" target={'_blank'} rel={'noreferrer'}>https://www.github.com/azn-abel</a>.</p><br />
            <div className="projects-container">
                {
                    ProjectsJSON.map( project => {
                        return(
                            <div className="project">
                                <a href={project.url} target={'_blank'} rel={'noreferrer'}>
                                    <img style={{borderRadius: project.borderRadius}}src={require('./images/' + project.imagePath)} alt={project.alt} />
                                </a>
                                <b>{project.title}</b>
                                <p>{project.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <br></br>
        </div>
    );
}
 
export default Projects;