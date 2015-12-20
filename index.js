var config = require('config');
var sleep = require('sleep');

// initialization
var pin = config.get('pin');

var door = null;
Gpio = require('onoff').Gpio,
  door = new Gpio(18, 'in');

door.watch(function (err, value) {
  if (err) {
    throw err;
  }

  console.log(value);
});
