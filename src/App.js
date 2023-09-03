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
          href="https://drive.google.com/uc?export=download&id=12qdeXrE5WZzwD_MG4FJcMa5xVB194dmU"
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
    <img src="/felixpic.jpg" alt="Felix Qu Picture" />
    <br></br>
    <p>
      <span className="tower-text">Me at the top of Guinigi Tower in Lucca, Italy</span>
    </p>
    <br></br>
    <div className='textfield'>
      <p>I'm a 3rd year Ling+CS major at UCLA. I'm passionate about webdev, AI, and languages (coding + spoken).</p>
      <p>Languages: Python, C++, HTML/CSS, JavaScript (React.js), Bash</p>
      <p>Tools: Visual Studio Code, XCode, Git</p>
      <p>Honors and Awards: Dean's Honor List (Fall '22, Winter '23, Spring '23), Stockton Scholar</p>
      <br></br>
      <p>You can reach me via email: <strong>fequ830@gmail.com</strong></p>
    </div>
  </div>
);

const Extra = () => (
  <div className='extra'>
    <h1>Extra</h1>
    <p>The _____ I'm raving about</p>
    <a
      href="https://www.youtube.com/channel/UCQ4mN8NcmaayKkEErES5-Sw"
      target="_blank"
      rel="noopener noreferrer"
      className="button"
    >
      Artist
    </a>
    <p></p>
    <a
      href="https://www.netflix.com/title/80136321?source=35"
      target="_blank"
      rel="noopener noreferrer"
      className="button"
    >
      TV series
    </a>
    <p></p>
    <a
      href="https://advisa.se/en/research/brexit-bus/"
      target="_blank"
      rel="noopener noreferrer"
      className="button"
    >
      Time waster
    </a>

  </div>
);


const Projects = () => {
  const projectList = [
    { name: 'LeashedIn', link: 'https://github.com/fequ830/LeashedIn', description:
    <div>
      <p>Javascript, React, Node.js, MongoDB Atlas</p>
      <p>-A collaboration on a social media web application for pet owners, inspired by LinkedIn and Instagram</p>
      <p>-Users are able to create an account, add an account bio/pet subprofiles, publicly post text/images on their feed, like and comment on posts</p>
      <p>-Real-time server results include checking username availability and displaying homepage search bar entries</p>
    </div> },
    { name: 'Boelter Hall Horror Game', link: 'https://olaycolay.itch.io/boelter', description:
    <div>
      <p>Unity, C#</p>
      <p>-A first-person horror game where the player must try to escape a haunted version of UCLA’s Boelter Hall</p>
      <p>-Created 3D assets such as poster boards and animated TV static to be placed around the map</p>
    </div> },
    { name: 'Peach Party', link: 'https://github.com/fequ830/Peach-Party', description:
    <div>
    <p>C++, OpenGL, Glut</p>
    <p>-Created a two-player offline game inspired by Nintendo's Mario Party</p>
    <p>-Sprites are called upon to change game state depending on player action/interaction with other sprites per tick</p>
    <p>-OpenGL API is utilized to render objects in-game each tick</p>
  </div> },
    { name: 'Pomododo', link: 'https://github.com/AnooshkhaShetty/Pomododo', description:
    <div>
    <p>Javascript, React, Firebase</p>
    <p>-Developed Pomododo, a web app to help students efficiently split their studying sessions and break times</p>
    <p>-Uses Google authentication for profiles so users can track their total hours studied in Firebase server</p>
    <p>-Main page has a timer that alternates between study and break modes; features some preset timers of popular study-break intervals like the Pomodoro method, and the option to set custom intervals</p>
  </div> },
    { name: 'Congress Analyzer (coming soon)', link: 'https://github.com/fequ830/congress-analyzer',description:
    <div>
    <p>A tool using the Congress.gov API to analyze the voting patterns of Congressmembers and amendment votes</p>
  </div>},
  ];

  // return (
  //   <div className='projects'>
  //     <h1>Projects</h1>
  //     <ul>
  //       {projectList.map((project, index) => (
  //         <li key={index} className="project-item">
  //           <span className="project-name">{project.name}</span>
  //           <span className="project-description">{project.description}</span>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  return (
    <div className='projects'>
      <h1>Projects</h1>
      <ul>
        {projectList.map((project, index) => (
          <li key={index} className="project-item">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-name"
            >
              {project.name}
            </a>
            <span className="project-description">{project.description}</span>
          </li>
        ))}
      </ul>
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

