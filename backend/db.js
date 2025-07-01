import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

// const URI = process.env.MONGODB_URI;
// console.log(URI);

const connectdb = async()=>{
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("Database Connected!")
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}

export default connectdb;