module.exports = function getHTML (options, callback) {
    /* Your code here */
    const https = require('https');
    let fullFile = '';
    https.get(options, function (response) {
      response.on('data', function(dataChunk) {
        fullFile += dataChunk;
      });

      response.on('end', function() {
        callback(fullFile);
      });
    });
};