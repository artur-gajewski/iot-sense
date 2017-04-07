var nodemailer = require('nodemailer');
 
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'IOT_SENSE_EMAIL_ACCOUNT@gmail.com',
    pass: 'IOT_SENSE_EMAIL_PASSWORD'
  }
});
 
var timerId;

module.exports.sendEmail = function() {
  if (timerId) return;
 
  timerId = setTimeout(function() {
    clearTimeout(timerId);
    timerId = null;
  }, 10000);
 
  console.log('Sending IOT Sense message...');
 
  var mailOptions = {
    from: 'IOT Sense <IOT_SENSE_EMAIL_ACCOUNT@gmail.com>',
    to: 'RECIPIENT_EMAIL_ACCOUNT@gmail.com',
    subject: '[IOT Sense] Motion Detected',
    html: 'Your sensor detected motion at ' + Date() + '<br/>Sincerely,<br/><i>IOT Sense</i>'
  };
 
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });
}
