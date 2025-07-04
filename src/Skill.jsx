import './Skill.css'
import { useEffect, useState } from 'react'

function Skill({ref}){

  const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(true);

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
      const response = await fetch("https://personal-site-7d6r.onrender.com/api/auth/skills", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setServices(data.message);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
		finally {
      setLoading(false); 
    }
  };

	return(
		<div className="skill-container">
			<div className="skill-inner-container" ref={ref}>
				<h1>Skills</h1>
				{loading ? (
          <div className="loader">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        ) : (
				<div className="skill-section">
					{services.map((label,index)=>(
					<div className="card" key={index}>
						<img src={label.logo} alt={label.lang} />
						<h3>{label.lang}</h3>
						<div className="skill-bar">
							<div className="bar">
								<div className="bar-inner" style={{width:`${label.per}%`,height:'100%',backgroundColor:'rgb(253, 253, 249)',borderRadius:'5px'}}><span style={{marginLeft:`${label.per}%`}}>{label.per}%</span></div>
							</div>
						</div>
					</div>
					))}
				</div>
				)}
			</div>
		</div>
	)
}

export default Skill;