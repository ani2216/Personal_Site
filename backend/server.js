import express from 'express';
import router from './router.js';
import connectdb from './db.js';
import cors from 'cors';
// import routerskill from './model/skillrouter.js';

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  method: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials:true
}

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth",router);
// app.use("/api/data",routerskill);

// app.get("/", (request, response) => {
//   response.status(200).send("Hello World! Aniket this side.");
// });

// app.get("/admin",(request,repsonse)=>{
// 	repsonse.status(200).send("At Admin Panel");
// })

const PORT = 5000;

connectdb().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server is running at: ${PORT}`);
  });

});
