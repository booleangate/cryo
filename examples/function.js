var Cryo = require('../lib/cryo');

function fn() {}

try {
  var withJSON = JSON.parse(JSON.stringify(fn));
  console.log(typeof withJSON === 'function');
} catch(e) {
  console.log('error');                             // error
}

var withCryo = Cryo.parse(Cryo.stringify(fn));
console.log(typeof withCryo === 'function');        // true
