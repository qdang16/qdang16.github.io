var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(include('./template.html'));
})

app.set('port', 8999);

app.listen(8999, ()=>{
  console.log('Server listening on port ' + app.get('port') + ' in ' + app.get('env') + ' mode');
});
