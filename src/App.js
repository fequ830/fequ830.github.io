import React, {useState} from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Accordion from './Accordion';

const App = () => (
  <div className='app'>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'><h1 className="obradinn-subtitle">Home</h1></NavLink></li>
      <li><NavLink exact activeClassName="current" to='/projects'><h1 className="obradinn-subtitle">Projects</h1></NavLink></li>
      <h1 className="obradinn-title" style={{"font-size": "100px"}}>Felix Qu</h1>
      <li><NavLink exact activeClassName="current" to='/about'><h1 className="obradinn-subtitle">About</h1></NavLink></li>
      <li><NavLink exact activeClassName="current" to='/extra'><h1 className="obradinn-subtitle">Extra</h1></NavLink></li>
    </ul>
    
  </nav>
);

const Home = () => {
  const [activeTab, setActiveTab] = useState('welcome');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='home' style={{ marginTop: '20vh'}}>
          <div class="wheel">
            <div class="line"><p>R O T A S</p></div>
            <div class="line"><p></p></div>
            <div class="line"><p></p></div>
            <div class="line"><p>O P E R A</p></div>
            <div class="line"><p></p></div>
            <div class="line"><p></p></div>
            <div class="line"><p>T E N E T</p></div>
            <div class="line"><p></p></div>
            <div class="line"><p></p></div>
            <div class="line"><p>A R E P O</p></div>
            <div class="line"><p></p></div>
            <div class="line"><p></p></div>
            <div class="line"><p>S A T O R</p></div>
            <div class="line"><p></p></div>
            <div class="line"><p></p></div>
            {/* <div class="line"><p>*</p></div> */}
          </div>
          <div style={{ marginTop: '20vh' }}>
            <p className="obradinn-text">
              The design of this site is an ode to the analog style of my all-time favorite mystery game: <a href="https://store.steampowered.com/app/653530/Return_of_the_Obra_Dinn/" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Return of the Obra Dinn</a>.
            </p>
          </div>
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
    </div>
  );
};

const About = () => (
  <div className='about'>
    <h1 className="obradinn-title">About</h1>
    <img src="/felixpic.jpg" alt="Me in Lucca" />
    <p> <span className="obradinn-textitalic">atop the Guinigi Tower in Lucca, Italy</span> </p>
    <br></br>
    <div className='textfield'>
      <p className='obradinn-text'>I'm a 4th year at UCLA. Aside from CS, I love history, reading, rollerskating, and working out.</p>
      <p className='obradinn-text'>Honors and Awards: Dean's Honor List (Fall '22, Winter '23, Spring '23), Stockton Scholar, Rothman Scholar</p>
      <p className='obradinn-text'>Languages: Python, C++, OCaml, Haskell, Java</p>
      <p className='obradinn-text'>Technologies/Frameworks: Docker/Podman, Kubernetes, Helm, AWS, Azure DevOps, Terraform, Datadog, React/Node</p>
      <p className='obradinn-text'>You can reach me via email: <a href="mailto:fequ830@gmail.com" className="underline-on-hover">fequ830@gmail.com</a></p>
      <br></br>
      <br></br>
    </div>
  </div>
);

const Extra = () => (
  <div className='extra'>
    <h1 className="obradinn-title">Extra</h1>
    <p className='obradinn-text'>What I'm raving about:</p>
    <p className='obradinn-text'> Artists: <a href="https://www.youtube.com/@limperatrice_" target="_blank" rel="noopener noreferrer" className="underline-on-hover">L'Impératrice</a>
    , <a href="https://www.youtube.com/@AltnGunband" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Altın Gün</a>
    , <a href="https://www.youtube.com/@jessieware" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Jessie Ware</a>
    </p>
    <p className='obradinn-text'>Shows: <a href="https://www.netflix.com/title/80136321?source=35" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Babylon Berlin</a>
    , <a href="https://www.netflix.com/title/80025678?source=35" target="_blank" rel="noopener noreferrer" className="underline-on-hover">The Crown</a>
      </p>
    <p className='obradinn-text'>Time wasters: <a href="https://advisa.se/en/research/brexit-bus/" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Brexit Bus</a>
    </p>
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
      <h1 className="obradinn-title">Projects</h1>
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

