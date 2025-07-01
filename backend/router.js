import express from 'express'
import controller from './controller.js'

const router = express.Router();

// router.route("/").get((req,res)=>{
// 	res.status(200).send("Router Route!");
// });

router.route("/home").get(controller.home);
router.route("/register").post(controller.register);
router.route("/skills").get(controller.skills);
router.route("/educations").get(controller.education);
router.route("/projects").get(controller.pro);

export default router;