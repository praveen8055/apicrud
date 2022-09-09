const repo = require('../Model/Schema');
const validator = require('../Utilities/validator');
const helper = require('../Utilities/helpers');

exports.addPlan = async (req, res) => {
    try {
        const plan = await repo.find({
            planValue: req.body.planValue,
            type: req.body.type
        });
        if (plan.length == 0) {
            if (validator.ValidatePlanValue(req.body.planValue) &&
                validator.ValidateType(req.body.type)
            ) {

                const Id = await helper.generatePlanId(req.body.type);
                const addplan = await repo.create({
                    planId: Id,
                    planValue: req.body.planValue,
                    gbPerDay: req.body.gbPerDay,
                    addOns: req.body.addOns,
                    unlimitedCalls: req.body.unlimitedCalls,
                    type: req.body.type
                });
                res.status(201).json({
                    status: 'success',
                    data: {
                        addplan,
                    },
                });
            } else if (!validator.ValidatePlanValue(req.body.planValue)) {
                res.status(400).json({
                    status: 'error',
                    results: 'Plan value should be greater than 39',
                });
            } else if (!validator.ValidateType(req.body.type)) {
                res.status(400).json({
                    status: 'error',
                    results: 'Plan type should be postpaid or prepaid',
                });
            }
        } else {
            res.status(400).json({
                status: 'error',
                results: 'Plan already registered',
            });

        }
    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: 'fail',
            message: err,

        });
    }
}

exports.updatePlan = async (req, res) => {
    {
        try {
            const plans = await repo.findOneAndUpdate({
                planId: req.params.planId
            }, {
                $set: {
                    gbPerDay: req.body.gbPerDay
                }
            });
            if (plans) {
                res.status(200).json({
                    status: 'success',
                    data: {
                        plans,
                    },
                });
            } else {
                res.status(400).json({
                    status: 'fail',
                    data: {
                        message: `Plan is not updated `,
                    },
                });
            }
        } catch (err) {
            console.log(err);
            res.status(404).json({

                status: 'fail',
                message: err,
            });
        }
    };

}

exports.fetchPlanDetails = async (req, res,err) => {
    try {
        const plandetails = await repo.find({});
        if (plandetails.length != 0) {
            res.status(200).json({
                status: 'success',
                data: {
                    plandetails,
                },
            });

        } else {
            res.status(400).json({
                status: 'fail',
                data: {
                    message: `Unable to fetch plan details `,
                },
            });

        }

    } catch {
        console.log(err);
        res.status(404).json({

            status: 'fail',
            message: err,
        });

    }

}

exports.deletePlan = async (req, res,err) => {
    try{
        const plandetails=await repo.deleteOne({planId:req.params.planId});
        if(plandetails.length==0){
             res.status(400).json({
                status: 'fail',
                data: {
                    message: `Plan is not deleted `,
                },
            });

        
        }else{
          res.status(200).json({
                status: 'success',
                data: {
                    message:'plan deleted succefully',
                },
            });
        }

    }catch{
        console.log(err);
        res.status(404).json({

            status: 'fail',
            message: err,
        });

    }


}
exports.invalid = async (req, res) => {

res.status(404).json({

        
            message: 'Resource not found',
        });
}