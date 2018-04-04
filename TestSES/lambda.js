let AWS = require('aws-sdk');
const ses = new AWS.SES();
exports.handler = function (event, context, callback) {
	let message = event['message'];

	ses.sendEmail({
		Destination: {
			ToAddresses: ['randika@adroitlogic.com'],
			CcAddresses: [],
			BccAddresses: []
		},
		Message: {
			Body: {
				Text: {
					Data: message
				}
			},
			Subject: {
				Data: 'TestingSES'
			}
		},
		Source: 'kannangarar1993@gmail.com'
	}, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});


	callback(null, "Success");
}