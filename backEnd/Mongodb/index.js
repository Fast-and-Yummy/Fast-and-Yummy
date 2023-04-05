const mongoose = require("mongoose");
const Food = require("./Food");
const mongoUri = "mongodb://127.0.0.1/Food";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;

const getAllFoods = (req,res) => {
Food.find().then((reslt)=>{
  res.send(reslt)
}).catch((err)=>{
  res.send(err)
})
};

const addFood =(req,res)=>{
  Food.create(req.body).then((reslt)=>{
    res.send(reslt)
  }).catch((err)=>{
    res.send(err)
  })
};

const updateFood =(req,res)=>{
  Food.updateOne({_id:req.params.id},req.body).then((reslt)=>{
    res.send(reslt)
  }).catch((err)=>{
    res.send(err)
  })
};

const getOne =(req,res)=>{
  Food.find({name:req.params.name}).then((reslt)=>{
    res.send(reslt)
  }).catch((err)=>{
    res.send(err)
  })
};
const deleteOne =(req,res)=>{
  Food.deleteOne({_id:req.params.id}).then((reslt)=>{
    res.send(reslt)
  }).catch((err)=>{
    res.send(err)
  })
}

module.exports = {
  db,
  getAllFoods,
  addFood,
  updateFood,
  getOne,
  deleteOne

};
