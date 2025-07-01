import { useEffect, useRef, useState } from 'react';
import './Education.css'

function Education({ref}){

	const education = [
  {
    "degree": "M.Tech - Computational Biology",
    "college": "IIIT Delhi",
    "subject": ["Machine Learning", "NLP", "AI"],
    "para": "Pursuing advanced research in Computational Biology with a strong focus on Machine Learning and Natural Language Processing. Engaged in interdisciplinary projects bridging biology and artificial intelligence.",
    "year": "2024-2026",
    "cgpa": 7.86
  },
  {
    "degree": "B.Tech - Computer Science and Engineering",
    "college": "PDM University, Haryana",
    "subject": ["Java Programming", "DBMS", "Operating System", "Computer Networks"],
    "para": "Completed a rigorous undergraduate program with core strengths in software development and system architecture. Developed multiple projects involving Java, database systems, and networking.",
    "year": "2019-2023",
    "cgpa": 8.8
  },
  {
    "degree": "10+2",
    "college": "Happy Public School, Delhi",
    "subject": ["Non-Medical", "Computer Science"],
    "para": "Built a strong foundation in mathematics, physics, and computer science. Actively participated in coding contests and science exhibitions during school years.",
    "year": "2017-2019",
    "cgpa": 9.0
  }
];


	// const [data1, getData] = useState([]);
	const sectionRefs = useRef([]); 

  useEffect(() => {

	// 	const getEdu = async() => {
  //   try {
  //     const response = await fetch("https://raw.githubusercontent.com/ani2216/portoflio/refs/heads/master/education.json");

  //     if (response.ok) {
  //       const data = await response.json();
  //       getData(data);
	// 			console.log(data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching services:", error);
  //   }
  // };

	// 	getEdu();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target) {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            } else {
              entry.target.classList.remove("show");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
	
	return(
		<div className="education-container">
			<div className="education-inner-container" ref={ref}>
				<h1>Education</h1>
					<div className="education-section">
						{education.map((label,index)=>(
						<div className="card" key={index} ref={(el) => (sectionRefs.current[index] = el)}>
							<h1>{label.degree}</h1>
							<h2>{label.college}</h2>
							<h3>Specialization: {label.subject.map((ele,id)=>(<span key={id}>{ele}</span>))}</h3>
							<p>{label.para}</p>
							<div className="card-section">
								<p>Year: {label.year}</p>
								<p>CGPA: {label.cgpa}</p>
							</div>
						</div>
						))}

					</div>
			</div>
		</div>
	)
}

export default Education;