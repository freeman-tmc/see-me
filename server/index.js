var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var queryParser = require('mongoose-query-parser').MongooseQueryParser;
var parser = new queryParser();
var Users = require('./models/contactsModel');
mongoose.connect('mongodb://localhost/app');

// setting middleware
app.use(bodyParser.json());

// setting headers
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// routing
// /api route
app.route('/api')
    .get((req, res) => {
        const query = parser.parse(req.query);
        console.log(query);
        
        Users.find(query.filter).sort(query.sort).limit(query.limit).skip(query.skip)
            .then(docs => {
                res.json(docs);
            })
            .catch(err => {
                res.send('error has occured');
            })
    })
    .post((req, res) => {
        Users.create(req.body)
            .then(docs => {
                res.send('new user added successfuly');
            })
            .catch(err => {
                console.log(err);
                
                res.send('error has occured');
            })
    });

// /api/:id route
app.route('/api/:id')
    .get((req, res) => {
        var id = req.params.id;
        Users.find({_id: id})
            .then(docs => {
                res.json(docs);
            })
            .catch(err => {
                res.send('error has occured');
            })
    })
    .put((req, res) => {
        const id = req.params.id;      
        const newData = req.body;
        Users.update({_id: id}, newData)
            .then(docs => {
                    res.json(docs);
            })
            .catch(err => {
                console.log(err);
                
                res.send('error has occured');
            })
    })
    .delete((req, res) => {
        const id = req.params.id;      
        Users.remove({_id: id})
            .then(docs => {
                    res.json(docs);
            })
            .catch(err => {
                res.send('error has occured');
            })
    });

    // start server
app.listen(3001, () => {
    console.log('starting server on port 3001');
});

