import { useRef, useState } from 'react'
import './App.css'
import Header from './Header'
import MainBody from './MainBody'
import Project from './Project'
import Education from './Education'
import Skill from './Skill'
import Blogs from './Blogs'
import Footer from './Footer'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0);
  const projectRef = useRef(null);
  const educationRef = useRef(null);
  const skillRef = useRef(null);
  const connectRef = useRef(null);

  const handleScroll = (section) => {
    if (section === 'project') {
      projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'skill') {
      skillRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'education') {
      educationRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'connect') {
      connectRef.current?.scrollIntoView({ behavior: 'smooth' });
    } 
  };

  return (
    <div className="container">
      <Header onScroll = {handleScroll}/>
      <div className="padded-container">
        <MainBody />
      </div>
      <Project ref={projectRef}/>
      <Education ref={educationRef}/>
      <Skill ref={skillRef}/>
      {/* <Blogs /> */}
      <Form ref={connectRef}/>
      <Footer />
    </div>
  )
}

export default App
