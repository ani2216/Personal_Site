import { useState,useRef,useEffect } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import './Project.css'
import testing from './assets/testing.png'

function Project({ref}){


	const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isExpanded, setIsExpanded] = useState(false);

	const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

	useEffect(() => {
    const cachedData = localStorage.getItem('projects');
  if (cachedData) {
    setServices(JSON.parse(cachedData));
    setLoading(false);
		getServices();
  } else {
    getServices();
  }
  }, []);

  const getServices = async() => {
    try {
      const response = await fetch("https://personal-site-7d6r.onrender.com/api/auth/projects", {
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
		finally {
      setLoading(false); 
    }
  };

	return(
		<div className="project-container">
			<div className="project-inner-container" ref={ref}>
				<h1>Projects</h1>
				{loading ? (
          <div className="loader">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        ) : (
				<div className={`project-section ${isExpanded ? "expanded" : ""}`} onClick={handleToggle} >
					{services.sort((a, b) => b.bool - a.bool).map((label,key)=>(
					<div className="project-content" key={key}>
						{label.bool && <p className='new'>New</p>}
						{/* <img src={label.image} alt="" /> */}
						<div className="project-description">
							<h3>{label.name}</h3>
							<p>{label.description}</p>
							<a href={label.link} className='fa fa-github' title='Github' target='_blank'>
								<span>Know More</span>
							</a>
						</div>
					</div>
					))}
				</div>
				)}
			</div>
		</div>
	)
}

export default Project;