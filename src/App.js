import React, {useState} from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
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
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/projects'>Projects</NavLink></li>
      <h1 className="centered">FELIX QU</h1> {/* Add a class to center the name */}
      <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/extra'>Extra</NavLink></li>
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
            <div class="line"><p>*</p></div>
            <div class="line"><p>**</p></div>
            <div class="line"><p>***</p></div>
            <div class="line"><p>****</p></div>
            <div class="line"><p>*****</p></div>
            <div class="line"><p>******</p></div>
            <div class="line"><p>*******</p></div>
            <div class="line"><p>********</p></div>
            <div class="line"><p>*********</p></div>
            <div class="line"><p>**********</p></div>
            <div class="line"><p>***********</p></div>
            <div class="line"><p>**********</p></div>
            <div class="line"><p>*********</p></div>
            <div class="line"><p>********</p></div>
            <div class="line"><p>*******</p></div>
            <div class="line"><p>******</p></div>
            <div class="line"><p>*****</p></div>
            <div class="line"><p>****</p></div>
            <div class="line"><p>***</p></div>
            <div class="line"><p>**</p></div>
            {/* <div class="line"><p>*</p></div> */}
          </div>
          <div style={{ marginTop: '100vh' }}>
            <h1>
              <span
                className={`tab ${activeTab === 'welcome' ? 'active' : ''}`}
                onClick={() => handleTabClick('welcome')}
              >
                {activeTab === 'welcome' ? '>Welcome' : 'Welcome'}
              </span>
              <span>/</span>
              <span
                className={`tab ${activeTab === 'bienvenue' ? 'active' : ''}`}
                onClick={() => handleTabClick('bienvenue')}
              >
                {activeTab === 'bienvenue' ? '>Bienvenue' : 'Bienvenue'}
              </span>
            </h1>
          </div>
      <LanguageSwitcher activeTab={activeTab}/>
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
          href="https://docs.google.com/document/d/12qdeXrE5WZzwD_MG4FJcMa5xVB194dmU/edit?usp=drive_link&ouid=106485059702041434206&rtpof=true&sd=true"
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
    <h1>About</h1>
    <img src="/felixpic.jpg" alt="Me in Lucca" />
    <p> <span className="tower-text">Me at the top of Guinigi Tower in Lucca, Italy</span> </p>
    <br></br>
    <div className='textfield'>
      <p>I'm a 3rd year Ling+CS major at UCLA. I'm passionate about history, languages, and tech law.</p>
      <p>Competencies: Python, C++, Javascript/HTML/CSS, Bash, Git</p>
      <p>Honors and Awards: Dean's Honor List (Fall '22, Winter '23, Spring '23), Stockton Scholar</p>
      <p>You can reach me via email: <a href="mailto:fequ830@gmail.com" className="underline-on-hover">fequ830@gmail.com</a></p>
      <br></br>
      <br></br>
    </div>
  </div>
);

const Extra = () => (
  <div className='extra'>
    <h1>Extra</h1>
    <p>What I'm raving about:</p>
    <p>Artists: <a href="https://www.youtube.com/@limperatrice_" target="_blank" rel="noopener noreferrer" className="underline-on-hover">L'Impératrice</a>
    , <a href="https://www.youtube.com/@AltnGunband" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Altın Gün</a>
    , <a href="https://www.youtube.com/@jessieware" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Jessie Ware</a>
    </p>
    <p>Shows: <a href="https://www.netflix.com/title/80136321?source=35" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Babylon Berlin</a>
    , <a href="https://www.netflix.com/title/80025678?source=35" target="_blank" rel="noopener noreferrer" className="underline-on-hover">The Crown</a>
      </p>
    <p>Time wasters: <a href="https://advisa.se/en/research/brexit-bus/" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Brexit Bus</a>
    </p>
  </div>
);


const Projects = () => {
  const items = [
    {
       title: "LeashedIn",
       content: 
       <div className='textfield'>
        <p>Javascript, React, Node.js, MongoDB Atlas</p>
        <p>A social media web application for pet owners, inspired by LinkedIn and Instagram</p>
        <p>Users can create an account, add an account bio/pet subprofiles, publicly post text/images on their feed, like and comment on posts</p>
        <p>Real-time server results include checking username availability and displaying homepage search bar entries</p>
        <a href="https://github.com/fequ830/LeashedIn" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Repo</a>
       </div>
    },
    {
       title: "Pomododo",
       content:
       <div className='textfield'>
        <p>Javascript, React, Firebase</p>
        <p>A web app to help students efficiently divide their study and break times</p>
        <p>Uses Google authentication for profiles so users can track their total hours studied in Firebase server</p>
        <p>Main page has a timer that alternates between study and break modes; features some preset timers of popular study-break intervals like the Pomodoro method, and the option to set custom intervals</p>
        <a href="https://github.com/AnooshkhaShetty/Pomododo" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Repo</a>
     </div>
    },
    {
       title: "Boelter Hall Horror Game",
       content:
       <div className='textfield'>
        <p>Unity, C#</p>
        <p>A first-person horror game where the player must try to escape a haunted version of UCLA’s Boelter Hall</p>
        <p>Created 3D assets such as poster boards and animated TV static to be placed around the map</p>
        <a href="https://olaycolay.itch.io/boelter" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Demo</a>
       </div>
    },
    {
      title: "Peach Party",
      content:
      <div className='textfield'>
        <p>C++, OpenGL, Glut</p>
        <p>A two-player offline game inspired by Nintendo's Mario Party</p>
        <p>Sprites are called upon to change game state depending on player action/interaction with other sprites per tick</p>
        <p>OpenGL API is utilized to render objects in-game each tick</p>
        <a href="https://github.com/fequ830/Peach-Party" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Repo</a>
     </div> 
   },
   {
    title: "Congress Analyzer (coming soon)",
    content:
    <div className='textfield'>
      <p>A tool using the Congress.gov API to analyze voting patterns and bill sponsorship among legislators</p>
      <a href="https://github.com/fequ830/congress-analyzer" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Repo</a>
    </div>
   }
  ]


  return (
    <div className='projects'>
      <h1>Projects</h1>
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

