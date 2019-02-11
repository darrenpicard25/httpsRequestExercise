const getHTML = require('../step5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

const printLowerCase = function (string) {
  console.log(string.toLowerCase());
};

getHTML(requestOptions, printLowerCase);
