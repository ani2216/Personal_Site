import { useState } from 'react';
import './Form.css'

function Form({ref}){

	const [user,setUser] = useState({
		name:"",
		email:"",
		message:""
	});
	const [successMessage, setSuccessMessage] = useState(false);

	const max_limit = 2500
  const handleChange = (e) => {
		const {name,value} = e.target;

		if(name === "message"){
    if (e.target.value.length <= max_limit) {
      setUser({...user,[name]:value});
    }
		} else{
			setUser({...user,[name]:value});
		}
  };

	const handleForm = async(e)=>{
		e.preventDefault();
		// console.log(user);
		try {
		const response = await fetch('https://personal-site-7d6r.onrender.com/api/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});

		if (response.ok) {
			// alert("Message sent successfully!");
			setSuccessMessage(true);
			setUser({ name: "", email: "", message: "" });
			setTimeout(() => setSuccessMessage(false), 3000);
		} else {
			alert("Failed to send message.");
		}
	} catch (error) {
		console.error("Error:", error);
		alert("Error sending message.");
	}
	}

	return(
		<div className="form-container" ref={ref}>
			<div className="form-inner-container">
				<h1>Connect with me</h1>

				<div className="form">
					<form onSubmit={handleForm}>
						<input type="text" name="name" id="name" required autoComplete='off' value={user.name} onChange={handleChange} placeholder="John Doe"/><br/>
						<input type="email" name="email" id="email" required autoComplete='off' value={user.email} onChange={handleChange} placeholder='johndoe@gmail.com'/><br/>
						<textarea name="message" id="textarea" value={user.message} onChange={handleChange} required placeholder='Hi, Aniket!....'></textarea>
						<p className='limit'>{user.message.length}/{max_limit}</p>
						<button type="submit">Submit</button>
					</form>
				</div>
				{successMessage && (
        <div className="success-toast">
          ✅ Message Sent Successfully!
        </div>
      )}
			</div>
		</div>
	)	
}

export default Form;