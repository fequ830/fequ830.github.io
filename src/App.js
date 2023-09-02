import React, {useState} from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import Typewriter from "typewriter-effect";

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
          {/* <div className='typewriter-container'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("いらっしゃいませ").start();
              }}
              options={{
                loop: false, wrapperClassName: "typeWriterText", cursorClassName: "typeWriterCursor",
              }}
            />
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("<br />Wilkommen").start();
              }}
              options={{
                loop: false, wrapperClassName: "typeWriterText", cursorClassName: "typeWriterCursor",
              }}
            />
             <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("<br />Ласкаво просимо").start();
              }}
              options={{
                loop: false, wrapperClassName: "typeWriterText", cursorClassName: "typeWriterCursor",
              }}
            />
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("<br />Fáilte").start();
              }}
              options={{
                loop: false, wrapperClassName: "typeWriterText", cursorClassName: "typeWriterCursor",
              }}
            />
          </div> */}
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
      <LanguageSwitcher activeTab={activeTab} />
    </div>
  );
};

const About = () => (
  <div className='about'>
    <h1>About Me</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <img src="/felixpic.jpg" alt="Felix Qu Picture" />
  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>fequ830@gmail.com</strong></p>
    <p> </p>
  </div>
);

const Projects = () => (
  <div className='projects'>
    <h1>Some of my stuff i made</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
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

