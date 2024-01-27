import { useState } from "react"
import { Link } from "react-router-dom"
import {v4} from "uuid"
import image from "..//Images/banner-img.png"
import "./index.css"

const About = (props) => {
   const {projectList,setProjectList} = props
   const [name,setName] = useState("")
   const [link, setLink]  = useState("")
   const [description,setDescription] = useState("")
   
   
   const onClickBtn = () => {
    const id = v4()
    const newList = {id,name,link,description}
    setProjectList([...projectList,newList])
    setName("")
    setLink("")
    setDescription("")
 
   }

    return(
        <div className="App">
      <div>
      
      <div className="content-container">
      <div className="total-container">
        <h4 className="title">
        UI/UX Designer
        </h4>
        <div className="content">
        <h2 className="sub-content">
        Hello,  my name is Madelyn Torff
        </h2>
        <p className="description">Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
       <div>
        <button className="projects-btn"> <Link to = "/projects">Projects</Link></button>
        <button className="linkedin-btn">LinkedIn</button>
       </div>
        </div>
      </div>

      <div className='img'>
        <img src ={image} alt = "img" />
        </div>
      </div>
      </div>
      <div className="projects-container">
         <div className="projects-child-container">
         <h3 className="form-title"> Add Project</h3>
         <div className="input-container">
          <label htmlFor="input">Project Name</label>
          <input type = "text"  id = "input" className="input" onChange={(e)=> setName(e.target.value)} value = {name}  />
         </div>
         
         <div className="input-container">
          <label htmlFor="input-link">Project Link</label>
          <input type = "text"  id = "input-link" className="input" onChange={(e)=> setLink(e.target.value)} value = {link} />
         </div>
         <div className="input-container">
          <label htmlFor="input">Description</label>
          <textarea className="textarea" onChange={(e)=> setDescription(e.target.value)} value = {description} ></textarea>
         </div>
         <button className="add" onClick={onClickBtn}>Add</button>
         </div>
         <svg xmlns="http://www.w3.org/2000/svg" width="1436" height="112" viewBox="0 0 1436 112" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M0 83.9182L59.8333 74.594C119.667 65.2697 239.333 46.6212 359 48.9523C478.667 51.2833 598.333 74.594 718 74.594C837.667 74.594 957.333 51.2833 1077 34.9659C1196.67 18.6485 1316.33 9.32425 1376.17 4.66212L1436 0V111.891H1376.17C1316.33 111.891 1196.67 111.891 1077 111.891C957.333 111.891 837.667 111.891 718 111.891C598.333 111.891 478.667 111.891 359 111.891C239.333 111.891 119.667 111.891 59.8333 111.891H0V83.9182Z" fill="#FDC435"/>
</svg>
        </div>  
        
               
    </div>
    )
}

export default About