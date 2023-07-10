

const Project = (props) => {
    const { project } = props;
    return (
        <div className="project">
            <a href={project.url} target={'_blank'} rel={'noreferrer'}>
                <img style={{borderRadius: project.borderRadius}} src={require('../../images/' + project.imagePath)} alt={project.alt} />
            </a>
            <b>{project.title}</b>
            <p>{project.description}</p>
        </div>
    )
}

export default Project;