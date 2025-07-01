import './Footer.css'

function Footer(){

	const year = new Date().getFullYear();

	return (
		<div className="footer">
			<div className="footer-inner">
				<p>© {year} Aniket_Dwivedi.in. All rights are reserved.</p>
			</div>
		</div>
	)
}

export default Footer;