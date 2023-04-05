const express = require('express');
const cors =require('cors');
const port = 5000;
const app = express();
const {getAllFoods,addFood,getOne,updateFood,deleteOne}=require("./Mongodb/index")
//uncomment to use mongodb
 const db = require('./Mongodb')
// uncomment to use MYSQL 
// const db = require("./Mysql")
app.use(cors());
app.use(express.json())


app.get('/api/Foods/getAll',getAllFoods)
app.post('/api/Foods/add',addFood)
app.get('/api/Foods/:name',getOne)
app.put('/api/Foods/:id',updateFood)
app.delete('/api/Foods/:id',deleteOne)






app.listen(port, ()=>{
console.log(`listening on ${port}`);
})