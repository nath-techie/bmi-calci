const express=require("express");
const app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/bmi.html")
});
app.post("/",(req,res)=>{
  var w=Number(req.body.weight);
  var h=Number(req.body.height);
  var bmi=w/((h/100)*(h/100));
  res.send("Your BMI is" +bmi);
  if(bmi>25)
  res.send("you are over weight");
});

app.listen(3000,console.log("working"));
