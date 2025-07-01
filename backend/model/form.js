import mongoose from "mongoose";

const schema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true
	},
	message: {
		type: String,
		require: true
	}
});

const model = new mongoose.model("form",schema);

export default model;