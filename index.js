var ttn = require('ttn');

var appEUI = '70B3D57ED0001668';
var accessKey = '52h8DdmT8Qxr/4mqliuhT6OlB3jMan9JpLYSpdljabg=';
var client = new ttn.Client('staging.thethingsnetwork.org', appEUI, accessKey);

client.on('uplink', function(msg) {
  console.log('Received message', msg);
});

client.on('error', function(err) {
  console.log('[ERROR], err.message');
});

client.on('activation', function(msg) {
  console.log('Device activated: ', msg.devEUI);
});

