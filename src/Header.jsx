import './Header.css'

function Header({onScroll}){

	return(
		<div className="header">
			<div className="content">
				<div className="left">
					<h2>Aniket_Dwivedi.in</h2>
				</div>
				<div className="right">
					<ul>
						<li onClick={()=>{onScroll('project')}}>Projects</li>
						<li onClick={()=>{onScroll('education')}}>Education</li>
						<li onClick={()=>{onScroll('skill')}}>Skills</li>
						<li onClick={()=>{onScroll('connect')}}><button>Connect with me!</button></li>
					</ul>
				</div>
			</div>

			{/* <div className="navbar">
				<div className="navbar-tags">
					<ul>
						<li>Projects</li>
						<li>Education</li>
						<li>Skills</li>
						<li>Blogs</li>
						<li><button>Hire Me!</button></li>
					</ul>
				</div>
			</div> */}

		</div>
	)

}

export default Header;