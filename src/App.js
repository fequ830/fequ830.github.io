import React, {useState} from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';



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
      <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
    </ul>
    
  </nav>
);

const Home = () => {
  const [activeTab, setActiveTab] = useState('welcome');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='home'>
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
      <div>
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
      <LanguageSwitcher activeTab={activeTab} />
    </div>
  );
};

const About = () => (
  <div className='about'>
    <h1>About</h1>
    <img src="/felixpic.jpg" alt="Felix Qu Picture" />
    <br></br>
    <p>Me on top of the Torre Guigini in Lucca, Italy</p>
    <p>I'm a 3rd year Ling+CS major at UCLA. Always interested in semantic analysis and AI</p>
    <p>Languages: Python, C++, HTML/CSS, JavaScript (React.js), Bash</p>
    <p>Tools: Visual Studio Code, XCode, Git</p>
    <p>Honors and Awards: Dean's Honor List (Fall '22, Winter '23, Spring '23), Stockton Scholar</p>

  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>Contact</h1>
    <p>You can reach me via email: <strong>fequ830@gmail.com</strong></p>
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
      href="https://drive.google.com/uc?export=download&id=12qdeXrE5WZzwD_MG4FJcMa5xVB194dmU"
      target="_blank"
      rel="noopener noreferrer"
      className="button"
    >
      Resume
    </a>
  </div>
);

const Projects = () => (
  <div className='projects'>
    <h1>Projects</h1>
    <p>LeashedIn</p>
    <p>Boelter Hall Horror Game</p>
    <p>Peach Party</p>
    <p>Pomododo</p>
    <p>Congress Analyzer (coming soon)</p>

  </div>
);



const Main = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/projects' element={<Projects />} />
  </Routes>
);





export default App;

