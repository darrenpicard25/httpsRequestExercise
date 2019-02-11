const https = require('https');

function getHTML (options, callback) {

  /* Add your code here */
  https.get(options, function (response) {
    let fullFile = '';
    response.on('data', function (dataChunk) {
      fullFile += dataChunk;
    });
    response.on('end', function () {
      callback(fullFile);
    });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);