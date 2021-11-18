const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentdb',{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>{
  console.log("Connection Succesfull with Mongodb");  
}).catch((err)=>{
    console.log(`the error is ${err}`)
});