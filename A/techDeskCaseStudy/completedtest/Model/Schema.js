const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/planDB', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

//Schema
const Schema = new mongoose.Schema(
  {
    planId: {type:String,unique:true},
    planValue:Number,
    gbPerDay:Number,
    addOns:String,
    unlimitedCalls:Boolean,      
    type:String
    })
   

//Model
const repo = mongoose.model('repo', Schema);
repo.insertMany([{
  planId:"PO101",
  planValue:299,
  gbPerDay:0.5,
  addOns:"NA",
  unlimitedCalls:false,
  type:"POSTPAID"
},{
  planId:"PR101",
  planValue:99,
  gbPerDay:0.5,
  addOns:"NA",
  unlimitedCalls:false,
  type:"PREPAID"
},{
  planId:"Po102",
  planValue:599,
  gbPerDay:5,
  addOns:"Netflix Subscription for 3 months",
  unlimitedCalls:false,
  type:"POSTPAID"
}
])

repo.deleteMany({}, function (err) {
  console.log('collection removed');
});

module.exports = repo;
