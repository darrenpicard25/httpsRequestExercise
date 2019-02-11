const getHTML = require('../step5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};


function printUpperCase (string) {
  console.log(string.toUpperCase());
}

getHTML(requestOptions, printUpperCase);