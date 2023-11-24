const http = require('http');
var fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const bodyparser =  require("body-parser");
const { stringify } = require('querystring');
var dataFromJson;

// reads the json data
var data = fs.readFileSync('store.json'); //uses readFileSync to store read file synchronisly(before ,moving to next line)
var storeData = JSON.parse(data);
console.log(storeData); // shows the JSON data
dataArray =[];
var exerciseRelatedData;

app.get('/Front_JS.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    // Other logic to send the file
    res.sendFile(__dirname + '/Front_JS.js');
  });



app.use(express.static(path.join(__dirname, 'public'))); // sets the static path to work

app.use(bodyparser.json());
app.get('/api/resource', (req, res) => {
     //Handle GET request logic here
    res.send(storeData);
});

/*app.post('/api/resource', (req, res) => { // req = request, res = respond
    const dataRecieved = req.body;
    console.log("recieved data:", dataRecieved);
    res.json({ message: 'Data received successfully' });
});*/

app.get('/', function(req, res) {

 res.sendFile(path.join(__dirname, 'index.html'));

});

app.get('/create', function( req, res) {
    res.sendFile(path.join(__dirname, 'public', 'createEx.html'));
});

app.post("/api/resourceGET", (req, res) =>{// this function collects data from javascript then writes to json
    dataFromJson = req.body;
    dataArray.push(dataFromJson);
    console.log(dataArray)
    console.log(dataFromJson)
    const jsonData = JSON.stringify(dataArray, null, 2);
    fs.writeFile('store.json', jsonData, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Data written to file successfully');
        }
});
})



app.listen(8000);