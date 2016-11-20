var request = require('request');

var handleData = function (data) {
  console.log(data);
  request.post({
    url: 'https://api.scriptrapps.io/opensensors',
    headers: {
      'Authorization': 'bearer ' + process.env.NODE_SCRIPTR_TOKEN
    },
    body: JSON.stringify(data)
  }, function (error, response, body) {
    if (error) {
      console.log('error');
    } else {
      console.log('success');
      console.log(body);
    }
  });
};

module.exports = handleData;
