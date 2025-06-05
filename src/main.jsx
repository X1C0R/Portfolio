import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About  from './about.jsx'
import Skill from './skill.jsx'
import Projects from './project.jsx'
import Contact from './contact.jsx'
// import Topnavv  from './Topnavv.jsx'
// import Threejs from './threejs.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <App />
  <About />
  <Skill/>
  <Projects/>
  <Contact/>
  {/* <Topnavv/> */}
  </>
)
