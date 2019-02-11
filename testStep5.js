var getHTML = require('./step5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function doSomething(data) {
  console.log(data);
}

getHTML(requestOptions, doSomething);