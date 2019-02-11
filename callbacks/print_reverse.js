const getHTML = require('../step5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

const printReverse = function (string) {
  console.log(string.split("").reverse().join(""));
};

getHTML(requestOptions, printReverse);