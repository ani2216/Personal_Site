import { act, useState } from 'react'
import './Blogs.css'
import testing from './assets/testing_pic.jpg'

function Blogs(){

	const blog = ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam veritatis fugit eius! Veritatis porro labore illo optio, ea quo excepturi rerum similique, atque dolorem laborum!',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam veritatis fugit eius! Veritatis porro labore illo optio, ea quo excepturi rerum similique, atque dolorem laborum!',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam veritatis fugit eius! Veritatis porro labore illo optio, ea quo excepturi rerum similique, atque dolorem laborum!',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam veritatis fugit eius! Veritatis porro labore illo optio, ea quo excepturi rerum similique, atque dolorem laborum!',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam veritatis fugit eius! Veritatis porro labore illo optio, ea quo excepturi rerum similique, atque dolorem laborum!',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam veritatis fugit eius! Veritatis porro labore illo optio, ea quo excepturi rerum similique, atque dolorem laborum!'
	]

	const [active,setActive] = useState(0);

	const handleClick = (index)=>{
		setActive(index === active?null:index);
	}

	return(
		<div className="blog-container">
			<div className="blog-inner-container">
				<h1>Blogs</h1>

				<div className="blog-card-container">
					<div className="blog-card-info">
						<img src={testing} alt="" />
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum sit ex rem libero, nam quos id nemo sed sunt aliquid ea asperiores dicta distinctio, expedita possimus consequatur, quibusdam modi!
						Quas, voluptates expedita praesentium nisi fugit, quod magnam voluptatem vel iusto eius harum consectetur possimus velit, minus enim similique quisquam doloremque quis odio earum veniam? Rem voluptatem eligendi vitae enim.
						Eaque nam iure quis obcaecati eius? Voluptas optio facilis laboriosam molestias ipsa mollitia nesciunt corporis itaque? Voluptatem pariatur quis rem beatae. Ipsam ea modi corporis cupiditate quo voluptate ratione. Culpa?
						Deleniti iste impedit soluta necessitatibus porro distinctio blanditiis, tenetur eaque eum amet consectetur asperiores quam obcaecati ex, quidem laudantium ad a sequi accusamus maiores quos et esse accusantium? Quo, accusantium.
						Deserunt explicabo dolores, cupiditate, dicta odio aliquam hic cum officiis sunt reiciendis aut maxime omnis tempora quas, at reprehenderit nesciunt voluptatum distinctio magnam repellendus alias est laudantium sequi ex. Distinctio.
						Numquam voluptatibus minus molestias doloribus et earum officia architecto blanditiis a officiis temporibus id, quae nobis ab ipsam nihil dolores assumenda enim perspiciatis. Maiores magni molestiae quos, sed suscipit aspernatur.
						Ut deleniti quaerat cupiditate error exercitationem, velit dolorem minus. Nisi ut cumque, suscipit beatae inventore est in distinctio voluptate temporibus dolores repellat sed maxime! Id libero molestiae odit quae nobis.
						Exercitationem dolorem reprehenderit dicta recusandae quibusdam earum quidem deleniti quasi maxime aliquam, ipsam adipisci eum aspernatur ea deserunt voluptates omnis molestias molestiae ex odit et. Possimus magni minus corrupti eius?
						Sunt dolorum delectus voluptate libero quo ea ipsum iure assumenda nesciunt quidem harum consequatur optio consequuntur eum repudiandae corrupti voluptates doloribus, molestiae autem, perferendis, et aliquid velit quam odit! Velit.
						Ratione natus voluptates excepturi doloribus aliquid cum facilis expedita, beatae in voluptatibus rem eius deleniti quo reiciendis dolorum quidem modi sint. Iste maxime facere consequuntur id, ex quos libero blanditiis?</p>
					</div>
					<div className="blog-card">
						<div className="card">
							{blog.map((label,index)=>(
							<div className={`card-info ${active===index?"active":""}`} key={index} onClick={()=> handleClick(index)}>
								<img src={testing} alt="" />
								<p>{label.slice(0,100)}....</p>
							</div>
							))}
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Blogs;