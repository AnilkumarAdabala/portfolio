import ProjectSectionView from "../ProjectSectionView"
import first from "../Images/pexels-elly-fairytale-3823207 1.svg"
import second from "../Images/2nd.svg"
import third from "../Images/3rd.svg"
import "./index.css"

const Projects = (props) => {
    const {projectList }= props
    console.log(projectList)
   
    return(
        <div className="projects-bg-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project">
                <div className="project-content">
                  <h2 className="name">Project Name</h2>
                  <p className="content-project">I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
                  <button className="view-btn">View Project</button>
                </div>
                <div>
                    <img src = {first}  alt = "first" />
                </div>
            </div>
            <div className="project">
               <div>
                    <img src = {second}  alt = "first" />
                </div>
                <div className="project-content">
                  <h2 className="name">Project Name</h2>
                  <p className="content-project">What was your role, your deliverables, if the project was personal, freelancing.</p>
                  <button className="view-btn">View Project</button>
                </div>
                
            </div>
            <div className="project">
                <div className="project-content">
                  <h2 className="name">Project Name</h2>
                  <p className="content-project">You can also add in this description the type of the project, if it was for web, mobile, electron.</p>
                  <button className="view-btn">View Project</button>
                </div>
                <div>
                    <img src = {third}  alt = "first" />
                </div>
            </div>
            <ul>
                {projectList.map(each => (
                    <ProjectSectionView projects = {each} key = {each.id}  />
                ))}
            </ul>
        </div>
    )
}

export default Projects