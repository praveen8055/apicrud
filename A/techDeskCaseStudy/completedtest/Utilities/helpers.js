const repo = require('../Model/Schema');

exports.generatePlanId = async (type) => {
  const planDetails = await repo.find({})
  if(type.toUpperCase()=="PREPAID"){
    
  const Id = "PR"+10+planDetails.length;
  return Id;
  }else{
   const Id = "PO"+10+planDetails.length;
  return Id;
  } 
}
