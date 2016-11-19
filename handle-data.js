var request = require('request');

var handleData = function (data) {
  console.log(data);
  request({
    method: 'POST',
    url: 'https://api.scriptrapps.io/test',
    headers: {
      Authorization: 'bearer ' + process.env.NODE_SCRIPTR_TOKEN
    },
    body: data
  },
  function (error, response, body) {
    if (error) {
      console.log('error');
    } else {
      console.log('success');
      console.log(body);
    }
  });
};

module.exports = handleData;
