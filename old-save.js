var documents = require('document');

var msg = JSON.parse(request.rawBody);

// array to populate as follows
/*
  [
    'Time',
    'Air Humidity',
    'Air Temp',
    'Air Pressure',
    'Ambient Light',
    'Soil Humidity',
    'Soil Temp',
    'Water Temp',
    'Battery Voltage'
  ]
 */
var raingardenData = [];

if (msg.fields.packet_type == 0x11) {
  // handle rain garden sensor packet
  raingardenData.push(msg.metadata.gateway_timestamp);
  raingardenData.push(msg.fields.air_humidity);
  raingardenData.push(msg.fields.air_temperature);
  raingardenData.push(msg.fields.air_pressure);
  raingardenData.push(msg.fields.ambient_light);
  raingardenData.push(msg.fields.soil_humidity);
  raingardenData.push(msg.fields.soil_temperature);
  raingardenData.push(msg.fields.water_temperature);
  raingardenData.push(msg.fields.vbat);
  
  // save data
  return documents.save(raingardenData);
} else {
  return 'Unsupported packet format.';
}