console.log('chuck\'s computer is loading express')

const express = require('express');
const app = express();
const bodyParser = require('body-parser)').urlencode({estended: true});
const PORT = process.env.PORT || 3000;
app.use(express.static('/portfolio'));

app.get('*',function(request,response) {
  response.status(404).sendFile('404.html', {root: '/portfolio'});
});

app.listen(PORT, function() {
  // TODO: Log to the console a message that lets you know which port your server has started on
  console.log('Express is listening to radio CHUCK on port ' + PORT);
});
console.log(bodyParser)
