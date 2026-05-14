import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {CvProfile, Skills, Education, Experience, Languages, Interests} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CvProfile></CvProfile> 
    <Skills></Skills>  
    <Education></Education>
    <Experience></Experience>
    <Languages></Languages>
    <Interests></Interests>
  </StrictMode>,
)
