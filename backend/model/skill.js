import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  logo: {
		type: String,
		require: true
	},
	lang: {
		type: String,
		require: true
	},
	per: {
		type: String,
		require: true
	}
});

const model1 = new mongoose.model("skills",skillSchema);

export default model1;