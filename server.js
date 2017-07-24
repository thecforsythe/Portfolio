console.log('chuck\'s computer is loading express')
console.log('chuck\'s computer is loading express')

const express = require('express');
const app = express();
//const bodyParser = require('body-parser)').urlencode({estended: true});
const PORT = process.env.PORT || 3000;
app.use(express.static('.'));

//was unsure how to enable bodyParser since I do not have a form or articles, I have read that it may be required to parse json data. Is that correct?
/*app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html,
  // and log that form data to the console. We will wire this up soon to actually
  // write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');*/

app.get('*',function(request,response) {
  response.status(404).sendFile('404.html', {root: '/portfolio'});
});

app.listen(PORT, function() {
  console.log('Express is listening to radio CHUCK on port ' + PORT);
});
//console.log(bodyParser)
