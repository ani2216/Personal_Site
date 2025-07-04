import './MainBody.css'
import trail_img from './assets/profile.jpeg'

function MainBody(){

	const gmailId = "ani22ket16@gmail.com";
	const handleResume = () => {
  window.open("https://drive.google.com/file/d/1EvFYzbUQXLpg-60S0-ekRcPG3D0J5izm/view?usp=sharing", "_blank");
	};


	return(
		<div className="main-container">
			<div className="main-inner-container">
				<div className="left">
					<h2>I'm Aniket</h2>
					<h1>Software Developer+<br />Learner</h1>
					<p>A tech enthusiast with a strong foundation in computer science and a keen interest in practical software development.</p>
					<div className="tags">
						<button onClick={handleResume}>Download CV</button>
						<div className="links">
						<a href="https://github.com/ani2216" target='_blank' className='fa fa-github' title='Github'></a>
						<a href="https://www.linkedin.com/in/aniket-dwivedi-a005901b1/" target='_blank' className='fa fa-linkedin' title='Linkedin'></a>
						<a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${gmailId}`} target='_blank' className='fa fa-envelope' title='Gmail'></a>
						<a href="https://www.instagram.com/_aniketdwivedi?igsh=NWJrd3YxaG5heTh3" target='_blank' className='fa fa-instagram' title='Instagram'></a>
						</div>
					</div>
				</div>
				<div className="right">
						<img src={trail_img} alt="" />
						<hr className='hr-image'/>
				</div>
			</div>
		</div>
	)
}

export default MainBody;