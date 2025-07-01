import { useState,useRef,useEffect } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import './Project.css'
import testing from './assets/testing.png'

function Project({ref}){


	// const cards = [
	// 	{name:'Foodify: Full Stack Web Development',topic:'MERN',link:'https://ani2216.github.io/foodify-IP/',image:'https://raw.githubusercontent.com/ani2216/portoflio/refs/heads/master/foodify_intro.jpeg',bool:true},
	// 	{name:'Mental Health Counselling Summerization',topic:'NLP',link:'https://github.com/ani2216/mental-health-counseling-summarization/tree/master',image:'https://github.com/ani2216/mental-health-counseling-summarization/blob/master/images/DATA.png',bool:true},
	// 	{name:'Speaker Verification',topic:'ML',link:'https://github.com/ani2216/Speaker-Verification/tree/master',image:'https://raw.githubusercontent.com/ani2216/portoflio/refs/heads/master/image.png',bool:true},
	// 	{name:'Fake News Detection',topic:'ML',link:'https://github.com/ani2216/Fake-new-detector',image:'https://raw.githubusercontent.com/ani2216/portoflio/refs/heads/master/13278_2022_995_Fig4_HTML.png',bool:false},
	// 	{name:'Khana Peelana Website',topic:'Full-Stack',link:'https://github.com/ani2216/Khana-Peelana-Website',image:'https://raw.githubusercontent.com/ani2216/Khana-Peelana-Website/refs/heads/master/pics/bg.jpg',bool:false},
	// 	{name:'Heart Failure Prediction',topic:'ML',link:'https://drive.google.com/file/d/1WlOr3J9K3F8I6xx2y7sultUHGlyv2sxP/view?usp=sharing',image:'https://raw.githubusercontent.com/ani2216/portoflio/refs/heads/master/41598_2024_58489_Fig1_HTML.png',bool:false}
	// ]

	const [services, setServices] = useState([]);

  const getServices = async() => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/projects", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setServices(data.message);
				// console.log(data.message);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

	return(
		<div className="project-container">
			<div className="project-inner-container" ref={ref}>
				<h1>Projects</h1>
				<div className="project-section">
					{services.map((label,key)=>(
					<div className="project-content" key={key}>
						{label.bool && <p className='new'>New</p>}
						<img src={label.image} alt="" />
						<div className="project-description">
							<h3>{label.name}</h3>
							<a href={label.link} className='fa fa-github' title='Github' target='_blank'>
								<span>Know More</span>
							</a>
						</div>
					</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Project;