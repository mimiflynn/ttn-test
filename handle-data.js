var request = require('request');

var handleData = function (data) {
  console.log(data);
  request.post({
    url: 'https://api.scriptrapps.io/saveRaingarden',
    headers: {
      'Authorization': 'bearer ' + process.env.NODE_SCRIPTR_TOKEN
    },
    body: JSON.stringify(data)
  }, function (error, response, body) {
    if (error) {
      console.log('error');
    } else {
      console.log('success! Return from Scriptr:');
      console.log(body);
    }
  });
};

module.exports = handleData;

//{{
//            "payload": "ET1//xsBAP2pBNIWARk00g==",
//  "fields": {
//                "air_humidity": 66.015625,
//    "air_pressure": 1012,
//    "air_temperature": 27.00390625,
//    "ambient_light": 1234,
//    "packet_type": 17,
//    "payload": "ET1//xsBAP2pBNIWARk00g==",
//    "soil_humidity": 82.03125,
//    "soil_temperature": 25.203125,
//    "vbat": 7.999755859375,
//    "water_temperature": 22.00390625
//  },
//  "port": 1,
//  "counter": 3131,
//  "dev_eui": "00000000688E64E5",
//  "metadata": [
//    {
//      "frequency": 904.7,
//      "datarate": "SF8BW125",
//      "codingrate": "4/5",
//      "gateway_timestamp": 3328496412,
//      "channel": 4,
//      "server_time": "2016-11-30T03:43:56.376581413Z",
//      "rssi": -14,
//      "lsnr": 10.8,
//      "rfchain": 1,
//      "crc": 1,
//      "modulation": "LORA",
//      "gateway_eui": "008000000000ABFF",
//      "altitude": 61,
//      "longitude": -74.03651,
//      "latitude": 40.75664
//    }
//  ]
//}}