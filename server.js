const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const lodash = require('lodash');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let arrayGreets = [];

let greets = {
        "greeting1": ' Good morning ',
        "greeting2": ' Good afternoon ',
        "greeting3": ' Good evening ',
        "greeting4": ' Hello ',
}

app.get('/', function (req, res) {
    res.json({"greeting": "Hello world"});
});

app.get('/list', function (req, res) {
    res.send(arrayGreets);
});

app.post('/greet', function (req, res) {
    let date_obj = new Date();
    let hours = date_obj.getHours();
    let greeting = greets.greeting4;
    if(hours > 0 && hours < 12){
        greeting = greets.greeting1;
    }else if(hours > 12 && hours < 18){
        greeting = greets.greeting2;
    }else if(hours > 18 && hours < 24){
        greeting = greets.greeting3;
    }
    let statement = greeting + req.body.name;
    let greetingStatement = {"id": uuidv4(),"greeting": statement};
    arrayGreets.push(greetingStatement);

    res.json(greetingStatement);
});

app.put('/update', function (req, res) {
    var selectedIdex = lodash.findIndex(arrayGreets, {"id": req.body.id});
    arrayGreets[selectedIdex].greeting =  req.body.greeting;
    res.json(arrayGreets);
});

app.delete('/delete', function (req, res) {
    var selectedIdex = lodash.findIndex(arrayGreets, {"id": req.body.id});
    if(selectedIdex !=-1)
    {
        arrayGreets.splice(selectedIdex,1);
    }
    res.json(arrayGreets);
});

// start server
const port =  80;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

