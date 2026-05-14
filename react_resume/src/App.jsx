import './App.css'
import profilePic from './assets/profilePic.jpg'
export function CvProfile() {
return(
   <div>
        <header>
          <img src={profilePic} alt="" />
    <h1>Izhar Shams</h1>
    <h2>Front-End Web Developer</h2>

    <p><strong>Email:</strong> izharshams173@gmail.com</p>
    <p><strong>Address:</strong> DHA Phase 2, Karachi</p>
  </header>

  


  <section>
    <h2>Profile / Description</h2>

    <p>
      Passionate and motivated Front-End Web Developer with strong knowledge
      of modern web technologies. Skilled in creating responsive, user-friendly,
      and attractive websites using React, JavaScript, HTML, and CSS frameworks.
      Currently improving development skills by building real-world projects and
      learning advanced technologies. Able to work in team environments and
      eager to grow in the software development industry.
    </p>
  </section>
  
   </div>
   
)
}

export function Skills (){
  return <div>
   
       <section>
    <h2>Skills</h2>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
      <li>React JS</li>
      <li>Bootstrap</li>
      <li>Tailwind CSS</li>
      <li>TypeScript</li>
      <li>SCSS</li>
      <li>Node JS</li>
      <li>Git</li>
      <li>GitHub</li>
      <li>Responsive Web Design</li>
    </ul>
  </section>
   </div>
}


export function Education(){
   return <div>

 <section>
    <h2>Education</h2>

    <h3>Intermediate (In Progress)</h3>
    <p>Government Degree College Karachi</p>
    <p>Karachi, Pakistan</p>

    <h3>Matriculation</h3>
    <p>Bright Future Secondary School</p>
    <p>Karachi, Pakistan</p>
  </section>


   </div>
}


export function Experience (){
   return <div>

 <section>
    <h2>Experience</h2>

    <h3>Personal Front-End Projects</h3>

    <p>
      Built multiple responsive and modern websites using React and JavaScript.
      Worked on UI design, reusable components, responsive layouts, and basic
      backend integration while practicing real-world development concepts.
    </p>
  </section>

   </div>
}


export function Languages (){
   return <div>
        <section>
    <h2>Languages</h2>

    <ul>
      <li>English</li>
      <li>Urdu</li>
    </ul>
  </section>
   </div>
}


export function Interests (){
   return <div>
       <section>
    <h2>Interests</h2>

    <ul>
      <li>Web Development</li>
      <li>Learning AI Technology</li>
      <li>UI/UX Design</li>
      <li>Cricket</li>
    </ul>
  </section>
   </div>
}

