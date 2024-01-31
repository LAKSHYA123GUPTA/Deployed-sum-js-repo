import express from 'express'
import cors from 'cors'
const port = 3000;

const app=express();
app.use(express.json());
app.use(cors());
app.get("/sum",(req,res)=>{
    const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
    res.status(200).send("The sum is:  " +(a+b).toString());
})
app.listen(port);