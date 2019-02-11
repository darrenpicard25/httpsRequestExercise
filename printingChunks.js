const https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(dataChunk) {
      console.log(dataChunk + '\n\n\n');
    });

    response.on('end', function () {
      console.log("All done Streaming");
    });
  });
}

getAndPrintHTMLChunks();