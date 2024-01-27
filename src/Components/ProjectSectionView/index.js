import "./index.css"
const ProjectSectionView = (props) => {
    const {projects} = props
    const {name,link,description} = projects
    return(
        <li className="section">
            <div className="each-sec">
                <h1 className="project-section-heading">Project Name :</h1>
                <h3 className="project-section">{name}</h3>
            </div>
            <div  className="each-sec"> 
                <h1 className="project-section-heading">Project Link : </h1>
                <h3 className="project-section">{link}</h3>
            </div>
            <div  className="each-sec">
                <h1 className="project-section-heading">Project Description :</h1>
                <h3 className="project-section">{description}</h3>
            </div>
        </li>
    )

}

export default ProjectSectionView