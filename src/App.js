import React, {useState} from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Accordion from './Accordion';

const App = () => (
  <div className='app'>
    <h1 className="name">Felix Qu</h1>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'><h1 className="subtitle">Home</h1></NavLink></li>
      <li><NavLink exact activeClassName="current" to='/projects'><h1 className="subtitle">Projects</h1></NavLink></li>
      <li><NavLink exact activeClassName="current" to='/about'><h1 className="subtitle">About</h1></NavLink></li>
      <li><NavLink exact activeClassName="current" to='/extra'><h1 className="subtitle">Extra</h1></NavLink></li>
    </ul>
    
  </nav>
);

const Home = () => {
  const [activeTab, setActiveTab] = useState('welcome');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return ( 
      <div className="button-container">
          <a
          href="https://www.linkedin.com/in/felixqu"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          LinkedIn
        </a>
        <p></p>
        <a
          href="https://github.com/fequ830"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          GitHub
        </a>
        <p></p>
        <a
          href="https://drive.google.com/file/d/1CE_Uy-Tbw_i037TS_0uZVwVmx2IKSe1K/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Resume
        </a>
      </div>
  );
};

const About = () => (
  <div className='about'>
    <h1 className="title">About</h1>
    <img src="/felixpic.jpg" alt="Me in Lucca" />
    <p> <span className="textitalic">atop the Guinigi Tower in Lucca, Italy</span> </p>
    <br></br>
    <div className='textfield'>
      <p className='text'>I'm a student at UCLA. Aside from computer science, I love history, reading, rollerskating, and working out.</p>
      <p className='text'>Honors and Awards: Dean's Honor List (Fall '22, Winter '23, Spring '23), Stockton Scholar, Rothman Scholar</p>
      <p className='text'>Languages: Python, C++, OCaml, Haskell, Java</p>
      <p className='text'>Technologies/Frameworks: Docker/Podman, Kubernetes, Helm, AWS, Azure DevOps, Terraform, Datadog, React/Node</p>
      <p className='text'>You can reach me via email: <a href="mailto:fequ830@gmail.com" className="underline-on-hover">fequ830@gmail.com</a></p>
      <br></br>
      <br></br>
    </div>
  </div>
);

const Extra = () => (
  <div className='extra'>
    <h1 className="title">Extra</h1>
    <p className='text'>What I'm raving about:</p>
    <p className='text'> Artists: <a href="https://www.youtube.com/@limperatrice_" target="_blank" rel="noopener noreferrer" className="underline-on-hover">L'Impératrice</a>
    , <a href="https://www.youtube.com/@AltnGunband" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Altın Gün</a>
    , <a href="https://www.youtube.com/@jessieware" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Jessie Ware</a>
    </p>
    <p className='text'>Shows: <a href="https://www.netflix.com/title/80136321?source=35" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Babylon Berlin</a>
    , <a href="https://www.netflix.com/title/80025678?source=35" target="_blank" rel="noopener noreferrer" className="underline-on-hover">The Crown</a>
      </p>
    <p className='text'>Time wasters: <a href="https://advisa.se/en/research/brexit-bus/" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Brexit Bus</a>
    , <a href="https://www.jetpunk.com/quizzes/how-many-countries-can-you-name" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Countries of the World Quiz</a>
    </p>
    <br></br>
    <br></br>
  </div>
);


const Projects = () => {
  const items = [
    {
      title: "Asyncio Proxy Network",
      content: 
      <div className='textfield'>
       <p>Python</p>
       <p>Distributed proxy server network with Python’s asyncio library, using a server herd architecture
       with five servers that bidirectionally communicate to share real-time location data from clients</p>
       <p>Features protocols for client-server communication, which location updates/queries for nearby places using
       the Google Places API and utilizing asyncio’s asynchronous data propagation</p>
       <a href="https://github.com/fequ830/asyncionetwork" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Repo</a>
      </div>
   },
    {
       title: "LeashedIn",
       content: 
       <div className='textfield'>
        <p>React, Node.js, MongoDB Atlas</p>
        <p>Full-stack social media web app for pet owners, inspired by LinkedIn and Instagram</p>
        <p>Users can create an account, add an account bio/pet subprofiles, publicly post text/images on their feed, like and comment on posts</p>
        <a href="https://github.com/fequ830/LeashedIn" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Repo</a>
       </div>
    },
    {
      title: "Topo Sort Visualizer",
      content:
      <div className='textfield'>
        <p>Python</p>
        <p>Implementation of Kahn's algorithm that generates a topological ordering of any repo's commit hashes</p>
        <p>As a challenge, I did not use any built-in Git commands that would've made it easy, like "git log"</p>
        <a href="https://github.com/fequ830/Peach-Party" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Repo</a>
     </div> 
   },
    {
       title: "Pomododo",
       content:
       <div className='textfield'>
        <p>Javascript, React, Firebase</p>
        <p>Web app to help students efficiently divide their study and break times</p>
        <p>Features timer that alternates between study and break modes; features some preset timers of popular study-break intervals like the Pomodoro method, and the option to set custom intervals</p>
        <a href="https://github.com/AnooshkhaShetty/Pomododo" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Repo</a>
     </div>
    },
    {
      title: "Peach Party",
      content:
      <div className='textfield'>
        <p>C++, OpenGL, Glut</p>
        <p>Two-player offline game inspired by Nintendo's Mario Party</p>
        <p>OpenGL API is utilized to render objects in-game each tick</p>
        <a href="https://github.com/fequ830/Peach-Party" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Repo</a>
     </div> 
   }
  ]


  return (
    <div className='projects'>
      <h1 className="title">Projects</h1>
      <div className='accordion-container'>
        <Accordion items={items} />
      </div>
    </div>
  );
};



const Main = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/extra' element={<Extra />} />
    <Route path='/projects' element={<Projects />} />
  </Routes>
);





export default App;

