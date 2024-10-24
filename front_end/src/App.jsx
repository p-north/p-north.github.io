import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Resume from "./Pages/Resume"
import Navbar from "./components/Navbar"


function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/projects" element = {<Projects/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/resume" element = {<Resume/>}/>

    </Routes>
      
    </>
  )
}

export default App
