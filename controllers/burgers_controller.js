var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post('/burgers', function (req, res) {
    burger.insertOne('burger_name', [req.body.burger_name], function (data) {
        res.redirect('/')
    });
});

router.put('/burgers/:id', function (req, res) {
    var id = req.params.id
    
    burger.updateOne({
        devoured: true
    }, id, function (data) {
        res.redirect('/');
    });
});

module.exports = router;