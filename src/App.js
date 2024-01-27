import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header  from './Components/Header';
import About  from './Components/About';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import './App.css';

function App() {
  const[projectList,setProjectList] = useState([])
  return (
<BrowserRouter>
<Header/>

<Routes>

<Route  path = "/" element={<About projectList = {projectList } setProjectList = {setProjectList} />} />

<Route  path = "/projects" element={<Projects projectList = {projectList }  />} />

<Route  path = "/contacts" element={<Contacts/>} />
</Routes>


</BrowserRouter>
  );
}

export default App;
