var gpio = require('onoff').Gpio;
var pir = new gpio(17, 'in', 'both');
 
pir.watch(function(err, value) {
  if (err) {
    console.log('Error starting motion sensor:' + e);
    exit();
  }
  
  console.log('Motion detected');
  
  if (value == 1) {
    require('./mailer').sendEmail();
  }
});
 
console.log('Monitoring for motion...');
 
function exit() {
  console.log("Shutting down IOT Sense...");
  pir.unexport();
  process.exit();
}
