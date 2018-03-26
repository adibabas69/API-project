
//Basic required import for NodeJS
var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');

//Create an instance of express for our app and instantiate bodyParser and Cors
var app = express();
app.use(bodyParser.json());
app.use(cors());




// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

//Get CALL to return JSON thats format natural and unix date
app.get("/:dateVal", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
  
  var dateVal = request.params.dateVal;
  
   response.json({unix: dateVal});
});



// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})