const express = require('express');


const routing = express.Router();
const plan= require('../Controller/plan');

routing.post('/addPlan', plan.addPlan);

routing.get('/newsPlans', plan.fetchPlanDetails);

routing.put('/updatePlan/:planId', plan.updatePlan);

routing.delete('/removePlan/:planId', plan.deletePlan);



routing.all('*', plan.invalid);

module.exports = routing;
