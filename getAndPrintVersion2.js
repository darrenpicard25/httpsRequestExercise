let https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */
  let dataCollection = '';
  https.get(options, function(response) {

    response.on('data', function (dataChunk) {
      dataCollection += dataChunk;
    });

    response.on('end', function () {
      console.log('All done Reading\n');
      console.log(dataCollection);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);