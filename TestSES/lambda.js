let AWS = require('aws-sdk');
const ses = new AWS.SES();
exports.handler = function (event, context, callback) {
	let message = event.message;
	ses.sendEmail({
		Destination: {
			ToAddresses: ['andun@adroitlogic.com'],
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
				Data: 'Test for SES'
			}
		},
		Source: 'andun@adroitlogic.com'
	}, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});

	callback(null, 'Successfully executed');
}