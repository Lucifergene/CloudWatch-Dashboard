const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const router = express.Router();
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
router.use(expressLayouts);

AWS.config.update({ region: 'ap-south-1' });
var cloudwatch = new AWS.CloudWatch();

router.get('/', async (req, res) => {
    let MetricAlarms = [];
    cloudwatch.describeAlarms({}, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else {
            MetricAlarms = data.MetricAlarms;
            console.log(MetricAlarms);
            res.render('list', { MetricAlarms: MetricAlarms });
        }           // successful response
    });
});

module.exports = router;