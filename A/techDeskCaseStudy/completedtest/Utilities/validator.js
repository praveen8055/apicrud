exports.ValidatePlanValue = function (planValue) {
    if(planValue<39){
        return false;
    }else{
        return true;
    }
  
};

exports.ValidateType = function (type) {
  type=type.toLowerCase();
  if(type=="postpaid"||type=="prepaid"){
    return true;
  }else{
    return false;
  }
};
