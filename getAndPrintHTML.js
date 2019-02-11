const https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  let stringCatcher = "";

  https.get(requestOptions, function(response) {

    response.on('data', function(dataChunk) {
      stringCatcher += dataChunk;
    });

    response.on('end', function() {
      console.log(stringCatcher);
    });

  });

}

getAndPrintHTML();