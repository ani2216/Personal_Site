// import { model } from 'mongoose';
import User from './model/form.js'
import model1 from './model/skill.js';
import Educations from './model/educations.js';
import project from './model/projects.js';

const home = (req,res)=>{
	try{
	res.status(200).send("Home page loaded!");
	}
	catch(error){
		res.status(400).send(error);
	}
}

const register = async(req,res)=>{
	try{
	const {name,email,message} = req.body;
	await User.create({name,email,message});
	res.status(200).send("Send the data Successfully!");
	}
	catch(error){
		res.status(400).send(error);
	}
}

const skills = async(req, res) => {
  try {
    const skill = await model1.find();
    res.status(200).json({message:skill});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const education = async(req, res) => {
  try {
    const ed = await Educations.find();
    res.status(200).json({message:ed});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const pro = async(req, res) => {
  try {
    const proj = await project.find();
    res.status(200).json({message:proj});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export default {home,register,skills,education,pro};